import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { finalize, forkJoin, Observable, switchMap } from 'rxjs';
import { Materia, MateriaService } from '../../services/materia.service';
import { Assunto, RegistroService, TipoRegistro } from '../../services/registro.service';
import {
  Planejamento,
  PlanejamentoEstrutura,
  PlanejamentoMateria,
  PlanejamentoMateriaDTO,
  PlanejamentoReordenacaoDTO,
  PlanejamentoGrupoMateria,
  PlanejamentoGrupoMateriaDTO,
  PlanejamentoGrupoAssunto,
  PlanejamentoGrupoAssuntoDTO,
  PlanejamentoGrupoAssuntoTipo,
  PlanejamentoGrupoAssuntoItem,
  PlanejamentoGrupoAssuntoItemDTO,
  PlanejamentoItemEtapa,
  PlanejamentoItemEtapaDTO,
  PlanejamentoService,
} from '../../services/planejamento.service';

interface ItemPrincipalPlanejamento {
  tipo: 'grupoMateria' | 'materia';
  id: number;
  ordem?: number | null;
  grupo?: PlanejamentoGrupoMateria;
  materia?: PlanejamentoMateria;
}

@Component({
  selector: 'app-planejamento-detalhe',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
  ],
  templateUrl: './planejamento-detalhe.html',
  styleUrl: './planejamento-detalhe.css',
})
export class PlanejamentoDetalheComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly service = inject(PlanejamentoService);
  private readonly materiaService = inject(MateriaService);
  private readonly registroService = inject(RegistroService);
  private readonly message = inject(NzMessageService);
  private readonly cdr = inject(ChangeDetectorRef);

  readonly form = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(150)]],
    descricao: [''],
    dataFimPrevista: [null as string | null],
  });
  readonly materiaForm = this.fb.group({
    tipo: ['MATERIA' as 'MATERIA' | 'BLOCO', Validators.required],
    materiaIds: [[] as number[]],
    nomeBloco: ['', Validators.maxLength(150)],
    planejamentoGrupoMateriaId: [null as number | null],
    peso: [null as number | null, [Validators.min(1), Validators.max(5)]],
    dificuldade: [null as number | null, [Validators.min(1), Validators.max(5)]],
    ordem: [null as number | null, Validators.min(1)],
  });
  readonly grupoMateriaForm = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(150)]],
    peso: [null as number | null, [Validators.min(1), Validators.max(5)]],
    dificuldade: [null as number | null, [Validators.min(1), Validators.max(5)]],
    ordem: [null as number | null, Validators.min(1)],
  });
  readonly grupoForm = this.fb.group({
    tipo: ['BLOCO' as PlanejamentoGrupoAssuntoTipo, Validators.required],
    nome: [''],
    peso: [null as number | null, [Validators.min(1), Validators.max(5)]],
    ordem: [null as number | null, Validators.min(1)],
  });
  readonly itemForm = this.fb.group({
    assuntoIds: [[] as number[], Validators.required],
    peso: [null as number | null, [Validators.min(1), Validators.max(5)]],
    dificuldade: [null as number | null, [Validators.min(1), Validators.max(5)]],
    ordem: [null as number | null, Validators.min(1)],
  });
  readonly etapaForm = this.fb.group({
    tipoRegistroId: [null as number | null, Validators.required],
    ordem: [null as number | null, Validators.min(1)],
    concluida: [false],
  });

  id?: number;
  carregando = false;
  salvando = false;
  carregandoMaterias = false;
  salvandoMateria = false;
  criandoMateria = false;
  materiaEditandoId?: number;
  materias: Materia[] = [];
  materiasPlanejadas: PlanejamentoMateria[] = [];
  gruposMaterias: PlanejamentoGrupoMateria[] = [];
  carregandoGruposMaterias = false;
  salvandoGrupoMateria = false;
  grupoMateriaEditandoId?: number;
  grupoMateriaSelecionado?: PlanejamentoGrupoMateria;
  materiaSelecionada?: PlanejamentoMateria;
  grupos: PlanejamentoGrupoAssunto[] = [];
  grupoEditandoId?: number;
  quantidadeItensGrupoEditando = 0;
  carregandoGrupos = false;
  salvandoGrupo = false;
  grupoSelecionado?: PlanejamentoGrupoAssunto;
  itens: PlanejamentoGrupoAssuntoItem[] = [];
  assuntos: Assunto[] = [];
  assuntoIdsCadastrados = new Set<number>();
  itemEditandoId?: number;
  carregandoItens = false;
  salvandoItem = false;
  criandoAssunto = false;
  itemSelecionado?: PlanejamentoGrupoAssuntoItem;
  etapas: PlanejamentoItemEtapa[] = [];
  tiposRegistro: TipoRegistro[] = [];
  etapaEditandoId?: number;
  carregandoEtapas = false;
  salvandoEtapa = false;
  modalMateriaAberto = false;
  modalGrupoMateriaAberto = false;
  modalGrupoAberto = false;
  modalItemAberto = false;
  modalEtapasAberto = false;
  modalEtapaAberto = false;
  nomesAssuntosPorGrupo = new Map<number, string>();
  salvandoOrdem = false;
  private estrutura?: PlanejamentoEstrutura;
  private arraste?: {
    tipo: 'principal' | 'grupoMateria' | 'materia' | 'grupo' | 'item';
    id: number;
    contexto: number;
    chave?: string;
  };
  private grupoMateriasPendente?: PlanejamentoGrupoMateria[];
  private readonly materiasPendentes = new Map<number, PlanejamentoMateria[]>();
  private readonly gruposPendentes = new Map<number, PlanejamentoGrupoAssunto[]>();
  private readonly itensPendentes = new Map<
    number,
    { planejamentoMateriaId: number; itens: PlanejamentoGrupoAssuntoItem[] }
  >();

  ngOnInit(): void {
    const parametroId = this.route.snapshot.paramMap.get('id');
    if (!parametroId) return;

    this.id = Number(parametroId);
    if (!Number.isInteger(this.id) || this.id <= 0) {
      this.message.error('Planejamento inválido.');
      this.voltar();
      return;
    }

    this.carregar();
    this.carregarGruposMaterias();
    this.carregarMaterias();
    this.carregarEstrutura();
    this.materiaService.listarTodas().subscribe({
      next: (materias) => {
        this.materias = materias;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar matérias:', erro);
        this.cdr.detectChanges();
      },
    });
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const planejamento: Planejamento = {
      nome: this.form.controls.nome.value!.trim(),
      descricao: this.form.controls.descricao.value?.trim() || null,
      dataFimPrevista: this.form.controls.dataFimPrevista.value || null,
    };

    this.salvando = true;
    const requisicao$ = this.id
      ? this.service.atualizar(this.id, planejamento)
      : this.service.criar(planejamento);

    requisicao$.subscribe({
      next: (salvo) => {
        this.message.success(`Planejamento ${this.id ? 'atualizado' : 'criado'} com sucesso.`);
        this.router.navigate(['/planejamentos', salvo.id]);
      },
      error: (erro) => {
        console.error('Erro ao salvar planejamento:', erro);
        this.salvando = false;
        this.message.error('Não foi possível salvar o planejamento.');
      },
    });
  }

  voltar(): void {
    this.router.navigate(['/planejamento']);
  }

  rotuloDificuldade(valor?: number | null): string {
    return ['Não informada', 'Muito fácil', 'Fácil', 'Média', 'Difícil', 'Muito difícil'][
      valor ?? 0
    ] ?? 'Não informada';
  }

  get ordemPendente(): boolean {
    return !!(
      this.grupoMateriasPendente ||
      this.materiasPendentes.size ||
      this.gruposPendentes.size ||
      this.itensPendentes.size
    );
  }

  itensPrincipais(): ItemPrincipalPlanejamento[] {
    return [
      ...this.gruposMaterias
        .filter((grupo): grupo is PlanejamentoGrupoMateria & { id: number } => !!grupo.id)
        .map((grupo) => ({
          tipo: 'grupoMateria' as const,
          id: grupo.id,
          ordem: grupo.ordem,
          grupo,
        })),
      ...this.materiasSemGrupo()
        .filter((materia): materia is PlanejamentoMateria & { id: number } => !!materia.id)
        .map((materia) => ({
          tipo: 'materia' as const,
          id: materia.id,
          ordem: materia.ordem,
          materia,
        })),
    ].sort((a, b) => (a.ordem ?? Number.MAX_SAFE_INTEGER) - (b.ordem ?? Number.MAX_SAFE_INTEGER));
  }

  trackByItemPrincipal(_indice: number, item: ItemPrincipalPlanejamento): string {
    return `${item.tipo}:${item.id}`;
  }

  podeMoverPrincipal(
    tipo: 'grupoMateria' | 'materia',
    id: number,
    direcao: -1 | 1,
  ): boolean {
    const itens = this.itensPrincipais();
    const indice = itens.findIndex((item) => item.tipo === tipo && item.id === id);
    return indice >= 0 && indice + direcao >= 0 && indice + direcao < itens.length;
  }

  moverPrincipal(
    tipo: 'grupoMateria' | 'materia',
    id: number,
    direcao: -1 | 1,
  ): void {
    const itens = this.itensPrincipais();
    const origem = itens.findIndex((item) => item.tipo === tipo && item.id === id);
    const destino = origem + direcao;
    if (origem < 0 || destino < 0 || destino >= itens.length) return;

    this.reordenarItensPrincipais(itens, origem, destino);
  }

  iniciarArrastePrincipal(
    evento: DragEvent,
    tipo: 'grupoMateria' | 'materia',
    id: number,
  ): void {
    if (this.salvandoOrdem) {
      evento.preventDefault();
      return;
    }

    const chave = `${tipo}:${id}`;
    this.arraste = { tipo: 'principal', id, contexto: this.id ?? 0, chave };
    if (evento.dataTransfer) {
      evento.dataTransfer.effectAllowed = 'move';
      evento.dataTransfer.setData('text/plain', chave);
    }
  }

  permitirSoltarPrincipal(evento: DragEvent): void {
    if (this.arraste?.tipo !== 'principal' || this.arraste.contexto !== (this.id ?? 0)) return;
    evento.preventDefault();
    if (evento.dataTransfer) evento.dataTransfer.dropEffect = 'move';
  }

  soltarPrincipal(
    evento: DragEvent,
    tipoDestino: 'grupoMateria' | 'materia',
    destinoId: number,
  ): void {
    evento.preventDefault();
    if (this.arraste?.tipo !== 'principal') return;

    const origemChave = this.arraste.chave;
    const destinoChave = `${tipoDestino}:${destinoId}`;
    this.arraste = undefined;
    if (!origemChave || origemChave === destinoChave) return;

    const itens = this.itensPrincipais();
    const origem = itens.findIndex((item) => `${item.tipo}:${item.id}` === origemChave);
    const destino = itens.findIndex((item) => `${item.tipo}:${item.id}` === destinoChave);
    if (origem < 0 || destino < 0) return;

    this.reordenarItensPrincipais(itens, origem, destino);
  }

  private reordenarItensPrincipais(
    itens: ItemPrincipalPlanejamento[],
    origem: number,
    destino: number,
  ): void {
    const [movido] = itens.splice(origem, 1);
    itens.splice(destino, 0, movido);
    itens.forEach((item, indice) => {
      const ordem = indice + 1;
      if (item.grupo) item.grupo.ordem = ordem;
      if (item.materia) item.materia.ordem = ordem;
    });

    this.gruposMaterias = [...this.gruposMaterias].sort(
      (a, b) => (a.ordem ?? Number.MAX_SAFE_INTEGER) - (b.ordem ?? Number.MAX_SAFE_INTEGER),
    );
    const materiasSemGrupo = this.materiasSemGrupo().sort(
      (a, b) => (a.ordem ?? Number.MAX_SAFE_INTEGER) - (b.ordem ?? Number.MAX_SAFE_INTEGER),
    );
    this.grupoMateriasPendente = this.gruposMaterias;
    this.materiasPendentes.set(0, materiasSemGrupo);
    this.cdr.detectChanges();
  }

  iniciarArraste(
    evento: DragEvent,
    tipo: 'grupoMateria' | 'materia' | 'grupo' | 'item',
    id: number,
    contexto: number,
  ): void {
    if (this.salvandoOrdem) {
      evento.preventDefault();
      return;
    }

    this.arraste = { tipo, id, contexto };
    if (evento.dataTransfer) {
      evento.dataTransfer.effectAllowed = 'move';
      evento.dataTransfer.setData('text/plain', `${tipo}:${id}`);
    }
  }

  permitirSoltar(
    evento: DragEvent,
    tipo: 'grupoMateria' | 'materia' | 'grupo' | 'item',
    contexto: number,
  ): void {
    if (this.arraste?.tipo !== tipo || this.arraste.contexto !== contexto) return;
    evento.preventDefault();
    if (evento.dataTransfer) evento.dataTransfer.dropEffect = 'move';
  }

  finalizarArraste(): void {
    this.arraste = undefined;
  }

  soltarGrupoMateria(evento: DragEvent, destino: PlanejamentoGrupoMateria): void {
    if (!this.podeSoltar(evento, 'grupoMateria', this.id ?? 0, destino.id)) return;

    const ordenada = this.mover(this.gruposMaterias, this.arraste!.id, destino.id!);
    this.arraste = undefined;
    if (!ordenada) return;

    this.gruposMaterias = this.definirOrdens(ordenada);
    this.grupoMateriasPendente = this.gruposMaterias;
  }

  soltarMateria(evento: DragEvent, destino: PlanejamentoMateria): void {
    const contexto = destino.planejamentoGrupoMateria?.id ?? 0;
    if (!this.podeSoltar(evento, 'materia', contexto, destino.id)) return;

    const lista = contexto
      ? this.materiasPlanejadas.filter(
          (item) => item.planejamentoGrupoMateria?.id === contexto,
        )
      : this.materiasSemGrupo();
    const ordenada = this.mover(lista, this.arraste!.id, destino.id!);
    this.arraste = undefined;
    if (!ordenada) return;

    const anterior = this.materiasPlanejadas;
    const comOrdem = this.definirOrdens(ordenada);
    let indice = 0;
    this.materiasPlanejadas = anterior.map((item) =>
      (item.planejamentoGrupoMateria?.id ?? 0) === contexto ? comOrdem[indice++] : item,
    );
    this.materiasPendentes.set(contexto, comOrdem);
  }

  soltarGrupo(evento: DragEvent, destino: PlanejamentoGrupoAssunto): void {
    if (
      !this.materiaSelecionada?.id ||
      !this.podeSoltar(evento, 'grupo', this.materiaSelecionada.id, destino.id)
    )
      return;

    const ordenada = this.mover(this.grupos, this.arraste!.id, destino.id!);
    this.arraste = undefined;
    if (!ordenada) return;

    this.grupos = this.definirOrdens(ordenada);
    this.gruposPendentes.set(this.materiaSelecionada.id, this.grupos);
    this.atualizarOrdemDaEstrutura('grupo', this.grupos);
  }

  soltarItem(evento: DragEvent, destino: PlanejamentoGrupoAssuntoItem): void {
    if (
      !this.grupoSelecionado?.id ||
      !this.podeSoltar(evento, 'item', this.grupoSelecionado.id, destino.id)
    )
      return;

    const ordenada = this.mover(this.itens, this.arraste!.id, destino.id!);
    this.arraste = undefined;
    if (!ordenada) return;

    this.itens = this.definirOrdens(ordenada);
    this.itensPendentes.set(this.grupoSelecionado.id, {
      planejamentoMateriaId: this.materiaSelecionada!.id!,
      itens: this.itens,
    });
    this.atualizarOrdemDaEstrutura('item', this.itens);
  }

  salvarMateria(): void {
    if (!this.id) return;
    const tipo = this.materiaForm.controls.tipo.value!;
    const materiaIds = this.materiaForm.controls.materiaIds.value ?? [];
    const nomeBloco = this.materiaForm.controls.nomeBloco.value?.trim();
    if (
      this.materiaForm.invalid ||
      (tipo === 'MATERIA' && !materiaIds.length) ||
      (tipo === 'BLOCO' && (!nomeBloco || nomeBloco.length > 150))
    ) {
      this.materiaForm.markAllAsTouched();
      return;
    }

    if (tipo === 'BLOCO') {
      const dados: PlanejamentoGrupoMateriaDTO = {
        nome: nomeBloco!,
        peso: this.materiaForm.controls.peso.value,
        dificuldade: this.materiaForm.controls.dificuldade.value,
        ordem: this.materiaForm.controls.ordem.value,
      };
      this.salvandoMateria = true;
      this.service.adicionarGrupoMateria(this.id, dados).subscribe({
        next: () => {
          this.salvandoMateria = false;
          this.modalMateriaAberto = false;
          this.cancelarEdicaoMateria();
          this.carregarGruposMaterias();
          this.message.success('Bloco de matérias adicionado com sucesso.');
        },
        error: (erro) => {
          console.error('Erro ao salvar bloco de matérias:', erro);
          this.salvandoMateria = false;
          this.message.error('Não foi possível salvar o bloco de matérias.');
        },
      });
      return;
    }

    if (this.materiaEditandoId && materiaIds.length !== 1) {
      this.message.warning('Na edição, selecione apenas uma matéria.');
      return;
    }

    const criarDados = (materiaId: number): PlanejamentoMateriaDTO => ({
      materiaId,
      planejamentoGrupoMateriaId: this.materiaForm.controls.planejamentoGrupoMateriaId.value,
      peso: this.materiaForm.controls.peso.value,
      dificuldade: this.materiaForm.controls.dificuldade.value,
      ordem: this.materiaForm.controls.ordem.value,
    });
    const editando = !!this.materiaEditandoId;
    this.salvandoMateria = true;
    const requisicao$: Observable<PlanejamentoMateria | PlanejamentoMateria[]> =
      this.materiaEditandoId
        ? this.service.atualizarMateria(this.id, this.materiaEditandoId, criarDados(materiaIds[0]))
        : forkJoin(
            materiaIds.map((materiaId) =>
              this.service.adicionarMateria(this.id!, criarDados(materiaId)),
            ),
          );

    requisicao$.subscribe({
      next: () => {
        this.salvandoMateria = false;
        this.modalMateriaAberto = false;
        this.cancelarEdicaoMateria();
        this.carregarMaterias();
        this.message.success(
          editando
            ? 'Matéria atualizada com sucesso.'
            : `${materiaIds.length} matéria(s) adicionada(s) com sucesso.`,
        );
      },
      error: (erro) => {
        console.error('Erro ao salvar matéria do planejamento:', erro);
        this.salvandoMateria = false;
        this.message.error('Não foi possível salvar a matéria no planejamento.');
      },
    });
  }

  editarMateria(item: PlanejamentoMateria): void {
    if (!item.id || !item.materia.id) return;
    this.materiaEditandoId = item.id;
    this.materiaForm.setValue({
      tipo: 'MATERIA',
      materiaIds: [item.materia.id],
      nomeBloco: '',
      planejamentoGrupoMateriaId: item.planejamentoGrupoMateria?.id ?? null,
      peso: item.peso ?? null,
      dificuldade: item.dificuldade ?? null,
      ordem: item.ordem ?? null,
    });
    this.modalMateriaAberto = true;
  }

  abrirMateria(): void {
    this.cancelarEdicaoMateria();
    this.modalMateriaAberto = true;
  }

  abrirMateriaNoGrupo(grupo: PlanejamentoGrupoMateria): void {
    if (!grupo.id) return;
    this.cancelarEdicaoMateria();
    this.materiaForm.patchValue({ tipo: 'MATERIA', planejamentoGrupoMateriaId: grupo.id });
    this.modalMateriaAberto = true;
  }

  fecharMateria(): void {
    if (this.salvandoMateria) return;
    this.modalMateriaAberto = false;
    this.cancelarEdicaoMateria();
  }

  cancelarEdicaoMateria(): void {
    this.materiaEditandoId = undefined;
    this.materiaForm.reset({
      tipo: 'MATERIA',
      materiaIds: [],
      nomeBloco: '',
      planejamentoGrupoMateriaId: null,
      peso: null,
      dificuldade: null,
      ordem: null,
    });
  }

  salvarGrupoMateria(): void {
    if (!this.id || this.grupoMateriaForm.invalid) {
      this.grupoMateriaForm.markAllAsTouched();
      return;
    }

    const dados: PlanejamentoGrupoMateriaDTO = {
      nome: this.grupoMateriaForm.controls.nome.value!.trim(),
      peso: this.grupoMateriaForm.controls.peso.value,
      dificuldade: this.grupoMateriaForm.controls.dificuldade.value,
      ordem: this.grupoMateriaForm.controls.ordem.value,
    };
    const editando = !!this.grupoMateriaEditandoId;
    this.salvandoGrupoMateria = true;
    const requisicao$ = this.grupoMateriaEditandoId
      ? this.service.atualizarGrupoMateria(this.id, this.grupoMateriaEditandoId, dados)
      : this.service.adicionarGrupoMateria(this.id, dados);

    requisicao$.subscribe({
      next: () => {
        this.salvandoGrupoMateria = false;
        this.modalGrupoMateriaAberto = false;
        this.cancelarEdicaoGrupoMateria();
        this.carregarGruposMaterias();
        this.message.success(
          `Bloco de matérias ${editando ? 'atualizado' : 'adicionado'} com sucesso.`,
        );
      },
      error: (erro) => {
        console.error('Erro ao salvar bloco de matérias:', erro);
        this.salvandoGrupoMateria = false;
        this.message.error('Não foi possível salvar o bloco de matérias.');
      },
    });
  }

  abrirGrupoMateria(): void {
    this.cancelarEdicaoGrupoMateria();
    this.modalGrupoMateriaAberto = true;
  }

  editarGrupoMateria(grupo: PlanejamentoGrupoMateria): void {
    if (!grupo.id) return;
    this.grupoMateriaEditandoId = grupo.id;
    this.grupoMateriaForm.setValue({
      nome: grupo.nome,
      peso: grupo.peso ?? null,
      dificuldade: grupo.dificuldade ?? null,
      ordem: grupo.ordem ?? null,
    });
    this.modalGrupoMateriaAberto = true;
  }

  fecharGrupoMateria(): void {
    if (this.salvandoGrupoMateria) return;
    this.modalGrupoMateriaAberto = false;
    this.cancelarEdicaoGrupoMateria();
  }

  cancelarEdicaoGrupoMateria(): void {
    this.grupoMateriaEditandoId = undefined;
    this.grupoMateriaForm.reset({ nome: '', peso: null, dificuldade: null, ordem: null });
  }

  excluirGrupoMateria(grupo: PlanejamentoGrupoMateria): void {
    if (!this.id || !grupo.id || !window.confirm(`Remover o bloco "${grupo.nome}"?`)) return;
    this.service.excluirGrupoMateria(this.id, grupo.id).subscribe({
      next: () => {
        this.message.success('Bloco de matérias removido.');
        this.carregarGruposMaterias();
      },
      error: (erro) => {
        console.error('Erro ao remover bloco de matérias:', erro);
        this.message.error('Remova ou mova as matérias deste bloco antes de excluí-lo.');
      },
    });
  }

  materiasDoGrupo(grupo: PlanejamentoGrupoMateria): PlanejamentoMateria[] {
    return this.materiasPlanejadas.filter(
      (materia) => materia.planejamentoGrupoMateria?.id === grupo.id,
    );
  }

  materiasSemGrupo(): PlanejamentoMateria[] {
    return this.materiasPlanejadas.filter((materia) => !materia.planejamentoGrupoMateria?.id);
  }

  selecionarGrupoMateria(grupo: PlanejamentoGrupoMateria): void {
    this.grupoMateriaSelecionado =
      this.grupoMateriaSelecionado?.id === grupo.id ? undefined : grupo;
  }

  excluirMateria(item: PlanejamentoMateria): void {
    if (
      !this.id ||
      !item.id ||
      !window.confirm(`Remover a matéria "${item.materia.nome}" do planejamento?`)
    )
      return;

    this.service.excluirMateria(this.id, item.id).subscribe({
      next: () => {
        this.message.success('Matéria removida do planejamento.');
        this.carregarMaterias();
      },
      error: (erro) => {
        console.error('Erro ao remover matéria do planejamento:', erro);
        this.message.error('Não foi possível remover a matéria do planejamento.');
      },
    });
  }

  materiasDisponiveis(): Materia[] {
    return this.materias;
  }

  cadastrarMateriaRapida(inputElement: HTMLInputElement): void {
    const nome = inputElement.value.trim();
    if (!nome || this.criandoMateria) return;

    this.criandoMateria = true;
    this.materiaService.criar({ nome }).subscribe({
      next: (materia) => {
        this.materias = [...this.materias, materia].sort((a, b) =>
          a.nome.localeCompare(b.nome, 'pt-BR'),
        );
        this.materiaForm.controls.materiaIds.setValue(
          materia.id ? [...(this.materiaForm.controls.materiaIds.value ?? []), materia.id] : [],
        );
        inputElement.value = '';
        this.criandoMateria = false;
        this.message.success('Matéria criada com sucesso.');
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao criar matéria:', erro);
        this.criandoMateria = false;
        this.message.error('Não foi possível criar a matéria.');
        this.cdr.detectChanges();
      },
    });
  }

  selecionarMateria(item: PlanejamentoMateria): void {
    if (!item.id) return;
    if (this.materiaSelecionada?.id === item.id) {
      this.materiaSelecionada = undefined;
      this.grupoSelecionado = undefined;
      this.itemSelecionado = undefined;
      return;
    }
    this.materiaSelecionada = item;
    this.grupoSelecionado = undefined;
    this.itemSelecionado = undefined;
    this.cancelarEdicaoGrupo();
    this.carregarGrupos();
  }

  salvarGrupo(): void {
    if (!this.id || !this.materiaSelecionada?.id || this.grupoForm.invalid) {
      this.grupoForm.markAllAsTouched();
      return;
    }
    const tipo = this.grupoForm.controls.tipo.value!;
    const nome = this.grupoForm.controls.nome.value?.trim() || null;
    if (tipo === 'ASSUNTO' && this.quantidadeItensGrupoEditando > 1) {
      this.message.warning('Um grupo com mais de um item não pode ser convertido para ASSUNTO.');
      return;
    }
    if (tipo === 'BLOCO' && (!nome || nome.length > 150)) {
      this.message.warning('Informe um nome de até 150 caracteres para o bloco.');
      return;
    }

    const dados: PlanejamentoGrupoAssuntoDTO = {
      tipo,
      nome: tipo === 'BLOCO' ? nome : null,
      peso: this.grupoForm.controls.peso.value,
      ordem: this.grupoForm.controls.ordem.value,
    };
    const editando = !!this.grupoEditandoId;
    this.salvandoGrupo = true;
    const request$ = this.grupoEditandoId
      ? this.service.atualizarGrupo(
          this.id,
          this.materiaSelecionada.id,
          this.grupoEditandoId,
          dados,
        )
      : this.service.adicionarGrupo(this.id, this.materiaSelecionada.id, dados);
    request$.subscribe({
      next: (grupo) => {
        this.salvandoGrupo = false;
        this.modalGrupoAberto = false;
        this.cancelarEdicaoGrupo();
        this.recarregarEstrutura(() => {
          this.carregarGrupos();
          if (!editando && tipo === 'ASSUNTO') {
            this.grupoSelecionado = this.grupos.find((item) => item.id === grupo.id) ?? grupo;
            this.itemSelecionado = undefined;
            this.carregarItens();
            this.carregarAssuntosDaMateria(() => this.abrirItem());
          }
        });
        this.message.success(`Grupo ${editando ? 'atualizado' : 'adicionado'} com sucesso.`);
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao salvar grupo:', erro);
        this.salvandoGrupo = false;
        this.message.error('Não foi possível salvar o grupo.');
      },
    });
  }

  editarGrupo(grupo: PlanejamentoGrupoAssunto): void {
    if (!grupo.id) return;
    this.grupoEditandoId = grupo.id;
    this.quantidadeItensGrupoEditando = 0;
    this.grupoForm.setValue({
      tipo: grupo.tipo,
      nome: grupo.nome || '',
      peso: grupo.peso ?? null,
      ordem: grupo.ordem ?? null,
    });
    this.modalGrupoAberto = true;
    if (this.id && this.materiaSelecionada?.id) {
      if (this.estrutura) {
        this.quantidadeItensGrupoEditando = this.itensDaEstrutura(grupo.id).length;
        return;
      }
      this.service.listarItens(this.id, this.materiaSelecionada.id, grupo.id).subscribe({
        next: (itens) => (this.quantidadeItensGrupoEditando = itens.length),
        error: (erro) => console.error('Erro ao verificar itens do grupo:', erro),
      });
    }
  }

  abrirGrupo(): void {
    this.cancelarEdicaoGrupo();
    this.modalGrupoAberto = true;
  }

  fecharGrupo(): void {
    if (this.salvandoGrupo) return;
    this.modalGrupoAberto = false;
    this.cancelarEdicaoGrupo();
  }

  nomeDoGrupo(grupo: PlanejamentoGrupoAssunto): string {
    if (grupo.tipo === 'BLOCO') return grupo.nome || 'Bloco sem nome';
    return grupo.id ? this.nomesAssuntosPorGrupo.get(grupo.id) || 'Assunto' : 'Assunto';
  }

  cancelarEdicaoGrupo(): void {
    this.grupoEditandoId = undefined;
    this.quantidadeItensGrupoEditando = 0;
    this.grupoForm.reset({ tipo: 'BLOCO', nome: '', peso: null, ordem: null });
  }

  excluirGrupo(grupo: PlanejamentoGrupoAssunto): void {
    if (
      !this.id ||
      !this.materiaSelecionada?.id ||
      !grupo.id ||
      !window.confirm('Remover este grupo?')
    )
      return;
    this.service.excluirGrupo(this.id, this.materiaSelecionada.id, grupo.id).subscribe({
      next: () => {
        this.message.success('Grupo removido.');
        this.recarregarEstrutura(() => this.carregarGrupos());
      },
      error: (erro) => {
        console.error('Erro ao remover grupo:', erro);
        this.message.error('Não foi possível remover o grupo.');
      },
    });
  }

  selecionarGrupo(grupo: PlanejamentoGrupoAssunto): void {
    if (!grupo.id || !this.materiaSelecionada?.materia.id) return;
    if (this.grupoSelecionado?.id === grupo.id) {
      this.grupoSelecionado = undefined;
      this.itemSelecionado = undefined;
      return;
    }
    this.grupoSelecionado = grupo;
    this.itemSelecionado = undefined;
    this.cancelarEdicaoItem();
    this.carregarItens();
    this.carregarAssuntosDaMateria();
  }

  salvarItem(): void {
    if (
      !this.id ||
      !this.materiaSelecionada?.id ||
      !this.grupoSelecionado?.id ||
      this.itemForm.invalid
    ) {
      this.itemForm.markAllAsTouched();
      return;
    }
    if (!this.podeAdicionarItem()) {
      this.message.warning('Um grupo do tipo ASSUNTO pode possuir somente um item.');
      return;
    }
    const assuntoIds = this.itemForm.controls.assuntoIds.value ?? [];
    if (!assuntoIds.length) {
      this.itemForm.markAllAsTouched();
      return;
    }
    if (this.itemEditandoId && assuntoIds.length !== 1) {
      this.message.warning('Na edição, selecione apenas um assunto.');
      return;
    }
    const criarDados = (assuntoId: number): PlanejamentoGrupoAssuntoItemDTO => ({
      assuntoId,
      peso: this.itemForm.controls.peso.value,
      dificuldade: this.itemForm.controls.dificuldade.value,
      ordem: this.itemForm.controls.ordem.value,
    });
    const adicionarNoGrupo = (grupoId: number, assuntoId: number) =>
      this.service.adicionarItem(
        this.id!,
        this.materiaSelecionada!.id!,
        grupoId,
        criarDados(assuntoId),
      );
    const editando = !!this.itemEditandoId;
    this.salvandoItem = true;
    const request$: Observable<PlanejamentoGrupoAssuntoItem | PlanejamentoGrupoAssuntoItem[]> =
      this.itemEditandoId
        ? this.service.atualizarItem(
            this.id,
            this.materiaSelecionada.id,
            this.grupoSelecionado.id,
            this.itemEditandoId,
            criarDados(assuntoIds[0]),
          )
        : this.grupoSelecionado.tipo === 'ASSUNTO'
          ? forkJoin([
              adicionarNoGrupo(this.grupoSelecionado.id, assuntoIds[0]),
              ...assuntoIds.slice(1).map((assuntoId) =>
                this.service
                  .adicionarGrupo(this.id!, this.materiaSelecionada!.id!, { tipo: 'ASSUNTO' })
                  .pipe(switchMap((grupo) => adicionarNoGrupo(grupo.id!, assuntoId))),
              ),
            ])
        : forkJoin(
            assuntoIds.map((assuntoId) =>
              adicionarNoGrupo(this.grupoSelecionado!.id!, assuntoId),
            ),
          );
    request$.subscribe({
      next: () => {
        this.salvandoItem = false;
        this.modalItemAberto = false;
        this.cancelarEdicaoItem();
        this.recarregarEstrutura(() => {
          this.carregarItens();
          this.carregarGrupos();
        });
        this.message.success(
          editando
            ? 'Assunto atualizado com sucesso.'
            : `${assuntoIds.length} assunto(s) adicionado(s) com sucesso.`,
        );
      },
      error: (erro) => {
        console.error('Erro ao salvar item:', erro);
        this.salvandoItem = false;
        this.message.error('Não foi possível salvar o item.');
      },
    });
  }

  cadastrarAssuntoRapido(inputElement: HTMLInputElement): void {
    const nome = inputElement.value.trim();
    const materiaId = this.materiaSelecionada?.materia.id;
    if (!nome || !materiaId || this.criandoAssunto) return;

    this.criandoAssunto = true;
    this.registroService.criarAssunto({ nome, materiaId }).subscribe({
      next: (assunto) => {
        this.assuntos = [...this.assuntos, assunto].sort((a, b) =>
          a.nome.localeCompare(b.nome, 'pt-BR'),
        );
        if (assunto.id) {
          this.itemForm.controls.assuntoIds.setValue([
            ...(this.itemForm.controls.assuntoIds.value ?? []),
            assunto.id,
          ]);
        }
        inputElement.value = '';
        this.criandoAssunto = false;
        this.message.success('Assunto criado com sucesso.');
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao criar assunto:', erro);
        this.criandoAssunto = false;
        this.message.error('Não foi possível criar o assunto.');
        this.cdr.detectChanges();
      },
    });
  }

  editarItem(item: PlanejamentoGrupoAssuntoItem): void {
    if (!item.id) return;
    this.itemEditandoId = item.id;
    this.itemForm.setValue({
      assuntoIds: [item.assunto.id],
      peso: item.peso ?? null,
      dificuldade: item.dificuldade ?? null,
      ordem: item.ordem ?? null,
    });
    this.modalItemAberto = true;
  }

  abrirItem(): void {
    this.cancelarEdicaoItem();
    this.modalItemAberto = true;
  }

  fecharItem(): void {
    if (this.salvandoItem) return;
    this.modalItemAberto = false;
    this.cancelarEdicaoItem();
  }

  cancelarEdicaoItem(): void {
    this.itemEditandoId = undefined;
    this.itemForm.reset({ assuntoIds: [], peso: null, dificuldade: null, ordem: null });
  }

  excluirItem(item: PlanejamentoGrupoAssuntoItem): void {
    if (
      !this.id ||
      !this.materiaSelecionada?.id ||
      !this.grupoSelecionado?.id ||
      !item.id ||
      !window.confirm(`Remover o assunto "${item.assunto.nome}"?`)
    )
      return;
    this.service
      .excluirItem(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, item.id)
      .subscribe({
        next: () => {
          this.message.success('Item removido.');
          this.recarregarEstrutura(() => {
            this.carregarItens();
            this.carregarGrupos();
          });
        },
        error: (erro) => {
          console.error('Erro ao remover item:', erro);
          this.message.error('Não foi possível remover o item.');
        },
      });
  }

  podeAdicionarItem(): boolean {
    return (
      this.grupoSelecionado?.tipo !== 'ASSUNTO' || !!this.itemEditandoId || this.itens.length === 0
    );
  }

  assuntosDisponiveis(): Assunto[] {
    return this.assuntos.filter(
      (assunto) =>
        assunto.id === this.itemSelecionado?.assunto.id ||
        assunto.id === this.itemForm.controls.assuntoIds.value?.[0] ||
        !assunto.id ||
        !this.assuntoIdsCadastrados.has(assunto.id),
    );
  }

  abrirEtapas(item: PlanejamentoGrupoAssuntoItem): void {
    if (!item.id) return;
    this.itemSelecionado = item;
    this.cancelarEdicaoEtapa();
    this.modalEtapasAberto = true;
    this.carregarEtapas();
    this.carregarTiposRegistro();
  }

  fecharEtapas(): void {
    if (this.salvandoEtapa || this.modalEtapaAberto) return;
    this.modalEtapasAberto = false;
    this.itemSelecionado = undefined;
    this.etapas = [];
    this.cancelarEdicaoEtapa();
  }

  salvarEtapa(): void {
    if (
      !this.id ||
      !this.materiaSelecionada?.id ||
      !this.grupoSelecionado?.id ||
      !this.itemSelecionado?.id ||
      this.etapaForm.invalid
    ) {
      this.etapaForm.markAllAsTouched();
      return;
    }
    const concluida = this.etapaForm.controls.concluida.value!;
    const dados: PlanejamentoItemEtapaDTO = {
      tipoRegistroId: this.etapaForm.controls.tipoRegistroId.value!,
      ordem: this.etapaForm.controls.ordem.value,
      concluida,
      concluidaManualmente: concluida,
    };
    const editando = !!this.etapaEditandoId;
    this.salvandoEtapa = true;
    const request$ = this.etapaEditandoId
      ? this.service.atualizarEtapa(
          this.id,
          this.materiaSelecionada.id,
          this.grupoSelecionado.id,
          this.itemSelecionado.id,
          this.etapaEditandoId,
          dados,
        )
      : this.service.adicionarEtapa(
          this.id,
          this.materiaSelecionada.id,
          this.grupoSelecionado.id,
          this.itemSelecionado.id,
          dados,
        );
    request$.subscribe({
      next: () => {
        this.salvandoEtapa = false;
        this.modalEtapaAberto = false;
        this.cancelarEdicaoEtapa();
        this.recarregarEstrutura(() => this.carregarEtapas());
        this.message.success(`Etapa ${editando ? 'atualizada' : 'adicionada'} com sucesso.`);
      },
      error: (erro) => {
        console.error('Erro ao salvar etapa:', erro);
        this.salvandoEtapa = false;
        this.message.error('Não foi possível salvar a etapa.');
      },
    });
  }

  editarEtapa(etapa: PlanejamentoItemEtapa): void {
    if (!etapa.id) return;
    this.etapaEditandoId = etapa.id;
    this.etapaForm.setValue({
      tipoRegistroId: etapa.tipoRegistro.id,
      ordem: etapa.ordem ?? null,
      concluida: !!etapa.concluida,
    });
    this.modalEtapaAberto = true;
  }

  abrirEtapa(): void {
    this.cancelarEdicaoEtapa();
    this.carregarTiposRegistro();
    this.modalEtapaAberto = true;
  }

  fecharEtapa(): void {
    if (this.salvandoEtapa) return;
    this.modalEtapaAberto = false;
    this.cancelarEdicaoEtapa();
  }

  cancelarEdicaoEtapa(): void {
    this.etapaEditandoId = undefined;
    this.etapaForm.reset({
      tipoRegistroId: null,
      ordem: null,
      concluida: false,
    });
  }

  excluirEtapa(etapa: PlanejamentoItemEtapa): void {
    if (
      !this.id ||
      !this.materiaSelecionada?.id ||
      !this.grupoSelecionado?.id ||
      !this.itemSelecionado?.id ||
      !etapa.id ||
      !window.confirm('Remover esta etapa?')
    )
      return;
    this.service
      .excluirEtapa(
        this.id,
        this.materiaSelecionada.id,
        this.grupoSelecionado.id,
        this.itemSelecionado.id,
        etapa.id,
      )
      .subscribe({
        next: () => {
          this.message.success('Etapa removida.');
          this.recarregarEstrutura(() => this.carregarEtapas());
        },
        error: (erro) => {
          console.error('Erro ao remover etapa:', erro);
          this.message.error('Não foi possível remover a etapa.');
        },
      });
  }

  private podeSoltar(
    evento: DragEvent,
    tipo: 'grupoMateria' | 'materia' | 'grupo' | 'item',
    contexto: number,
    destinoId?: number,
  ): boolean {
    evento.preventDefault();
    return !!(
      destinoId &&
      this.arraste?.tipo === tipo &&
      this.arraste.contexto === contexto &&
      this.arraste.id !== destinoId
    );
  }

  private mover<T extends { id?: number }>(
    lista: T[],
    origemId: number,
    destinoId: number,
  ): T[] | undefined {
    const origem = lista.findIndex((item) => item.id === origemId);
    const destino = lista.findIndex((item) => item.id === destinoId);
    if (origem < 0 || destino < 0 || origem === destino) return undefined;

    const ordenada = [...lista];
    const [movida] = ordenada.splice(origem, 1);
    ordenada.splice(destino, 0, movida);
    return ordenada;
  }

  private definirOrdens<T extends { ordem?: number | null }>(lista: T[]): T[] {
    return lista.map((item, indice) => ({ ...item, ordem: indice + 1 }));
  }

  private dadosDeReordenacao<T extends { id?: number; ordem?: number | null }>(
    lista: T[],
  ): PlanejamentoReordenacaoDTO {
    return {
      itens: lista.map((item) => ({ id: item.id!, ordem: item.ordem! })),
    };
  }

  salvarOrdem(): void {
    if (!this.id || !this.ordemPendente || this.salvandoOrdem) return;

    const requisicoes: Observable<void>[] = [];
    if (this.grupoMateriasPendente) {
      requisicoes.push(
        this.service.reordenarGruposMaterias(
          this.id,
          this.dadosDeReordenacao(this.grupoMateriasPendente),
        ),
      );
    }
    this.materiasPendentes.forEach((materias) =>
      requisicoes.push(
        this.service.reordenarMaterias(this.id!, this.dadosDeReordenacao(materias)),
      ),
    );
    this.gruposPendentes.forEach((grupos, planejamentoMateriaId) =>
      requisicoes.push(
        this.service.reordenarGrupos(
          this.id!,
          planejamentoMateriaId,
          this.dadosDeReordenacao(grupos),
        ),
      ),
    );
    this.itensPendentes.forEach(({ planejamentoMateriaId, itens }, grupoId) =>
      requisicoes.push(
        this.service.reordenarItens(
          this.id!,
          planejamentoMateriaId,
          grupoId,
          this.dadosDeReordenacao(itens),
        ),
      ),
    );

    this.salvandoOrdem = true;
    forkJoin(requisicoes)
      .pipe(finalize(() => {
        this.salvandoOrdem = false;
        this.cdr.detectChanges();
      }))
      .subscribe({
        next: () => {
          this.grupoMateriasPendente = undefined;
          this.materiasPendentes.clear();
          this.gruposPendentes.clear();
          this.itensPendentes.clear();
          this.message.success('Ordem salva com sucesso.');
        },
        error: (erro) => {
          console.error('Erro ao salvar a ordem do planejamento:', erro);
          this.message.error('Não foi possível salvar a ordem. Tente novamente.');
        },
      });
  }

  private atualizarOrdemDaEstrutura(
    tipo: 'grupo' | 'item',
    lista: Array<{ id?: number; ordem?: number | null }>,
  ): void {
    if (!this.estrutura) return;
    const ordens = new Map(lista.map((item) => [item.id, item.ordem]));
    this.estrutura = tipo === 'grupo'
      ? {
          ...this.estrutura,
          grupos: this.estrutura.grupos.map((grupo) =>
            ordens.has(grupo.id) ? { ...grupo, ordem: ordens.get(grupo.id) } : grupo,
          ),
        }
      : {
          ...this.estrutura,
          itens: this.estrutura.itens.map((item) =>
            ordens.has(item.id) ? { ...item, ordem: ordens.get(item.id) } : item,
          ),
        };
  }

  private carregar(): void {
    if (!this.id) return;
    this.carregando = true;
    this.service
      .buscarPorId(this.id)
      .pipe(
        finalize(() => {
          this.carregando = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (planejamento) => {
          this.form.patchValue({
            nome: planejamento.nome,
            descricao: planejamento.descricao || '',
            dataFimPrevista: planejamento.dataFimPrevista || null,
          });
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao carregar planejamento:', erro);
          this.message.error('Não foi possível carregar o planejamento.');
        },
      });
  }

  private carregarMaterias(): void {
    if (!this.id) return;
    this.carregandoMaterias = true;
    this.service
      .listarMaterias(this.id)
      .pipe(
        finalize(() => {
          this.carregandoMaterias = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (materias) => {
          this.materiasPlanejadas = materias;
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao carregar matérias do planejamento:', erro);
          this.message.error('Não foi possível carregar as matérias do planejamento.');
        },
      });
  }

  private carregarGruposMaterias(): void {
    if (!this.id) return;
    this.carregandoGruposMaterias = true;
    this.service
      .listarGruposMaterias(this.id)
      .pipe(
        finalize(() => {
          this.carregandoGruposMaterias = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (grupos) => {
          this.gruposMaterias = grupos;
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao carregar blocos de matérias:', erro);
          this.message.error('Não foi possível carregar os blocos de matérias.');
        },
      });
  }

  private carregarGrupos(): void {
    if (!this.id || !this.materiaSelecionada?.id) return;
    if (this.estrutura) {
      this.grupos = this.gruposDaEstrutura(this.materiaSelecionada.id);
      this.carregarNomesDosAssuntos(this.grupos);
      this.carregarAssuntosCadastrados(this.grupos);
      this.carregandoGrupos = false;
      this.cdr.detectChanges();
      return;
    }
    this.carregandoGrupos = true;
    this.service
      .listarGrupos(this.id, this.materiaSelecionada.id)
      .pipe(
        finalize(() => {
          this.carregandoGrupos = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (grupos) => {
          this.grupos = grupos;
          this.carregarNomesDosAssuntos(grupos);
          this.carregarAssuntosCadastrados(grupos);
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao carregar grupos:', erro);
          this.message.error('Não foi possível carregar os grupos.');
        },
      });
  }

  private carregarItens(): void {
    if (!this.id || !this.materiaSelecionada?.id || !this.grupoSelecionado?.id) return;
    if (this.estrutura) {
      this.itens = this.itensDaEstrutura(this.grupoSelecionado.id);
      this.carregandoItens = false;
      this.cdr.detectChanges();
      return;
    }
    this.carregandoItens = true;
    this.service
      .listarItens(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id)
      .pipe(
        finalize(() => {
          this.carregandoItens = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (itens) => {
          this.itens = itens;
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao carregar itens:', erro);
          this.message.error('Não foi possível carregar os itens.');
        },
      });
  }

  private carregarAssuntosDaMateria(aoCarregar?: () => void): void {
    const materiaId = this.materiaSelecionada?.materia.id;
    if (!materiaId) return;

    this.registroService.listarAssuntosPorMateria(materiaId).subscribe({
      next: (assuntos) => {
        this.assuntos = assuntos;
        aoCarregar?.();
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar assuntos:', erro);
        this.message.error('Não foi possível carregar os assuntos da matéria.');
        this.cdr.detectChanges();
      },
    });
  }

  private carregarNomesDosAssuntos(grupos: PlanejamentoGrupoAssunto[]): void {
    this.nomesAssuntosPorGrupo.clear();
    if (!this.id || !this.materiaSelecionada?.id) return;

    if (this.estrutura) {
      grupos
        .filter((grupo) => grupo.tipo === 'ASSUNTO' && grupo.id)
        .forEach((grupo) => {
          const nome = this.itensDaEstrutura(grupo.id!).at(0)?.assunto.nome;
          if (nome) this.nomesAssuntosPorGrupo.set(grupo.id!, nome);
        });
      return;
    }

    grupos
      .filter((grupo) => grupo.tipo === 'ASSUNTO' && grupo.id)
      .forEach((grupo) => {
        this.service.listarItens(this.id!, this.materiaSelecionada!.id!, grupo.id!).subscribe({
          next: (itens) => {
            const nome = itens[0]?.assunto?.nome;
            if (nome) this.nomesAssuntosPorGrupo.set(grupo.id!, nome);
            this.cdr.detectChanges();
          },
          error: (erro) => console.error('Erro ao carregar nome do assunto:', erro),
        });
      });
  }

  private carregarAssuntosCadastrados(grupos: PlanejamentoGrupoAssunto[]): void {
    if (!this.id || !this.materiaSelecionada?.id) return;

    if (this.estrutura) {
      this.assuntoIdsCadastrados = new Set(
        grupos.flatMap((grupo) => grupo.id
          ? this.itensDaEstrutura(grupo.id).map((item) => item.assunto.id)
          : []),
      );
      return;
    }

    const consultas = grupos
      .filter((grupo) => grupo.id)
      .map((grupo) => this.service.listarItens(this.id!, this.materiaSelecionada!.id!, grupo.id!));

    if (!consultas.length) {
      this.assuntoIdsCadastrados = new Set();
      return;
    }

    forkJoin(consultas).subscribe({
      next: (itensPorGrupo) => {
        this.assuntoIdsCadastrados = new Set(
          itensPorGrupo.flatMap((itens) =>
            itens.map((item) => item.assunto.id).filter((id): id is number => !!id),
          ),
        );
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao carregar assuntos já cadastrados:', erro),
    });
  }

  private carregarEtapas(): void {
    if (
      !this.id ||
      !this.materiaSelecionada?.id ||
      !this.grupoSelecionado?.id ||
      !this.itemSelecionado?.id
    )
      return;
    if (this.estrutura) {
      this.etapas = this.etapasDaEstrutura(this.itemSelecionado.id);
      this.carregandoEtapas = false;
      this.cdr.detectChanges();
      return;
    }
    this.carregandoEtapas = true;
    this.service
      .listarEtapas(
        this.id,
        this.materiaSelecionada.id,
        this.grupoSelecionado.id,
        this.itemSelecionado.id,
      )
      .pipe(
        finalize(() => {
          this.carregandoEtapas = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (etapas) => {
          this.etapas = etapas;
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao carregar etapas:', erro);
          this.message.error('Não foi possível carregar as etapas.');
        },
      });
  }

  private carregarTiposRegistro(): void {
    if (this.tiposRegistro.length) return;
    this.registroService.listarTiposRegistro().subscribe({
      next: (tipos) => {
        this.tiposRegistro = tipos;
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao carregar tipos de registro:', erro),
    });
  }

  private carregarEstrutura(aposCarregar?: () => void): void {
    if (!this.id) return;
    this.service.buscarEstrutura(this.id).subscribe({
      next: (estrutura) => {
        this.estrutura = estrutura;
        this.gruposPendentes.forEach((grupos) =>
          this.atualizarOrdemDaEstrutura('grupo', grupos),
        );
        this.itensPendentes.forEach(({ itens }) =>
          this.atualizarOrdemDaEstrutura('item', itens),
        );
        aposCarregar?.();
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao carregar estrutura do planejamento:', erro),
    });
  }

  private recarregarEstrutura(aposCarregar: () => void): void {
    this.estrutura = undefined;
    this.carregarEstrutura(aposCarregar);
  }

  private gruposDaEstrutura(planejamentoMateriaId: number): PlanejamentoGrupoAssunto[] {
    return (this.estrutura?.grupos ?? [])
      .filter((grupo) => grupo.planejamentoMateriaId === planejamentoMateriaId)
      .map((grupo) => ({
        id: grupo.id,
        tipo: grupo.tipo,
        nome: grupo.nome,
        peso: grupo.peso,
        ordem: grupo.ordem,
      }))
      .sort((a, b) => (a.ordem ?? Number.MAX_SAFE_INTEGER) - (b.ordem ?? Number.MAX_SAFE_INTEGER));
  }

  private itensDaEstrutura(grupoId: number): PlanejamentoGrupoAssuntoItem[] {
    return (this.estrutura?.itens ?? [])
      .filter((item) => item.grupoId === grupoId)
      .map((item) => ({
        id: item.id,
        assunto: { id: item.assuntoId, nome: item.assuntoNome },
        peso: item.peso,
        dificuldade: item.dificuldade,
        ordem: item.ordem,
      }))
      .sort((a, b) => (a.ordem ?? Number.MAX_SAFE_INTEGER) - (b.ordem ?? Number.MAX_SAFE_INTEGER));
  }

  private etapasDaEstrutura(itemId: number): PlanejamentoItemEtapa[] {
    return (this.estrutura?.etapas ?? [])
      .filter((etapa) => etapa.itemId === itemId)
      .map((etapa) => ({
        id: etapa.id,
        tipoRegistro: {
          id: etapa.tipoRegistroId,
          nome: etapa.tipoRegistroNome,
        },
        ordem: etapa.ordem,
        iniciada: etapa.iniciada,
        concluida: etapa.concluida,
        dataConcluida: etapa.dataConcluida,
      }));
  }
}
