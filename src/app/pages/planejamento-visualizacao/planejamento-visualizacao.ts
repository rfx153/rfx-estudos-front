import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError, finalize, map, switchMap, timeout } from 'rxjs/operators';
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
  nome: string;
  etapas: EtapaVisualizacao[];
  questoesFeitas: number;
  questoesAcertadas: number;
}

interface EtapaVisualizacao {
  nome: string;
  iniciada: boolean;
  concluida: boolean;
  dataConcluida?: string | null;
}

interface MateriaVisualizacao {
  id: number;
  nome: string;
  grupoMateriaId?: number | null;
  grupos: GrupoVisualizacao[];
  aberta: boolean;
}

interface BlocoMateriaVisualizacao {
  id: number;
  nome: string;
  materias: MateriaVisualizacao[];
  aberto: boolean;
}

@Component({
  selector: 'app-planejamento-visualizacao',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './planejamento-visualizacao.html',
  styleUrl: './planejamento-visualizacao.css',
})
export class PlanejamentoVisualizacaoComponent implements OnInit {
  private readonly service = inject(PlanejamentoService);
  private readonly route = inject(ActivatedRoute);
  private readonly cdr = inject(ChangeDetectorRef);

  planejamento?: Planejamento;
  planejamentos: Planejamento[] = [];
  materias: MateriaVisualizacao[] = [];
  blocosMaterias: BlocoMateriaVisualizacao[] = [];
  carregando = true;
  erro = false;

  ngOnInit(): void {
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

  aproveitamento(assunto: AssuntoVisualizacao): string {
    if (!assunto.questoesFeitas) return '—';
    return `${Math.round((assunto.questoesAcertadas / assunto.questoesFeitas) * 100)}%`;
  }

  detalhesAproveitamento(assunto: AssuntoVisualizacao): string | null {
    if (!assunto.questoesFeitas) return null;
    return `${assunto.questoesAcertadas} acertos de ${assunto.questoesFeitas} questões`;
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
        nome: materia.materia.nome,
        grupoMateriaId: materia.planejamentoGrupoMateria?.id,
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
          nome: materia.materia.nome,
          grupoMateriaId: materia.planejamentoGrupoMateria?.id,
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
        nome: materia.materia.nome,
        grupoMateriaId: materia.planejamentoGrupoMateria?.id,
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
        nome: materia.materia.nome,
        grupoMateriaId: materia.planejamentoGrupoMateria?.id,
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
        nome: item.assunto.nome,
        etapas: [],
        questoesFeitas: 0,
        questoesAcertadas: 0,
      });
    }

    return this.service.listarEtapas(this.planejamento.id, materiaId, grupoId, item.id).pipe(
      timeout(8000),
      map((etapas: PlanejamentoItemEtapa[]) => ({
        nome: item.assunto.nome,
        questoesFeitas: aproveitamentosPorAssunto.get(item.assunto.id)?.questoesFeitas ?? 0,
        questoesAcertadas: aproveitamentosPorAssunto.get(item.assunto.id)?.questoesAcertadas ?? 0,
        etapas: etapas
          .sort((a, b) => (a.ordem ?? 9999) - (b.ordem ?? 9999))
          .map((etapa) => ({
            nome: etapa.tipoRegistro.nome,
            iniciada: !!etapa.iniciada,
            concluida: !!etapa.concluida,
            dataConcluida: etapa.dataConcluida,
          })),
      })),
      catchError(() =>
        of({
          nome: item.assunto.nome,
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

  private agruparMaterias(
    gruposMaterias: PlanejamentoGrupoMateria[],
    materias: MateriaVisualizacao[],
  ): BlocoMateriaVisualizacao[] {
    return gruposMaterias
      .map((grupo) => ({
        id: grupo.id!,
        nome: grupo.nome,
        materias: materias.filter((materia) => materia.grupoMateriaId === grupo.id),
        aberto: false,
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  }

  private criarMateriasBasicas(materias: PlanejamentoMateria[]): MateriaVisualizacao[] {
    return materias
      .map((materia) => ({
        id: materia.id ?? 0,
        nome: materia.materia.nome,
        grupoMateriaId: materia.planejamentoGrupoMateria?.id,
        grupos: [],
        aberta: false,
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  }
}
