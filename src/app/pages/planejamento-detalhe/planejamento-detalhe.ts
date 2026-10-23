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
  PlanejamentoGrupoAssunto,
  PlanejamentoGrupoAssuntoDTO,
  PlanejamentoGrupoAssuntoTipo,
  PlanejamentoGrupoAssuntoItem,
  PlanejamentoGrupoAssuntoItemDTO,
  PlanejamentoItemEtapa,
  PlanejamentoItemEtapaDTO,
  PlanejamentoService
} from '../../services/planejamento.service';

@Component({
  selector: 'app-planejamento-detalhe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule, NzSelectModule],
  templateUrl: './planejamento-detalhe.html',
  styleUrl: './planejamento-detalhe.css'
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
    descricao: ['']
  });
  readonly materiaForm = this.fb.group({
    materiaId: [null as number | null, Validators.required],
    peso: [null as number | null, [Validators.min(1), Validators.max(5)]],
    ordem: [null as number | null, Validators.min(1)]
  });
  readonly grupoForm = this.fb.group({
    tipo: ['BLOCO' as PlanejamentoGrupoAssuntoTipo, Validators.required],
    nome: [''],
    peso: [null as number | null, [Validators.min(1), Validators.max(5)]],
    ordem: [null as number | null, Validators.min(1)]
  });
  readonly itemForm = this.fb.group({
    assuntoId: [null as number | null, Validators.required],
    peso: [null as number | null, [Validators.min(1), Validators.max(5)]],
    ordem: [null as number | null, Validators.min(1)]
  });
  readonly etapaForm = this.fb.group({
    tipoRegistroId: [null as number | null, Validators.required],
    ordem: [null as number | null, Validators.min(1)],
    concluida: [false],
    concluidaManualmente: [false]
  });

  id?: number;
  carregando = false;
  salvando = false;
  carregandoMaterias = false;
  salvandoMateria = false;
  materiaEditandoId?: number;
  materias: Materia[] = [];
  materiasPlanejadas: PlanejamentoMateria[] = [];
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
  itemSelecionado?: PlanejamentoGrupoAssuntoItem;
  etapas: PlanejamentoItemEtapa[] = [];
  tiposRegistro: TipoRegistro[] = [];
  etapaEditandoId?: number;
  carregandoEtapas = false;
  salvandoEtapa = false;

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
    this.carregarMaterias();
    this.materiaService.listarTodas().subscribe({
      next: materias => {
        this.materias = materias;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao carregar matérias:', erro);
        this.cdr.detectChanges();
      }
    });
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const planejamento: Planejamento = {
      nome: this.form.controls.nome.value!.trim(),
      descricao: this.form.controls.descricao.value?.trim() || null
    };

    this.salvando = true;
    const requisicao$ = this.id
      ? this.service.atualizar(this.id, planejamento)
      : this.service.criar(planejamento);

    requisicao$.subscribe({
      next: salvo => {
        this.message.success(`Planejamento ${this.id ? 'atualizado' : 'criado'} com sucesso.`);
        this.router.navigate(['/planejamentos', salvo.id]);
      },
      error: erro => {
        console.error('Erro ao salvar planejamento:', erro);
        this.salvando = false;
        this.message.error('Não foi possível salvar o planejamento.');
      }
    });
  }

  voltar(): void {
    this.router.navigate(['/planejamentos']);
  }

  salvarMateria(): void {
    if (!this.id) return;
    if (this.materiaForm.invalid) {
      this.materiaForm.markAllAsTouched();
      return;
    }

    const dados: PlanejamentoMateriaDTO = {
      materiaId: this.materiaForm.controls.materiaId.value!,
      peso: this.materiaForm.controls.peso.value,
      ordem: this.materiaForm.controls.ordem.value
    };
    const editando = !!this.materiaEditandoId;
    this.salvandoMateria = true;
    const requisicao$ = this.materiaEditandoId
      ? this.service.atualizarMateria(this.id, this.materiaEditandoId, dados)
      : this.service.adicionarMateria(this.id, dados);

    requisicao$.subscribe({
      next: () => {
        this.salvandoMateria = false;
        this.cancelarEdicaoMateria();
        this.carregarMaterias();
        this.message.success(`Matéria ${editando ? 'atualizada' : 'adicionada'} com sucesso.`);
      },
      error: erro => {
        console.error('Erro ao salvar matéria do planejamento:', erro);
        this.salvandoMateria = false;
        this.message.error('Não foi possível salvar a matéria no planejamento.');
      }
    });
  }

  editarMateria(item: PlanejamentoMateria): void {
    if (!item.id || !item.materia.id) return;
    this.materiaEditandoId = item.id;
    this.materiaForm.setValue({
      materiaId: item.materia.id,
      peso: item.peso ?? null,
      ordem: item.ordem ?? null
    });
  }

  cancelarEdicaoMateria(): void {
    this.materiaEditandoId = undefined;
    this.materiaForm.reset({ materiaId: null, peso: null, ordem: null });
  }

  excluirMateria(item: PlanejamentoMateria): void {
    if (!this.id || !item.id || !window.confirm(`Remover a matéria "${item.materia.nome}" do planejamento?`)) return;

    this.service.excluirMateria(this.id, item.id).subscribe({
      next: () => {
        this.message.success('Matéria removida do planejamento.');
        this.carregarMaterias();
      },
      error: erro => {
        console.error('Erro ao remover matéria do planejamento:', erro);
        this.message.error('Não foi possível remover a matéria do planejamento.');
      }
    });
  }

  materiasDisponiveis(): Materia[] {
    const idsAdicionados = new Set(this.materiasPlanejadas
      .filter(item => item.id !== this.materiaEditandoId)
      .map(item => item.materia.id));
    return this.materias.filter(materia => !idsAdicionados.has(materia.id));
  }

  selecionarMateria(item: PlanejamentoMateria): void {
    if (!item.id) return;
    this.materiaSelecionada = item;
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
      ordem: this.grupoForm.controls.ordem.value
    };
    const editando = !!this.grupoEditandoId;
    this.salvandoGrupo = true;
    const request$ = this.grupoEditandoId
      ? this.service.atualizarGrupo(this.id, this.materiaSelecionada.id, this.grupoEditandoId, dados)
      : this.service.adicionarGrupo(this.id, this.materiaSelecionada.id, dados);
    request$.subscribe({
      next: () => {
        this.salvandoGrupo = false;
        this.cancelarEdicaoGrupo();
        this.carregarGrupos();
        this.message.success(`Grupo ${editando ? 'atualizado' : 'adicionado'} com sucesso.`);
      },
      error: erro => {
        console.error('Erro ao salvar grupo:', erro);
        this.salvandoGrupo = false;
        this.message.error('Não foi possível salvar o grupo.');
      }
    });
  }

  editarGrupo(grupo: PlanejamentoGrupoAssunto): void {
    if (!grupo.id) return;
    this.grupoEditandoId = grupo.id;
    this.quantidadeItensGrupoEditando = 0;
    this.grupoForm.setValue({ tipo: grupo.tipo, nome: grupo.nome || '', peso: grupo.peso ?? null, ordem: grupo.ordem ?? null });
    if (this.id && this.materiaSelecionada?.id) {
      this.service.listarItens(this.id, this.materiaSelecionada.id, grupo.id).subscribe({
        next: itens => this.quantidadeItensGrupoEditando = itens.length,
        error: erro => console.error('Erro ao verificar itens do grupo:', erro)
      });
    }
  }

  cancelarEdicaoGrupo(): void {
    this.grupoEditandoId = undefined;
    this.quantidadeItensGrupoEditando = 0;
    this.grupoForm.reset({ tipo: 'BLOCO', nome: '', peso: null, ordem: null });
  }

  excluirGrupo(grupo: PlanejamentoGrupoAssunto): void {
    if (!this.id || !this.materiaSelecionada?.id || !grupo.id || !window.confirm('Remover este grupo?')) return;
    this.service.excluirGrupo(this.id, this.materiaSelecionada.id, grupo.id).subscribe({
      next: () => { this.message.success('Grupo removido.'); this.carregarGrupos(); },
      error: erro => { console.error('Erro ao remover grupo:', erro); this.message.error('Não foi possível remover o grupo.'); }
    });
  }

  selecionarGrupo(grupo: PlanejamentoGrupoAssunto): void {
    if (!grupo.id || !this.materiaSelecionada?.materia.id) return;
    this.grupoSelecionado = grupo;
    this.cancelarEdicaoItem();
    this.carregarItens();
    this.registroService.listarAssuntosPorMateria(this.materiaSelecionada.materia.id).subscribe({
      next: assuntos => { this.assuntos = assuntos; this.cdr.detectChanges(); },
      error: erro => console.error('Erro ao carregar assuntos:', erro)
    });
  }

  salvarItem(): void {
    if (!this.id || !this.materiaSelecionada?.id || !this.grupoSelecionado?.id || this.itemForm.invalid) {
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
      ordem: this.itemForm.controls.ordem.value
    };
    const editando = !!this.itemEditandoId;
    this.salvandoItem = true;
    const request$ = this.itemEditandoId
      ? this.service.atualizarItem(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, this.itemEditandoId, dados)
      : this.service.adicionarItem(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, dados);
    request$.subscribe({
      next: () => { this.salvandoItem = false; this.cancelarEdicaoItem(); this.carregarItens(); this.message.success(`Item ${editando ? 'atualizado' : 'adicionado'} com sucesso.`); },
      error: erro => { console.error('Erro ao salvar item:', erro); this.salvandoItem = false; this.message.error('Não foi possível salvar o item.'); }
    });
  }

  editarItem(item: PlanejamentoGrupoAssuntoItem): void {
    if (!item.id) return;
    this.itemEditandoId = item.id;
    this.itemForm.setValue({ assuntoId: item.assunto.id, peso: item.peso ?? null, ordem: item.ordem ?? null });
  }

  cancelarEdicaoItem(): void {
    this.itemEditandoId = undefined;
    this.itemForm.reset({ assuntoId: null, peso: null, ordem: null });
  }

  excluirItem(item: PlanejamentoGrupoAssuntoItem): void {
    if (!this.id || !this.materiaSelecionada?.id || !this.grupoSelecionado?.id || !item.id || !window.confirm(`Remover o assunto "${item.assunto.nome}"?`)) return;
    this.service.excluirItem(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, item.id).subscribe({
      next: () => { this.message.success('Item removido.'); this.carregarItens(); },
      error: erro => { console.error('Erro ao remover item:', erro); this.message.error('Não foi possível remover o item.'); }
    });
  }

  podeAdicionarItem(): boolean {
    return this.grupoSelecionado?.tipo !== 'ASSUNTO'
      || !!this.itemEditandoId
      || this.itens.length === 0;
  }

  selecionarItem(item: PlanejamentoGrupoAssuntoItem): void {
    if (!item.id) return;
    this.itemSelecionado = item;
    this.cancelarEdicaoEtapa();
    this.carregarEtapas();
    if (!this.tiposRegistro.length) {
      this.registroService.listarTiposRegistro().subscribe({
        next: tipos => { this.tiposRegistro = tipos; this.cdr.detectChanges(); },
        error: erro => console.error('Erro ao carregar tipos de registro:', erro)
      });
    }
  }

  salvarEtapa(): void {
    if (!this.id || !this.materiaSelecionada?.id || !this.grupoSelecionado?.id || !this.itemSelecionado?.id || this.etapaForm.invalid) {
      this.etapaForm.markAllAsTouched(); return;
    }
    if (this.etapaForm.controls.concluidaManualmente.value && !this.etapaForm.controls.concluida.value) {
      this.message.warning('Uma etapa manualmente concluída também deve estar concluída.'); return;
    }
    const dados: PlanejamentoItemEtapaDTO = {
      tipoRegistroId: this.etapaForm.controls.tipoRegistroId.value!,
      ordem: this.etapaForm.controls.ordem.value,
      concluida: this.etapaForm.controls.concluida.value!,
      concluidaManualmente: this.etapaForm.controls.concluidaManualmente.value!
    };
    const editando = !!this.etapaEditandoId;
    this.salvandoEtapa = true;
    const request$ = this.etapaEditandoId
      ? this.service.atualizarEtapa(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, this.itemSelecionado.id, this.etapaEditandoId, dados)
      : this.service.adicionarEtapa(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, this.itemSelecionado.id, dados);
    request$.subscribe({
      next: () => { this.salvandoEtapa = false; this.cancelarEdicaoEtapa(); this.carregarEtapas(); this.message.success(`Etapa ${editando ? 'atualizada' : 'adicionada'} com sucesso.`); },
      error: erro => { console.error('Erro ao salvar etapa:', erro); this.salvandoEtapa = false; this.message.error('Não foi possível salvar a etapa.'); }
    });
  }

  editarEtapa(etapa: PlanejamentoItemEtapa): void {
    if (!etapa.id) return;
    this.etapaEditandoId = etapa.id;
    this.etapaForm.setValue({ tipoRegistroId: etapa.tipoRegistro.id, ordem: etapa.ordem ?? null, concluida: !!etapa.concluida, concluidaManualmente: !!etapa.concluidaManualmente });
  }

  cancelarEdicaoEtapa(): void {
    this.etapaEditandoId = undefined;
    this.etapaForm.reset({ tipoRegistroId: null, ordem: null, concluida: false, concluidaManualmente: false });
  }

  excluirEtapa(etapa: PlanejamentoItemEtapa): void {
    if (!this.id || !this.materiaSelecionada?.id || !this.grupoSelecionado?.id || !this.itemSelecionado?.id || !etapa.id || !window.confirm('Remover esta etapa?')) return;
    this.service.excluirEtapa(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, this.itemSelecionado.id, etapa.id).subscribe({
      next: () => { this.message.success('Etapa removida.'); this.carregarEtapas(); },
      error: erro => { console.error('Erro ao remover etapa:', erro); this.message.error('Não foi possível remover a etapa.'); }
    });
  }

  private carregar(): void {
    if (!this.id) return;
    this.carregando = true;
    this.service.listarTodos().pipe(finalize(() => {
      this.carregando = false;
      this.cdr.detectChanges();
    })).subscribe({
      next: planejamentos => {
        const planejamento = planejamentos.find(item => item.id === this.id);
        if (!planejamento) {
          this.message.error('Planejamento não encontrado.');
          this.voltar();
          return;
        }

        this.form.patchValue({ nome: planejamento.nome, descricao: planejamento.descricao || '' });
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao carregar planejamento:', erro);
        this.message.error('Não foi possível carregar o planejamento.');
      }
    });
  }

  private carregarMaterias(): void {
    if (!this.id) return;
    this.carregandoMaterias = true;
    this.service.listarMaterias(this.id).pipe(finalize(() => {
      this.carregandoMaterias = false;
      this.cdr.detectChanges();
    })).subscribe({
      next: materias => {
        this.materiasPlanejadas = materias;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao carregar matérias do planejamento:', erro);
        this.message.error('Não foi possível carregar as matérias do planejamento.');
      }
    });
  }

  private carregarGrupos(): void {
    if (!this.id || !this.materiaSelecionada?.id) return;
    this.carregandoGrupos = true;
    this.service.listarGrupos(this.id, this.materiaSelecionada.id).pipe(finalize(() => {
      this.carregandoGrupos = false;
      this.cdr.detectChanges();
    })).subscribe({
      next: grupos => { this.grupos = grupos; this.cdr.detectChanges(); },
      error: erro => { console.error('Erro ao carregar grupos:', erro); this.message.error('Não foi possível carregar os grupos.'); }
    });
  }

  private carregarItens(): void {
    if (!this.id || !this.materiaSelecionada?.id || !this.grupoSelecionado?.id) return;
    this.carregandoItens = true;
    this.service.listarItens(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id).pipe(finalize(() => {
      this.carregandoItens = false;
      this.cdr.detectChanges();
    })).subscribe({
      next: itens => { this.itens = itens; this.cdr.detectChanges(); },
      error: erro => { console.error('Erro ao carregar itens:', erro); this.message.error('Não foi possível carregar os itens.'); }
    });
  }

  private carregarEtapas(): void {
    if (!this.id || !this.materiaSelecionada?.id || !this.grupoSelecionado?.id || !this.itemSelecionado?.id) return;
    this.carregandoEtapas = true;
    this.service.listarEtapas(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, this.itemSelecionado.id).pipe(finalize(() => { this.carregandoEtapas = false; this.cdr.detectChanges(); })).subscribe({
      next: etapas => { this.etapas = etapas; this.cdr.detectChanges(); },
      error: erro => { console.error('Erro ao carregar etapas:', erro); this.message.error('Não foi possível carregar as etapas.'); }
    });
  }
}
