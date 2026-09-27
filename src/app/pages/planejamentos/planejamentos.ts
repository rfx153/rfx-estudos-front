import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { Materia, MateriaService } from '../../services/materia.service';
import { Assunto, MaterialTipo, RegistroService } from '../../services/registro.service';
import {
  Ciclo,
  Planejamento,
  PlanejamentoCiclo,
  PlanejamentoItem,
  PlanejamentoMateria,
  PlanejamentoService
} from '../../services/planejamento.service';

@Component({
  selector: 'app-planejamentos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzTagModule
  ],
  templateUrl: './planejamentos.html',
  styleUrl: './planejamentos.css'
})
export class PlanejamentosComponent implements OnInit {
  private fb = inject(FormBuilder);
  private message = inject(NzMessageService);
  private materiaService = inject(MateriaService);
  private planejamentoService = inject(PlanejamentoService);
  private registroService = inject(RegistroService);
  router = inject(Router);
  private route = inject(ActivatedRoute);

  modoDetalhe = false;

  planejamentos: Planejamento[] = [];
  materias: Materia[] = [];
  assuntos: Assunto[] = [];
  materialTipos: MaterialTipo[] = [];
  ciclos: Ciclo[] = [];
  planejamentoMaterias: PlanejamentoMateria[] = [];
  itens: PlanejamentoItem[] = [];
  ciclosVinculados: PlanejamentoCiclo[] = [];

  planejamentoSelecionado?: Planejamento;
  planejamentoMateriaSelecionada?: PlanejamentoMateria;
  planejamentoEditandoId: number | null = null;
  materiaEditandoId: number | null = null;
  itemEditandoId: number | null = null;
  cicloSelecionadoId: number | null = null;

  carregando = true;
  carregandoDetalhes = false;
  carregandoItens = false;
  salvandoPlanejamento = false;
  salvandoMateria = false;
  salvandoItem = false;
  vinculandoCiclo = false;

  planejamentoForm!: FormGroup;
  materiaForm!: FormGroup;
  itemForm!: FormGroup;

  readonly statusPlanejamento = ['Ativo', 'Rascunho', 'Pausado', 'Concluido'];
  readonly statusItem = ['Pendente', 'Em andamento', 'Concluido', 'Cancelado'];
  readonly prioridades = ['Alta', 'Media', 'Baixa'];

  ngOnInit(): void {
    this.modoDetalhe = this.route.snapshot.url.length > 1;
    this.criarForms();
    this.carregarDadosBase();
    this.carregarPlanejamentos();
  }

  carregarDadosBase(): void {
    this.materiaService.listarTodas().subscribe({
      next: materias => this.materias = materias,
      error: erro => console.error('Erro ao carregar matérias:', erro)
    });

    this.registroService.listarTiposMaterial().subscribe({
      next: tipos => this.materialTipos = tipos,
      error: erro => console.error('Erro ao carregar tipos de material:', erro)
    });

    this.planejamentoService.listarCiclos().subscribe({
      next: ciclos => this.ciclos = ciclos,
      error: erro => console.error('Erro ao carregar ciclos:', erro)
    });
  }

  carregarPlanejamentos(): void {
    this.carregando = true;
    this.planejamentoService.listarTodos().subscribe({
      next: planejamentos => {
        this.planejamentos = planejamentos;
        this.carregando = false;

        if (this.modoDetalhe) {
          const id = this.route.snapshot.paramMap.get('id');
          if (id) {
            const planejamento = planejamentos.find(item => item.id === Number(id));
            if (planejamento) this.selecionarPlanejamento(planejamento);
          } else {
            this.planejamentoForm.reset({ status: 'Ativo' });
          }
        }
      },
      error: erro => {
        console.error('Erro ao carregar planejamentos:', erro);
        this.carregando = false;
        this.message.error('Não foi possível carregar os planejamentos.');
      }
    });
  }

  novoPlanejamento(): void {
    this.router.navigate(['/planejamentos/novo']);
  }

  selecionarPlanejamento(planejamento: Planejamento): void {
    if (!planejamento.id) return;
    this.router.navigate(['/planejamentos', planejamento.id]);

    this.planejamentoSelecionado = planejamento;
    this.planejamentoMateriaSelecionada = undefined;
    this.planejamentoEditandoId = null;
    this.materiaEditandoId = null;
    this.itemEditandoId = null;
    this.itens = [];
    this.assuntos = [];
    this.materiaForm.reset({ prioridade: 'Media', status: 'Pendente' });
    this.itemForm.reset({ prioridade: 'Media', status: 'Pendente' });
    this.carregarDetalhes(planejamento.id);
  }

  carregarDetalhes(planejamentoId: number): void {
    this.carregandoDetalhes = true;
    this.planejamentoService.listarMaterias(planejamentoId).subscribe({
      next: planejamentoMaterias => {
        this.planejamentoMaterias = planejamentoMaterias;
        this.carregandoDetalhes = false;

        if (!this.planejamentoMateriaSelecionada && planejamentoMaterias.length) {
          this.selecionarMateriaPlanejada(planejamentoMaterias[0]);
        }
      },
      error: erro => {
        console.error('Erro ao carregar matérias do planejamento:', erro);
        this.carregandoDetalhes = false;
      }
    });

    this.planejamentoService.listarCiclosDoPlanejamento(planejamentoId).subscribe({
      next: vinculos => this.ciclosVinculados = vinculos,
      error: erro => console.error('Erro ao carregar ciclos vinculados:', erro)
    });
  }

  salvarPlanejamento(): void {
    if (this.planejamentoForm.invalid) {
      this.planejamentoForm.markAllAsTouched();
      this.message.warning('Informe ao menos o nome do planejamento.');
      return;
    }

    this.salvandoPlanejamento = true;
    const payload = this.planejamentoForm.value as Planejamento;
    const request$ = this.planejamentoEditandoId
      ? this.planejamentoService.atualizar(this.planejamentoEditandoId, payload)
      : this.planejamentoService.criar(payload);

    request$.subscribe({
      next: planejamento => {
        this.salvandoPlanejamento = false;
        this.planejamentoForm.reset({ status: 'Ativo' });
        this.planejamentoEditandoId = null;
        this.message.success('Planejamento salvo com sucesso.');
        this.planejamentoSelecionado = planejamento;
        this.carregarPlanejamentos();
        if (planejamento.id) this.router.navigate(['/planejamentos', planejamento.id]);
      },
      error: erro => {
        console.error('Erro ao salvar planejamento:', erro);
        this.salvandoPlanejamento = false;
        this.message.error('Não foi possível salvar o planejamento.');
      }
    });
  }

  editarPlanejamento(planejamento: Planejamento): void {
    if (!planejamento.id) return;

    this.planejamentoEditandoId = planejamento.id;
    this.planejamentoForm.patchValue({
      nome: planejamento.nome,
      descricao: planejamento.descricao,
      dataInicio: planejamento.dataInicio,
      dataPrevista: planejamento.dataPrevista,
      status: planejamento.status || 'Ativo'
    });
  }

  cancelarEdicaoPlanejamento(): void {
    this.planejamentoEditandoId = null;
    this.planejamentoForm.reset({ status: 'Ativo' });
  }

  excluirPlanejamento(planejamento: Planejamento): void {
    if (!planejamento.id || !window.confirm(`Apagar o planejamento "${planejamento.nome}"?`)) return;

    this.planejamentoService.excluir(planejamento.id).subscribe({
      next: () => {
        this.message.success('Planejamento apagado.');
        if (this.planejamentoSelecionado?.id === planejamento.id) {
          this.planejamentoSelecionado = undefined;
          this.planejamentoMaterias = [];
          this.itens = [];
          this.ciclosVinculados = [];
        }
        this.carregarPlanejamentos();
      },
      error: erro => {
        console.error('Erro ao apagar planejamento:', erro);
        this.message.error('Não foi possível apagar o planejamento.');
      }
    });
  }

  salvarMateriaPlanejada(): void {
    if (!this.planejamentoSelecionado?.id) {
      this.message.warning('Selecione um planejamento antes de adicionar matérias.');
      return;
    }

    if (this.materiaForm.invalid) {
      this.materiaForm.markAllAsTouched();
      this.message.warning('Selecione uma matéria.');
      return;
    }

    this.salvandoMateria = true;
    const value = this.materiaForm.value;
    const payload: PlanejamentoMateria = {
      materia: { id: value.materiaId, nome: '' },
      prioridade: value.prioridade,
      dataPrevista: value.dataPrevista,
      status: value.status,
      dataFinalizacao: value.dataFinalizacao,
      ordem: value.ordem,
      observacoes: value.observacoes
    };

    const request$ = this.materiaEditandoId
      ? this.planejamentoService.atualizarMateria(this.materiaEditandoId, payload)
      : this.planejamentoService.criarMateria(this.planejamentoSelecionado.id, payload);

    request$.subscribe({
      next: planejamentoMateria => {
        this.salvandoMateria = false;
        this.materiaEditandoId = null;
        this.materiaForm.reset({ prioridade: 'Media', status: 'Pendente' });
        this.message.success('Matéria salva no planejamento.');
        this.planejamentoMateriaSelecionada = planejamentoMateria;
        this.carregarDetalhes(this.planejamentoSelecionado!.id!);
        this.carregarItensDaMateria(planejamentoMateria);
      },
      error: erro => {
        console.error('Erro ao salvar matéria do planejamento:', erro);
        this.salvandoMateria = false;
        this.message.error('Não foi possível salvar a matéria. Verifique se ela já foi adicionada.');
      }
    });
  }

  selecionarMateriaPlanejada(planejamentoMateria: PlanejamentoMateria): void {
    this.planejamentoMateriaSelecionada = planejamentoMateria;
    this.itemEditandoId = null;
    this.itemForm.reset({ prioridade: 'Media', status: 'Pendente' });
    this.carregarAssuntosDaMateria(planejamentoMateria.materia?.id);
    this.carregarItensDaMateria(planejamentoMateria);
  }

  editarMateriaPlanejada(planejamentoMateria: PlanejamentoMateria): void {
    if (!planejamentoMateria.id) return;

    this.materiaEditandoId = planejamentoMateria.id;
    this.materiaForm.patchValue({
      materiaId: planejamentoMateria.materia?.id,
      prioridade: planejamentoMateria.prioridade || 'Media',
      dataPrevista: planejamentoMateria.dataPrevista,
      status: planejamentoMateria.status || 'Pendente',
      dataFinalizacao: planejamentoMateria.dataFinalizacao,
      ordem: planejamentoMateria.ordem,
      observacoes: planejamentoMateria.observacoes
    });
  }

  cancelarEdicaoMateria(): void {
    this.materiaEditandoId = null;
    this.materiaForm.reset({ prioridade: 'Media', status: 'Pendente' });
  }

  excluirMateriaPlanejada(planejamentoMateria: PlanejamentoMateria): void {
    if (!planejamentoMateria.id || !this.planejamentoSelecionado?.id || !window.confirm('Remover esta matéria do planejamento?')) return;

    this.planejamentoService.excluirMateria(planejamentoMateria.id).subscribe({
      next: () => {
        this.message.success('Matéria removida do planejamento.');
        if (this.planejamentoMateriaSelecionada?.id === planejamentoMateria.id) {
          this.planejamentoMateriaSelecionada = undefined;
          this.itens = [];
        }
        this.carregarDetalhes(this.planejamentoSelecionado!.id!);
      },
      error: erro => {
        console.error('Erro ao remover matéria:', erro);
        this.message.error('Não foi possível remover a matéria.');
      }
    });
  }

  carregarItensDaMateria(planejamentoMateria: PlanejamentoMateria): void {
    if (!planejamentoMateria.id) return;

    this.carregandoItens = true;
    this.planejamentoService.listarItensDaMateria(planejamentoMateria.id).subscribe({
      next: itens => {
        this.itens = itens;
        this.carregandoItens = false;
      },
      error: erro => {
        console.error('Erro ao carregar itens da matéria:', erro);
        this.carregandoItens = false;
      }
    });
  }

  salvarItem(): void {
    if (!this.planejamentoMateriaSelecionada?.id) {
      this.message.warning('Selecione uma matéria do planejamento antes de adicionar itens.');
      return;
    }

    this.salvandoItem = true;
    const value = this.itemForm.value;
    const payload: PlanejamentoItem = {
      planejamentoMateria: this.planejamentoMateriaSelecionada,
      materia: this.planejamentoMateriaSelecionada.materia,
      assunto: value.assuntoId ? { id: value.assuntoId, nome: '' } : null,
      materialTipo: value.materialTipoId ? { id: value.materialTipoId, nome: '' } : null,
      materialNome: value.materialNome,
      prioridade: value.prioridade,
      meta: value.meta,
      dataPrevista: value.dataPrevista,
      linkDocumento: value.linkDocumento,
      status: value.status,
      dataFinalizacao: value.dataFinalizacao,
      ordem: value.ordem,
      observacoes: value.observacoes
    };

    const request$ = this.itemEditandoId
      ? this.planejamentoService.atualizarItem(this.itemEditandoId, payload)
      : this.planejamentoService.criarItemDaMateria(this.planejamentoMateriaSelecionada.id, payload);

    request$.subscribe({
      next: () => {
        this.salvandoItem = false;
        this.itemEditandoId = null;
        this.itemForm.reset({ prioridade: 'Media', status: 'Pendente' });
        this.message.success('Item salvo com sucesso.');
        this.carregarItensDaMateria(this.planejamentoMateriaSelecionada!);
      },
      error: erro => {
        console.error('Erro ao salvar item:', erro);
        this.salvandoItem = false;
        this.message.error('Não foi possível salvar o item.');
      }
    });
  }

  editarItem(item: PlanejamentoItem): void {
    if (!item.id) return;

    this.itemEditandoId = item.id;
    this.itemForm.patchValue({
      assuntoId: item.assunto?.id,
      materialTipoId: item.materialTipo?.id,
      materialNome: item.materialNome,
      prioridade: item.prioridade || 'Media',
      meta: item.meta,
      dataPrevista: item.dataPrevista,
      linkDocumento: item.linkDocumento,
      status: item.status || 'Pendente',
      dataFinalizacao: item.dataFinalizacao,
      ordem: item.ordem,
      observacoes: item.observacoes
    });
  }

  cancelarEdicaoItem(): void {
    this.itemEditandoId = null;
    this.itemForm.reset({ prioridade: 'Media', status: 'Pendente' });
  }

  excluirItem(item: PlanejamentoItem): void {
    if (!item.id || !this.planejamentoMateriaSelecionada || !window.confirm('Apagar este item da matéria?')) return;

    this.planejamentoService.excluirItem(item.id).subscribe({
      next: () => {
        this.message.success('Item apagado.');
        this.carregarItensDaMateria(this.planejamentoMateriaSelecionada!);
      },
      error: erro => {
        console.error('Erro ao apagar item:', erro);
        this.message.error('Não foi possível apagar o item.');
      }
    });
  }

  vincularCiclo(): void {
    if (!this.planejamentoSelecionado?.id || !this.cicloSelecionadoId) return;

    this.vinculandoCiclo = true;
    this.planejamentoService.vincularCiclo(this.planejamentoSelecionado.id, this.cicloSelecionadoId).subscribe({
      next: () => {
        this.vinculandoCiclo = false;
        this.cicloSelecionadoId = null;
        this.message.success('Ciclo vinculado.');
        this.carregarDetalhes(this.planejamentoSelecionado!.id!);
      },
      error: erro => {
        console.error('Erro ao vincular ciclo:', erro);
        this.vinculandoCiclo = false;
        this.message.error('Não foi possível vincular o ciclo.');
      }
    });
  }

  desvincularCiclo(vinculo: PlanejamentoCiclo): void {
    if (!this.planejamentoSelecionado?.id || !vinculo.ciclo?.id) return;

    this.planejamentoService.desvincularCiclo(this.planejamentoSelecionado.id, vinculo.ciclo.id).subscribe({
      next: () => {
        this.message.success('Ciclo removido do planejamento.');
        this.carregarDetalhes(this.planejamentoSelecionado!.id!);
      },
      error: erro => {
        console.error('Erro ao desvincular ciclo:', erro);
        this.message.error('Não foi possível remover o ciclo.');
      }
    });
  }

  ciclosDisponiveis(): Ciclo[] {
    const vinculados = new Set(this.ciclosVinculados.map(vinculo => vinculo.ciclo?.id));
    return this.ciclos.filter(ciclo => !vinculados.has(ciclo.id));
  }

  materiasDisponiveis(): Materia[] {
    const vinculadas = new Set(this.planejamentoMaterias.map(item => item.materia?.id));
    const materiaEmEdicao = this.planejamentoMaterias.find(item => item.id === this.materiaEditandoId)?.materia?.id;
    return this.materias.filter(materia => !vinculadas.has(materia.id) || materia.id === materiaEmEdicao);
  }

  corStatus(status?: string): string {
    const cores: Record<string, string> = {
      Ativo: 'green',
      Rascunho: 'blue',
      Pausado: 'default',
      Concluido: 'purple',
      Pendente: 'default',
      'Em andamento': 'blue',
      Cancelado: 'red'
    };

    return cores[status || ''] || 'default';
  }

  corPrioridade(prioridade?: string): string {
    const cores: Record<string, string> = { Alta: 'red', Media: 'blue', Baixa: 'default' };
    return cores[prioridade || ''] || 'default';
  }

  trackById(_: number, item: { id?: number }): number | undefined {
    return item.id;
  }

  private carregarAssuntosDaMateria(materiaId?: number): void {
    this.assuntos = [];

    if (!materiaId) return;

    this.registroService.listarAssuntosPorMateria(materiaId).subscribe({
      next: assuntos => this.assuntos = assuntos,
      error: erro => console.error('Erro ao carregar assuntos:', erro)
    });
  }

  private criarForms(): void {
    this.planejamentoForm = this.fb.group({
      nome: [null, [Validators.required]],
      descricao: [null],
      dataInicio: [null],
      dataPrevista: [null],
      status: ['Ativo']
    });

    this.materiaForm = this.fb.group({
      materiaId: [null, [Validators.required]],
      prioridade: ['Media'],
      dataPrevista: [null],
      status: ['Pendente'],
      dataFinalizacao: [null],
      ordem: [null],
      observacoes: [null]
    });

    this.itemForm = this.fb.group({
      assuntoId: [null],
      materialTipoId: [null],
      materialNome: [null],
      prioridade: ['Media'],
      meta: [null],
      dataPrevista: [null],
      linkDocumento: [null],
      status: ['Pendente'],
      dataFinalizacao: [null],
      ordem: [null],
      observacoes: [null]
    });
  }
}
