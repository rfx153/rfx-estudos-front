import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { finalize } from 'rxjs';
import { Materia, MateriaService } from '../../services/materia.service';
import { Assunto, RegistroService, TipoRegistro } from '../../services/registro.service';
import {
  Planejamento,
  PlanejamentoMateria,
  PlanejamentoMateriaDTO,
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
  });
  readonly materiaForm = this.fb.group({
    tipo: ['MATERIA' as 'MATERIA' | 'BLOCO', Validators.required],
    materiaId: [null as number | null],
    nomeBloco: ['', Validators.maxLength(150)],
    planejamentoGrupoMateriaId: [null as number | null],
    peso: [null as number | null, [Validators.min(1), Validators.max(5)]],
    ordem: [null as number | null, Validators.min(1)],
  });
  readonly grupoMateriaForm = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(150)]],
    peso: [null as number | null, [Validators.min(1), Validators.max(5)]],
    ordem: [null as number | null, Validators.min(1)],
  });
  readonly grupoForm = this.fb.group({
    tipo: ['BLOCO' as PlanejamentoGrupoAssuntoTipo, Validators.required],
    nome: [''],
    peso: [null as number | null, [Validators.min(1), Validators.max(5)]],
    ordem: [null as number | null, Validators.min(1)],
  });
  readonly itemForm = this.fb.group({
    assuntoId: [null as number | null, Validators.required],
    peso: [null as number | null, [Validators.min(1), Validators.max(5)]],
    ordem: [null as number | null, Validators.min(1)],
  });
  readonly etapaForm = this.fb.group({
    tipoRegistroId: [null as number | null, Validators.required],
    ordem: [null as number | null, Validators.min(1)],
    concluida: [false],
    concluidaManualmente: [false],
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
    this.router.navigate(['/planejamentos']);
  }

  salvarMateria(): void {
    if (!this.id) return;
    const tipo = this.materiaForm.controls.tipo.value!;
    const materiaId = this.materiaForm.controls.materiaId.value;
    const nomeBloco = this.materiaForm.controls.nomeBloco.value?.trim();
    if (
      this.materiaForm.invalid ||
      (tipo === 'MATERIA' && !materiaId) ||
      (tipo === 'BLOCO' && (!nomeBloco || nomeBloco.length > 150))
    ) {
      this.materiaForm.markAllAsTouched();
      return;
    }

    if (tipo === 'BLOCO') {
      const dados: PlanejamentoGrupoMateriaDTO = {
        nome: nomeBloco!,
        peso: this.materiaForm.controls.peso.value,
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

    const dados: PlanejamentoMateriaDTO = {
      materiaId: materiaId!,
      planejamentoGrupoMateriaId: this.materiaForm.controls.planejamentoGrupoMateriaId.value,
      peso: this.materiaForm.controls.peso.value,
      ordem: this.materiaForm.controls.ordem.value,
    };
    const editando = !!this.materiaEditandoId;
    this.salvandoMateria = true;
    const requisicao$ = this.materiaEditandoId
      ? this.service.atualizarMateria(this.id, this.materiaEditandoId, dados)
      : this.service.adicionarMateria(this.id, dados);

    requisicao$.subscribe({
      next: () => {
        this.salvandoMateria = false;
        this.modalMateriaAberto = false;
        this.cancelarEdicaoMateria();
        this.carregarMaterias();
        this.message.success(`Matéria ${editando ? 'atualizada' : 'adicionada'} com sucesso.`);
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
      materiaId: item.materia.id,
      nomeBloco: '',
      planejamentoGrupoMateriaId: item.planejamentoGrupoMateria?.id ?? null,
      peso: item.peso ?? null,
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
      materiaId: null,
      nomeBloco: '',
      planejamentoGrupoMateriaId: null,
      peso: null,
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
    this.grupoMateriaForm.reset({ nome: '', peso: null, ordem: null });
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
    const idsAdicionados = new Set(
      this.materiasPlanejadas
        .filter((item) => item.id !== this.materiaEditandoId)
        .map((item) => item.materia.id),
    );
    return this.materias.filter((materia) => !idsAdicionados.has(materia.id));
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
        this.materiaForm.controls.materiaId.setValue(materia.id ?? null);
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
      next: () => {
        this.salvandoGrupo = false;
        this.modalGrupoAberto = false;
        this.cancelarEdicaoGrupo();
        this.carregarGrupos();
        this.message.success(`Grupo ${editando ? 'atualizado' : 'adicionado'} com sucesso.`);
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
        this.carregarGrupos();
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
    this.registroService.listarAssuntosPorMateria(this.materiaSelecionada.materia.id).subscribe({
      next: (assuntos) => {
        this.assuntos = assuntos;
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao carregar assuntos:', erro),
    });
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
    const dados: PlanejamentoGrupoAssuntoItemDTO = {
      assuntoId: this.itemForm.controls.assuntoId.value!,
      peso: this.itemForm.controls.peso.value,
      ordem: this.itemForm.controls.ordem.value,
    };
    const editando = !!this.itemEditandoId;
    this.salvandoItem = true;
    const request$ = this.itemEditandoId
      ? this.service.atualizarItem(
          this.id,
          this.materiaSelecionada.id,
          this.grupoSelecionado.id,
          this.itemEditandoId,
          dados,
        )
      : this.service.adicionarItem(
          this.id,
          this.materiaSelecionada.id,
          this.grupoSelecionado.id,
          dados,
        );
    request$.subscribe({
      next: () => {
        this.salvandoItem = false;
        this.modalItemAberto = false;
        this.cancelarEdicaoItem();
        this.carregarItens();
        this.message.success(`Item ${editando ? 'atualizado' : 'adicionado'} com sucesso.`);
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
        this.itemForm.controls.assuntoId.setValue(assunto.id);
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
      assuntoId: item.assunto.id,
      peso: item.peso ?? null,
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
    this.itemForm.reset({ assuntoId: null, peso: null, ordem: null });
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
          this.carregarItens();
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
    if (
      this.etapaForm.controls.concluidaManualmente.value &&
      !this.etapaForm.controls.concluida.value
    ) {
      this.message.warning('Uma etapa manualmente concluída também deve estar concluída.');
      return;
    }
    const dados: PlanejamentoItemEtapaDTO = {
      tipoRegistroId: this.etapaForm.controls.tipoRegistroId.value!,
      ordem: this.etapaForm.controls.ordem.value,
      concluida: this.etapaForm.controls.concluida.value!,
      concluidaManualmente: this.etapaForm.controls.concluidaManualmente.value!,
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
        this.carregarEtapas();
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
      concluidaManualmente: !!etapa.concluidaManualmente,
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
      concluidaManualmente: false,
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
          this.carregarEtapas();
        },
        error: (erro) => {
          console.error('Erro ao remover etapa:', erro);
          this.message.error('Não foi possível remover a etapa.');
        },
      });
  }

  private carregar(): void {
    if (!this.id) return;
    this.carregando = true;
    this.service
      .listarTodos()
      .pipe(
        finalize(() => {
          this.carregando = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (planejamentos) => {
          const planejamento = planejamentos.find((item) => item.id === this.id);
          if (!planejamento) {
            this.message.error('Planejamento não encontrado.');
            this.voltar();
            return;
          }

          this.form.patchValue({
            nome: planejamento.nome,
            descricao: planejamento.descricao || '',
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

  private carregarNomesDosAssuntos(grupos: PlanejamentoGrupoAssunto[]): void {
    this.nomesAssuntosPorGrupo.clear();
    if (!this.id || !this.materiaSelecionada?.id) return;

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

  private carregarEtapas(): void {
    if (
      !this.id ||
      !this.materiaSelecionada?.id ||
      !this.grupoSelecionado?.id ||
      !this.itemSelecionado?.id
    )
      return;
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
}
