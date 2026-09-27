import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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

  planejamentos: Planejamento[] = [];
  materias: Materia[] = [];
  assuntos: Assunto[] = [];
  materialTipos: MaterialTipo[] = [];
  ciclos: Ciclo[] = [];
  itens: PlanejamentoItem[] = [];
  ciclosVinculados: PlanejamentoCiclo[] = [];

  planejamentoSelecionado?: Planejamento;
  planejamentoEditandoId: number | null = null;
  itemEditandoId: number | null = null;
  cicloSelecionadoId: number | null = null;

  carregando = true;
  carregandoDetalhes = false;
  salvandoPlanejamento = false;
  salvandoItem = false;
  vinculandoCiclo = false;

  planejamentoForm!: FormGroup;
  itemForm!: FormGroup;

  readonly statusPlanejamento = ['Ativo', 'Rascunho', 'Pausado', 'Concluido'];
  readonly statusItem = ['Pendente', 'Em andamento', 'Concluido', 'Cancelado'];
  readonly prioridades = ['Alta', 'Media', 'Baixa'];

  ngOnInit(): void {
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

        if (!this.planejamentoSelecionado && planejamentos.length) {
          this.selecionarPlanejamento(planejamentos[0]);
        }
      },
      error: erro => {
        console.error('Erro ao carregar planejamentos:', erro);
        this.carregando = false;
        this.message.error('Não foi possível carregar os planejamentos.');
      }
    });
  }

  selecionarPlanejamento(planejamento: Planejamento): void {
    if (!planejamento.id) return;

    this.planejamentoSelecionado = planejamento;
    this.planejamentoEditandoId = null;
    this.itemEditandoId = null;
    this.itemForm.reset({ prioridade: 'Media', status: 'Pendente' });
    this.carregarDetalhes(planejamento.id);
  }

  carregarDetalhes(planejamentoId: number): void {
    this.carregandoDetalhes = true;
    this.planejamentoService.listarItens(planejamentoId).subscribe({
      next: itens => {
        this.itens = itens;
        this.carregandoDetalhes = false;
      },
      error: erro => {
        console.error('Erro ao carregar itens:', erro);
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
      status: planejamento.status || 'Ativo',
      dataFinalizacao: planejamento.dataFinalizacao
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

  aoSelecionarMateria(materiaId: number): void {
    this.assuntos = [];
    this.itemForm.patchValue({ assuntoId: null });

    if (!materiaId) return;

    this.registroService.listarAssuntosPorMateria(materiaId).subscribe({
      next: assuntos => this.assuntos = assuntos,
      error: erro => console.error('Erro ao carregar assuntos:', erro)
    });
  }

  salvarItem(): void {
    if (!this.planejamentoSelecionado?.id) {
      this.message.warning('Selecione um planejamento antes de adicionar itens.');
      return;
    }

    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      this.message.warning('Informe a matéria do item.');
      return;
    }

    this.salvandoItem = true;
    const value = this.itemForm.value;
    const payload: PlanejamentoItem = {
      materia: { id: value.materiaId, nome: '' },
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
      : this.planejamentoService.criarItem(this.planejamentoSelecionado.id, payload);

    request$.subscribe({
      next: () => {
        this.salvandoItem = false;
        this.itemEditandoId = null;
        this.itemForm.reset({ prioridade: 'Media', status: 'Pendente' });
        this.assuntos = [];
        this.message.success('Item salvo com sucesso.');
        this.carregarDetalhes(this.planejamentoSelecionado!.id!);
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
      materiaId: item.materia?.id,
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

    if (item.materia?.id) {
      this.registroService.listarAssuntosPorMateria(item.materia.id).subscribe({
        next: assuntos => this.assuntos = assuntos
      });
    }
  }

  cancelarEdicaoItem(): void {
    this.itemEditandoId = null;
    this.assuntos = [];
    this.itemForm.reset({ prioridade: 'Media', status: 'Pendente' });
  }

  excluirItem(item: PlanejamentoItem): void {
    if (!item.id || !this.planejamentoSelecionado?.id || !window.confirm('Apagar este item do planejamento?')) return;

    this.planejamentoService.excluirItem(item.id).subscribe({
      next: () => {
        this.message.success('Item apagado.');
        this.carregarDetalhes(this.planejamentoSelecionado!.id!);
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

  private criarForms(): void {
    this.planejamentoForm = this.fb.group({
      nome: [null, [Validators.required]],
      descricao: [null],
      dataInicio: [null],
      dataPrevista: [null],
      status: ['Ativo'],
      dataFinalizacao: [null]
    });

    this.itemForm = this.fb.group({
      materiaId: [null, [Validators.required]],
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
