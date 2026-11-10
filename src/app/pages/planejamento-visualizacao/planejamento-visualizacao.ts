import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { forkJoin, of } from 'rxjs';
import { catchError, finalize, map, switchMap, timeout } from 'rxjs/operators';
import { RegistroService, TipoRegistro } from '../../services/registro.service';
import {
  Planejamento,
  PlanejamentoAproveitamento,
  PlanejamentoGrupoAssunto,
  PlanejamentoGrupoAssuntoItem,
  PlanejamentoGrupoMateria,
  PlanejamentoItemEtapa,
  PlanejamentoMateria,
  PlanejamentoService,
} from '../../services/planejamento.service';

interface GrupoVisualizacao {
  nome: string;
  assuntos: AssuntoVisualizacao[];
}

interface AssuntoVisualizacao {
  id: number;
  nome: string;
  peso?: number | null;
  dificuldade?: number | null;
  materiaPlanejamentoId: number;
  grupoId: number;
  itemId: number;
  ordem?: number | null;
  etapas: EtapaVisualizacao[];
  questoesFeitas: number;
  questoesAcertadas: number;
}

interface EtapaVisualizacao {
  id?: number;
  tipoRegistroId: number;
  nome: string;
  ordem?: number | null;
  iniciada: boolean;
  concluida: boolean;
  dataConcluida?: string | null;
}

type StatusEtapa = 'NAO_INICIADO' | 'EM_ANDAMENTO' | 'CONCLUIDO';

interface MateriaVisualizacao {
  id: number;
  materiaId: number;
  nome: string;
  peso?: number | null;
  dificuldade?: number | null;
  grupoMateriaId?: number | null;
  ordem?: number | null;
  grupos: GrupoVisualizacao[];
  aberta: boolean;
}

interface BlocoMateriaVisualizacao {
  id: number;
  nome: string;
  peso?: number | null;
  dificuldade?: number | null;
  ordem?: number | null;
  materias: MateriaVisualizacao[];
  aberto: boolean;
}

@Component({
  selector: 'app-planejamento-visualizacao',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './planejamento-visualizacao.html',
  styleUrl: './planejamento-visualizacao.css',
})
export class PlanejamentoVisualizacaoComponent implements OnInit {
  private readonly service = inject(PlanejamentoService);
  private readonly registroService = inject(RegistroService);
  private readonly message = inject(NzMessageService);
  private readonly route = inject(ActivatedRoute);
  private readonly cdr = inject(ChangeDetectorRef);

  planejamento?: Planejamento;
  planejamentos: Planejamento[] = [];
  materias: MateriaVisualizacao[] = [];
  blocosMaterias: BlocoMateriaVisualizacao[] = [];
  carregando = true;
  erro = false;
  tiposRegistro: TipoRegistro[] = [];
  etapasSendoSalvas = new Set<string>();
  materiaEditandoId: number | null = null;
  pesoMateriaEdicao: number | null = null;
  dificuldadeMateriaEdicao: number | null = null;
  salvandoMateria = false;
  assuntosSendoSalvos = new Set<number>();
  grupoMateriaEditandoId: number | null = null;
  pesoGrupoMateriaEdicao: number | null = null;
  dificuldadeGrupoMateriaEdicao: number | null = null;
  salvandoGrupoMateria = false;

  get totalMaterias(): number {
    return this.todasAsMaterias().length;
  }

  get totalAssuntos(): number {
    return this.todasAsMaterias().reduce(
      (total, materia) => total + this.quantidadeAssuntos(materia),
      0,
    );
  }

  get totalEtapas(): number {
    return this.todosOsAssuntos().reduce((total, assunto) => total + assunto.etapas.length, 0);
  }

  get etapasConcluidas(): number {
    return this.todosOsAssuntos().reduce(
      (total, assunto) => total + assunto.etapas.filter((etapa) => etapa.concluida).length,
      0,
    );
  }

  get progressoPlanejamento(): number {
    return this.totalEtapas ? Math.round((this.etapasConcluidas / this.totalEtapas) * 100) : 0;
  }

  ngOnInit(): void {
    this.registroService.listarTiposRegistro().subscribe({
      next: (tipos) => (this.tiposRegistro = tipos),
      error: (erro) => console.error('Erro ao carregar tipos de registro:', erro),
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (Number.isInteger(id) && id > 0) {
      this.carregarPlanejamento(id);
      return;
    }

    this.service
      .listarTodos()
      .pipe(
        timeout(8000),
        finalize(() => {
          this.carregando = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (planejamentos) => {
          this.planejamentos = planejamentos;
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao carregar planejamento:', erro);
          this.erro = true;
          this.cdr.detectChanges();
        },
      });
  }

  private carregarPlanejamento(id: number): void {
    this.service
      .buscarPorId(id)
      .pipe(
        timeout(8000),
        switchMap((planejamento) => {
          this.planejamento = planejamento;
          return forkJoin({
            gruposMaterias: this.service.listarGruposMaterias(id).pipe(timeout(8000)),
            materias: this.service.listarMaterias(id).pipe(timeout(8000)),
            aproveitamentos: this.service.listarAproveitamentos(id).pipe(timeout(8000)),
          });
        }),
        switchMap(({ gruposMaterias, materias, aproveitamentos }) => {
          const aproveitamentosPorAssunto = new Map(
            aproveitamentos.map((aproveitamento) => [aproveitamento.assuntoId, aproveitamento]),
          );
          const materiasBasicas = this.criarMateriasBasicas(materias);
          this.materias = materiasBasicas.filter((materia) => !materia.grupoMateriaId);
          this.blocosMaterias = this.agruparMaterias(gruposMaterias, materiasBasicas);
          this.carregando = false;
          this.cdr.detectChanges();

          return this.carregarMaterias(materias, aproveitamentosPorAssunto).pipe(
            map((materiasVisualizacao) => ({
              materias: materiasVisualizacao,
              blocosMaterias: this.agruparMaterias(gruposMaterias, materiasVisualizacao),
            })),
          );
        }),
        finalize(() => {
          this.carregando = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: ({ materias, blocosMaterias }) => {
          this.materias = materias.filter((materia) => !materia.grupoMateriaId);
          this.blocosMaterias = blocosMaterias;
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao carregar planejamento:', erro);
          this.erro = true;
          this.cdr.detectChanges();
        },
      });
  }

  alternarMateria(materia: MateriaVisualizacao): void {
    materia.aberta = !materia.aberta;
  }

  alternarBlocoMateria(bloco: BlocoMateriaVisualizacao): void {
    bloco.aberto = !bloco.aberto;
  }

  quantidadeAssuntos(materia: MateriaVisualizacao): number {
    return materia.grupos.reduce((total, grupo) => total + grupo.assuntos.length, 0);
  }

  progressoMateria(materia: MateriaVisualizacao): number {
    const etapas = materia.grupos.flatMap((grupo) =>
      grupo.assuntos.flatMap((assunto) => assunto.etapas),
    );
    if (!etapas.length) return 0;
    return Math.round((etapas.filter((etapa) => etapa.concluida).length / etapas.length) * 100);
  }

  progressoBlocoMateria(bloco: BlocoMateriaVisualizacao): number {
    const etapas = bloco.materias.flatMap((materia) =>
      materia.grupos.flatMap((grupo) =>
        grupo.assuntos.flatMap((assunto) => assunto.etapas),
      ),
    );
    return this.calcularProgresso(etapas);
  }

  progressoGrupoAssuntos(grupo: GrupoVisualizacao): number {
    return this.calcularProgresso(grupo.assuntos.flatMap((assunto) => assunto.etapas));
  }

  progressoAssunto(assunto: AssuntoVisualizacao): number {
    return this.calcularProgresso(assunto.etapas);
  }

  editarGrupoMateria(grupo: BlocoMateriaVisualizacao): void {
    this.grupoMateriaEditandoId = grupo.id;
    this.pesoGrupoMateriaEdicao = grupo.peso ?? null;
    this.dificuldadeGrupoMateriaEdicao = grupo.dificuldade ?? null;
  }

  cancelarEdicaoGrupoMateria(): void {
    this.grupoMateriaEditandoId = null;
    this.pesoGrupoMateriaEdicao = null;
    this.dificuldadeGrupoMateriaEdicao = null;
  }

  salvarGrupoMateria(grupo: BlocoMateriaVisualizacao): void {
    if (!this.planejamento?.id || this.salvandoGrupoMateria) return;
    if (!this.valorDeUmACincoValido(this.pesoGrupoMateriaEdicao)
        || !this.valorDeUmACincoValido(this.dificuldadeGrupoMateriaEdicao)) {
      this.message.warning('Peso e dificuldade devem estar entre 1 e 5.');
      return;
    }

    this.salvandoGrupoMateria = true;
    this.service.atualizarGrupoMateria(this.planejamento.id, grupo.id, {
      nome: grupo.nome,
      peso: this.pesoGrupoMateriaEdicao,
      dificuldade: this.dificuldadeGrupoMateriaEdicao,
      ordem: grupo.ordem,
    }).pipe(finalize(() => {
      this.salvandoGrupoMateria = false;
      this.cdr.detectChanges();
    })).subscribe({
      next: atualizado => {
        grupo.peso = atualizado.peso;
        grupo.dificuldade = atualizado.dificuldade;
        this.cancelarEdicaoGrupoMateria();
        this.message.success('Grupo de matérias atualizado.');
      },
      error: erro => {
        console.error('Erro ao atualizar grupo de matérias:', erro);
        this.message.error('Não foi possível atualizar o grupo de matérias.');
      },
    });
  }

  editarMateria(materia: MateriaVisualizacao): void {
    this.materiaEditandoId = materia.id;
    this.pesoMateriaEdicao = materia.peso ?? null;
    this.dificuldadeMateriaEdicao = materia.dificuldade ?? null;
  }

  cancelarEdicaoMateria(): void {
    this.materiaEditandoId = null;
    this.pesoMateriaEdicao = null;
    this.dificuldadeMateriaEdicao = null;
  }

  salvarMateria(materia: MateriaVisualizacao): void {
    if (!this.planejamento?.id || this.salvandoMateria) return;
    if (!this.valorDeUmACincoValido(this.pesoMateriaEdicao)
        || !this.valorDeUmACincoValido(this.dificuldadeMateriaEdicao)) {
      this.message.warning('Peso e dificuldade devem estar entre 1 e 5.');
      return;
    }

    this.salvandoMateria = true;
    this.service.atualizarMateria(this.planejamento.id, materia.id, {
      materiaId: materia.materiaId,
      planejamentoGrupoMateriaId: materia.grupoMateriaId,
      peso: this.pesoMateriaEdicao,
      dificuldade: this.dificuldadeMateriaEdicao,
      ordem: materia.ordem,
    }).pipe(finalize(() => {
      this.salvandoMateria = false;
      this.cdr.detectChanges();
    })).subscribe({
      next: atualizada => {
        materia.peso = atualizada.peso;
        materia.dificuldade = atualizada.dificuldade;
        this.cancelarEdicaoMateria();
        this.message.success('Peso e dificuldade atualizados.');
      },
      error: erro => {
        console.error('Erro ao atualizar matéria:', erro);
        this.message.error('Não foi possível atualizar a matéria.');
      },
    });
  }

  salvarAssunto(assunto: AssuntoVisualizacao): void {
    if (!this.planejamento?.id || this.assuntosSendoSalvos.has(assunto.itemId)) return;
    if (!this.valorDeUmACincoValido(assunto.peso)
        || !this.valorDeUmACincoValido(assunto.dificuldade)) {
      this.message.warning('Peso e dificuldade devem estar entre 1 e 5.');
      return;
    }

    this.assuntosSendoSalvos.add(assunto.itemId);
    this.service.atualizarItem(
      this.planejamento.id,
      assunto.materiaPlanejamentoId,
      assunto.grupoId,
      assunto.itemId,
      {
        assuntoId: assunto.id,
        peso: assunto.peso,
        dificuldade: assunto.dificuldade,
        ordem: assunto.ordem,
      },
    ).pipe(finalize(() => {
      this.assuntosSendoSalvos.delete(assunto.itemId);
      this.cdr.detectChanges();
    })).subscribe({
      next: atualizado => {
        assunto.peso = atualizado.peso;
        assunto.dificuldade = atualizado.dificuldade;
        this.message.success('Assunto atualizado.');
      },
      error: erro => {
        console.error('Erro ao atualizar assunto:', erro);
        this.message.error('Não foi possível atualizar o assunto.');
        this.carregarPlanejamento(this.planejamento!.id!);
      },
    });
  }

  assuntoSendoSalvo(assunto: AssuntoVisualizacao): boolean {
    return this.assuntosSendoSalvos.has(assunto.itemId);
  }

  temEtapa(assunto: AssuntoVisualizacao, tipo: string): boolean {
    return !!this.etapaPorTipo(assunto, tipo);
  }

  etapaEmAndamento(assunto: AssuntoVisualizacao, tipo: string): boolean {
    const etapa = this.etapaPorTipo(assunto, tipo);
    return !!etapa?.iniciada && !etapa.concluida;
  }

  etapaConcluida(assunto: AssuntoVisualizacao, tipo: string): boolean {
    return !!this.etapaPorTipo(assunto, tipo)?.concluida;
  }

  dataConclusaoDaEtapa(assunto: AssuntoVisualizacao, tipo: string): string | null {
    return this.etapaPorTipo(assunto, tipo)?.dataConcluida ?? null;
  }

  alterarStatusEtapa(
    assunto: AssuntoVisualizacao,
    tipo: string,
    novoStatus: StatusEtapa | string,
  ): void {
    if (!this.planejamento?.id || this.etapaSendoSalva(assunto, tipo)) return;
    if (!['NAO_INICIADO', 'EM_ANDAMENTO', 'CONCLUIDO'].includes(novoStatus)) return;

    const etapaAtual = this.etapaPorTipo(assunto, tipo);
    if (!etapaAtual && novoStatus === 'NAO_INICIADO') return;
    const tipoRegistro = etapaAtual
      ? undefined
      : this.tiposRegistro.find((item) =>
          item.nome.toLocaleLowerCase('pt-BR').includes(tipo.toLocaleLowerCase('pt-BR')),
        );

    if (!etapaAtual && !tipoRegistro) {
      this.message.warning('O tipo desta etapa ainda não está cadastrado.');
      return;
    }

    const chave = this.chaveEtapa(assunto, tipo);
    const concluida = novoStatus === 'CONCLUIDO';
    const iniciada = novoStatus !== 'NAO_INICIADO';
    this.etapasSendoSalvas.add(chave);

    const requisicao$ = etapaAtual?.id
      ? this.service.atualizarEtapa(
          this.planejamento.id,
          assunto.materiaPlanejamentoId,
          assunto.grupoId,
          assunto.itemId,
          etapaAtual.id,
          {
            tipoRegistroId: etapaAtual.tipoRegistroId,
            ordem: etapaAtual.ordem,
            iniciada,
            concluida,
            concluidaManualmente: concluida,
          },
        )
      : this.service.adicionarEtapa(
          this.planejamento.id,
          assunto.materiaPlanejamentoId,
          assunto.grupoId,
          assunto.itemId,
          {
            tipoRegistroId: tipoRegistro!.id,
            ordem: assunto.etapas.length + 1,
            iniciada,
            concluida,
            concluidaManualmente: concluida,
          },
        );

    requisicao$
      .pipe(
        finalize(() => {
          this.etapasSendoSalvas.delete(chave);
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (etapaSalva) => {
          const etapaVisualizacao = this.mapearEtapa(etapaSalva);
          const indice = assunto.etapas.findIndex((etapa) => etapa.id === etapaSalva.id);
          if (indice >= 0) assunto.etapas[indice] = etapaVisualizacao;
          else assunto.etapas.push(etapaVisualizacao);
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao atualizar etapa:', erro);
          this.message.error('Não foi possível atualizar esta etapa.');
        },
      });
  }

  etapaSendoSalva(assunto: AssuntoVisualizacao, tipo: string): boolean {
    return this.etapasSendoSalvas.has(this.chaveEtapa(assunto, tipo));
  }

  statusEtapa(assunto: AssuntoVisualizacao, tipo: string): StatusEtapa {
    const etapa = this.etapaPorTipo(assunto, tipo);
    if (etapa?.concluida) return 'CONCLUIDO';
    if (etapa?.iniciada) return 'EM_ANDAMENTO';
    return 'NAO_INICIADO';
  }

  aproveitamento(assunto: AssuntoVisualizacao): string {
    if (!assunto.questoesFeitas) return '—';
    return `${Math.round((assunto.questoesAcertadas / assunto.questoesFeitas) * 100)}%`;
  }

  detalhesAproveitamento(assunto: AssuntoVisualizacao): string | null {
    if (!assunto.questoesFeitas) return null;
    return `${assunto.questoesAcertadas} acertos de ${assunto.questoesFeitas} questões`;
  }

  rotuloDificuldade(valor?: number | null): string {
    return ['Não informada', 'Muito fácil', 'Fácil', 'Média', 'Difícil', 'Muito difícil'][
      valor ?? 0
    ] ?? 'Não informada';
  }

  private valorDeUmACincoValido(valor?: number | null): boolean {
    return valor == null || (Number.isInteger(Number(valor)) && Number(valor) >= 1 && Number(valor) <= 5);
  }

  private calcularProgresso(etapas: EtapaVisualizacao[]): number {
    if (!etapas.length) return 0;
    return Math.round((etapas.filter((etapa) => etapa.concluida).length / etapas.length) * 100);
  }

  private todasAsMaterias(): MateriaVisualizacao[] {
    return [...this.materias, ...this.blocosMaterias.flatMap((bloco) => bloco.materias)];
  }

  private todosOsAssuntos(): AssuntoVisualizacao[] {
    return this.todasAsMaterias().flatMap((materia) =>
      materia.grupos.flatMap((grupo) => grupo.assuntos),
    );
  }

  private carregarMaterias(
    materias: PlanejamentoMateria[],
    aproveitamentosPorAssunto: Map<number, PlanejamentoAproveitamento>,
  ) {
    if (!this.planejamento?.id || !materias.length) return of([] as MateriaVisualizacao[]);

    return forkJoin(
      materias.map((materia) => this.carregarGruposDaMateria(materia, aproveitamentosPorAssunto)),
    ).pipe(
      map((materiasVisualizacao) =>
        materiasVisualizacao.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR')),
      ),
    );
  }

  private carregarGruposDaMateria(
    materia: PlanejamentoMateria,
    aproveitamentosPorAssunto: Map<number, PlanejamentoAproveitamento>,
  ) {
    if (!this.planejamento?.id || !materia.id) {
      return of({
        id: materia.id ?? 0,
        materiaId: materia.materia.id ?? 0,
        nome: materia.materia.nome,
        peso: materia.peso,
        dificuldade: materia.dificuldade,
        grupoMateriaId: materia.planejamentoGrupoMateria?.id,
        ordem: materia.ordem,
        grupos: [],
        aberta: false,
      });
    }

    return this.service.listarGrupos(this.planejamento.id, materia.id).pipe(
      timeout(8000),
      switchMap((grupos) => this.carregarGrupos(materia, grupos, aproveitamentosPorAssunto)),
      catchError(() =>
        of({
          id: materia.id!,
          materiaId: materia.materia.id ?? 0,
          nome: materia.materia.nome,
          peso: materia.peso,
          dificuldade: materia.dificuldade,
          grupoMateriaId: materia.planejamentoGrupoMateria?.id,
          ordem: materia.ordem,
          grupos: [],
          aberta: false,
        }),
      ),
    );
  }

  private carregarGrupos(
    materia: PlanejamentoMateria,
    grupos: PlanejamentoGrupoAssunto[],
    aproveitamentosPorAssunto: Map<number, PlanejamentoAproveitamento>,
  ) {
    if (!this.planejamento?.id || !materia.id || !grupos.length) {
      return of({
        id: materia.id!,
        materiaId: materia.materia.id ?? 0,
        nome: materia.materia.nome,
        peso: materia.peso,
        dificuldade: materia.dificuldade,
        grupoMateriaId: materia.planejamentoGrupoMateria?.id,
        ordem: materia.ordem,
        grupos: [],
        aberta: false,
      });
    }

    return forkJoin(
      grupos.map((grupo) =>
        this.carregarItensDoGrupo(materia.id!, grupo, aproveitamentosPorAssunto),
      ),
    ).pipe(
      map((gruposVisualizacao) => ({
        id: materia.id!,
        materiaId: materia.materia.id ?? 0,
        nome: materia.materia.nome,
        peso: materia.peso,
        dificuldade: materia.dificuldade,
        grupoMateriaId: materia.planejamentoGrupoMateria?.id,
        ordem: materia.ordem,
        grupos: gruposVisualizacao,
        aberta: false,
      })),
    );
  }

  private carregarItensDoGrupo(
    materiaId: number,
    grupo: PlanejamentoGrupoAssunto,
    aproveitamentosPorAssunto: Map<number, PlanejamentoAproveitamento>,
  ) {
    if (!this.planejamento?.id || !grupo.id) {
      return of({ nome: this.nomeGrupo(grupo), assuntos: [] });
    }

    return this.service.listarItens(this.planejamento.id, materiaId, grupo.id).pipe(
      timeout(8000),
      switchMap((itens: PlanejamentoGrupoAssuntoItem[]) => {
        const itensOrdenados = itens.sort((a, b) => (a.ordem ?? 9999) - (b.ordem ?? 9999));
        if (!itensOrdenados.length) return of([] as AssuntoVisualizacao[]);

        return forkJoin(
          itensOrdenados.map((item) =>
            this.carregarEtapasDoAssunto(materiaId, grupo.id!, item, aproveitamentosPorAssunto),
          ),
        );
      }),
      map((assuntos) => ({ nome: this.nomeGrupo(grupo), assuntos })),
      catchError(() => of({ nome: this.nomeGrupo(grupo), assuntos: [] })),
    );
  }

  private carregarEtapasDoAssunto(
    materiaId: number,
    grupoId: number,
    item: PlanejamentoGrupoAssuntoItem,
    aproveitamentosPorAssunto: Map<number, PlanejamentoAproveitamento>,
  ) {
    if (!this.planejamento?.id || !item.id) {
      return of({
        id: item.assunto.id,
        nome: item.assunto.nome,
        peso: item.peso,
        dificuldade: item.dificuldade,
        materiaPlanejamentoId: materiaId,
        grupoId,
        itemId: item.id ?? 0,
        ordem: item.ordem,
        etapas: [],
        questoesFeitas: 0,
        questoesAcertadas: 0,
      });
    }

    return this.service.listarEtapas(this.planejamento.id, materiaId, grupoId, item.id).pipe(
      timeout(8000),
      map((etapas: PlanejamentoItemEtapa[]) => ({
        id: item.assunto.id,
        nome: item.assunto.nome,
        peso: item.peso,
        dificuldade: item.dificuldade,
        materiaPlanejamentoId: materiaId,
        grupoId,
        itemId: item.id!,
        ordem: item.ordem,
        questoesFeitas: aproveitamentosPorAssunto.get(item.assunto.id)?.questoesFeitas ?? 0,
        questoesAcertadas: aproveitamentosPorAssunto.get(item.assunto.id)?.questoesAcertadas ?? 0,
        etapas: etapas
          .sort((a, b) => (a.ordem ?? 9999) - (b.ordem ?? 9999))
          .map((etapa) => this.mapearEtapa(etapa)),
      })),
      catchError(() =>
        of({
          id: item.assunto.id,
          nome: item.assunto.nome,
          peso: item.peso,
          dificuldade: item.dificuldade,
          materiaPlanejamentoId: materiaId,
          grupoId,
          itemId: item.id!,
          ordem: item.ordem,
          etapas: [],
          questoesFeitas: aproveitamentosPorAssunto.get(item.assunto.id)?.questoesFeitas ?? 0,
          questoesAcertadas: aproveitamentosPorAssunto.get(item.assunto.id)?.questoesAcertadas ?? 0,
        }),
      ),
    );
  }

  private nomeGrupo(grupo: PlanejamentoGrupoAssunto): string {
    return grupo.tipo === 'BLOCO' ? grupo.nome || 'Bloco sem nome' : 'Assuntos';
  }

  private etapaPorTipo(assunto: AssuntoVisualizacao, tipo: string): EtapaVisualizacao | undefined {
    return assunto.etapas.find((etapa) => etapa.nome.toLocaleLowerCase('pt-BR').includes(tipo));
  }

  private mapearEtapa(etapa: PlanejamentoItemEtapa): EtapaVisualizacao {
    return {
      id: etapa.id,
      tipoRegistroId: etapa.tipoRegistro.id,
      nome: etapa.tipoRegistro.nome,
      ordem: etapa.ordem,
      iniciada: !!etapa.iniciada,
      concluida: !!etapa.concluida,
      dataConcluida: etapa.dataConcluida,
    };
  }

  private chaveEtapa(assunto: AssuntoVisualizacao, tipo: string): string {
    return `${assunto.itemId}:${tipo}`;
  }

  private agruparMaterias(
    gruposMaterias: PlanejamentoGrupoMateria[],
    materias: MateriaVisualizacao[],
  ): BlocoMateriaVisualizacao[] {
    return gruposMaterias
      .map((grupo) => ({
        id: grupo.id!,
        nome: grupo.nome,
        peso: grupo.peso,
        dificuldade: grupo.dificuldade,
        ordem: grupo.ordem,
        materias: materias.filter((materia) => materia.grupoMateriaId === grupo.id),
        aberto: false,
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  }

  private criarMateriasBasicas(materias: PlanejamentoMateria[]): MateriaVisualizacao[] {
    return materias
      .map((materia) => ({
        id: materia.id ?? 0,
        materiaId: materia.materia.id ?? 0,
        nome: materia.materia.nome,
        peso: materia.peso,
        dificuldade: materia.dificuldade,
        grupoMateriaId: materia.planejamentoGrupoMateria?.id,
        ordem: materia.ordem,
        grupos: [],
        aberta: false,
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  }
}
