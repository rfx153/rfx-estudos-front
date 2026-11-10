import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { forkJoin, map } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Ciclo, CicloItem, CicloService } from '../../services/ciclo.service';
import { Materia, MateriaService } from '../../services/materia.service';
import {
  Planejamento,
  PlanejamentoGrupoMateria,
  PlanejamentoService,
} from '../../services/planejamento.service';

type CicloItemTipo = 'MATERIA' | 'GRUPO';

interface GrupoPlanejamentoOpcao {
  grupo: PlanejamentoGrupoMateria;
  planejamento: Planejamento;
}

@Component({
  selector: 'app-ciclos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, NzButtonModule],
  templateUrl: './ciclos.html',
  styleUrl: './ciclos.css',
})
export class CiclosComponent implements OnInit {
  private readonly cicloService = inject(CicloService);
  private readonly materiaService = inject(MateriaService);
  private readonly planejamentoService = inject(PlanejamentoService);
  private readonly fb = inject(FormBuilder);
  private readonly message = inject(NzMessageService);
  private readonly cdr = inject(ChangeDetectorRef);

  ciclos: Ciclo[] = [];
  materias: Materia[] = [];
  gruposPlanejamento: GrupoPlanejamentoOpcao[] = [];
  itensDoCiclo: CicloItem[] = [];
  cicloSelecionado?: Ciclo;
  modoNovo = false;
  carregando = true;
  carregandoItens = false;
  salvandoCiclo = false;
  adicionandoItem = false;
  excluindoCiclo = false;
  reordenando = false;
  reiniciando = false;

  readonly cicloForm = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(150)]],
    observacoes: [''],
    ativo: [true],
  });

  readonly itemForm = this.fb.group({
    tipo: ['MATERIA' as CicloItemTipo, Validators.required],
    itemId: [null as number | null, Validators.required],
  });

  ngOnInit(): void {
    forkJoin({
      ciclos: this.cicloService.listarTodos(),
      materias: this.materiaService.listarTodas(),
      planejamentos: this.planejamentoService.listarTodos(),
    }).pipe(
      finalize(() => {
        this.carregando = false;
        this.cdr.detectChanges();
      }),
    ).subscribe({
      next: ({ ciclos, materias, planejamentos }) => {
        this.ciclos = this.ordenarCiclos(ciclos);
        this.materias = [...materias].sort((a, b) => a.nome.localeCompare(b.nome));
        this.carregarGruposPlanejamento(planejamentos);

        if (this.ciclos.length) {
          this.selecionarCiclo(this.ciclos[0]);
        } else {
          this.novoCiclo();
        }
      },
      error: (erro) => {
        console.error('Erro ao carregar ciclos:', erro);
        this.message.error('Não foi possível carregar os ciclos.');
      },
    });
  }

  novoCiclo(): void {
    this.modoNovo = true;
    this.cicloSelecionado = undefined;
    this.itensDoCiclo = [];
    this.cicloForm.reset({ nome: '', observacoes: '', ativo: true });
  }

  selecionarCiclo(ciclo: Ciclo): void {
    if (!ciclo.id || this.salvandoCiclo) return;

    this.modoNovo = false;
    this.cicloSelecionado = ciclo;
    this.cicloForm.reset({
      nome: ciclo.nome,
      observacoes: ciclo.observacoes || '',
      ativo: ciclo.ativo,
    });
    this.carregarItens(ciclo.id);
  }

  salvarCiclo(): void {
    if (this.cicloForm.invalid) {
      this.cicloForm.markAllAsTouched();
      return;
    }

    const dados: Ciclo = {
      nome: this.cicloForm.controls.nome.value!.trim(),
      observacoes: this.cicloForm.controls.observacoes.value?.trim() || null,
      ativo: Boolean(this.cicloForm.controls.ativo.value),
    };

    if (!dados.nome) {
      this.cicloForm.controls.nome.setErrors({ required: true });
      return;
    }

    this.salvandoCiclo = true;
    const requisicao = this.cicloSelecionado?.id
      ? this.cicloService.atualizar(this.cicloSelecionado.id, dados)
      : this.cicloService.criar(dados);

    requisicao.pipe(
      finalize(() => {
        this.salvandoCiclo = false;
        this.cdr.detectChanges();
      }),
    ).subscribe({
      next: cicloSalvo => {
        const indice = this.ciclos.findIndex(item => item.id === cicloSalvo.id);
        if (indice >= 0) {
          this.ciclos[indice] = cicloSalvo;
        } else {
          this.ciclos.push(cicloSalvo);
        }
        this.ciclos = this.ordenarCiclos(this.ciclos);
        this.message.success(this.modoNovo ? 'Ciclo criado.' : 'Ciclo atualizado.');
        this.selecionarCiclo(cicloSalvo);
      },
      error: erro => {
        console.error('Erro ao salvar ciclo:', erro);
        this.message.error('Não foi possível salvar o ciclo.');
      },
    });
  }

  excluirCiclo(): void {
    const ciclo = this.cicloSelecionado;
    if (!ciclo?.id || !window.confirm(`Apagar o ciclo "${ciclo.nome}"?`)) return;

    this.excluindoCiclo = true;
    this.cicloService.excluir(ciclo.id).pipe(
      finalize(() => {
        this.excluindoCiclo = false;
        this.cdr.detectChanges();
      }),
    ).subscribe({
      next: () => {
        this.ciclos = this.ciclos.filter(item => item.id !== ciclo.id);
        this.message.success('Ciclo removido.');
        if (this.ciclos.length) {
          this.selecionarCiclo(this.ciclos[0]);
        } else {
          this.novoCiclo();
        }
      },
      error: erro => {
        console.error('Erro ao excluir ciclo:', erro);
        this.message.error('Não foi possível remover o ciclo.');
      },
    });
  }

  adicionarItem(): void {
    const cicloId = this.cicloSelecionado?.id;
    const tipo = this.itemForm.controls.tipo.value;
    const itemId = this.itemForm.controls.itemId.value;
    if (!cicloId || !tipo || !itemId) {
      this.itemForm.markAllAsTouched();
      return;
    }

    if (!this.itemDisponivel(tipo, itemId)) {
      this.message.warning(tipo === 'MATERIA'
        ? 'Esta matéria já faz parte do ciclo.'
        : 'Este bloco já faz parte do ciclo.');
      return;
    }

    this.adicionandoItem = true;
    this.cicloService.adicionarItem(cicloId, {
      materiaId: tipo === 'MATERIA' ? itemId : null,
      planejamentoGrupoMateriaId: tipo === 'GRUPO' ? itemId : null,
      ordem: this.itensDoCiclo.length + 1,
      ativo: true,
    }).pipe(
      finalize(() => {
        this.adicionandoItem = false;
        this.cdr.detectChanges();
      }),
    ).subscribe({
      next: item => {
        this.itensDoCiclo = [...this.itensDoCiclo, item].sort((a, b) => a.ordem - b.ordem);
        this.itemForm.reset({ tipo, itemId: null });
        this.message.success(`${tipo === 'MATERIA' ? 'Matéria' : 'Bloco'} adicionado ao ciclo.`);
      },
      error: erro => {
        console.error('Erro ao adicionar item ao ciclo:', erro);
        this.message.error('Não foi possível adicionar o item.');
      },
    });
  }

  removerItem(item: CicloItem): void {
    const cicloId = this.cicloSelecionado?.id;
    if (!cicloId || !item.id || !window.confirm(`Remover "${this.nomeItem(item)}" deste ciclo?`)) return;

    this.cicloService.excluirItem(cicloId, item.id).subscribe({
      next: () => {
        this.itensDoCiclo = this.itensDoCiclo
          .filter(cicloItem => cicloItem.id !== item.id)
          .map((cicloItem, indice) => ({ ...cicloItem, ordem: indice + 1 }));
        this.message.success('Item removido do ciclo.');
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao remover item do ciclo:', erro);
        this.message.error('Não foi possível remover o item.');
      },
    });
  }

  alternarItem(item: CicloItem): void {
    const cicloId = this.cicloSelecionado?.id;
    if (!cicloId || !item.id) return;

    this.cicloService.atualizarItem(cicloId, item.id, {
      materiaId: item.materia?.id ?? null,
      planejamentoGrupoMateriaId: item.planejamentoGrupoMateria?.id ?? null,
      ordem: item.ordem,
      ativo: !item.ativo,
    }).subscribe({
      next: atualizado => {
        this.itensDoCiclo = this.itensDoCiclo.map(cicloItem =>
          cicloItem.id === atualizado.id ? atualizado : cicloItem,
        );
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao alterar item do ciclo:', erro);
        this.message.error('Não foi possível alterar o item.');
      },
    });
  }

  moverItem(indice: number, deslocamento: -1 | 1): void {
    const destino = indice + deslocamento;
    const cicloId = this.cicloSelecionado?.id;
    if (!cicloId || destino < 0 || destino >= this.itensDoCiclo.length || this.reordenando) return;

    const anterior = [...this.itensDoCiclo];
    const reordenadas = [...this.itensDoCiclo];
    [reordenadas[indice], reordenadas[destino]] = [reordenadas[destino], reordenadas[indice]];
    this.itensDoCiclo = reordenadas.map((item, posicao) => ({ ...item, ordem: posicao + 1 }));
    this.reordenando = true;

    this.cicloService.reordenarItens(cicloId, this.itensDoCiclo).pipe(
      finalize(() => {
        this.reordenando = false;
        this.cdr.detectChanges();
      }),
    ).subscribe({
      next: itens => {
        this.itensDoCiclo = [...itens].sort((a, b) => a.ordem - b.ordem);
      },
      error: erro => {
        this.itensDoCiclo = anterior;
        console.error('Erro ao reordenar itens:', erro);
        this.message.error('Não foi possível alterar a ordem dos itens.');
      },
    });
  }

  reiniciarCiclo(): void {
    const cicloId = this.cicloSelecionado?.id;
    if (!cicloId || this.reiniciando || !window.confirm('Iniciar uma nova rodada e desmarcar todos os itens?')) {
      return;
    }

    this.reiniciando = true;
    this.cicloService.reiniciar(cicloId).pipe(
      finalize(() => {
        this.reiniciando = false;
        this.cdr.detectChanges();
      }),
    ).subscribe({
      next: itens => {
        this.itensDoCiclo = [...itens].sort((a, b) => a.ordem - b.ordem);
        this.message.success('Nova rodada do ciclo iniciada.');
      },
      error: erro => {
        console.error('Erro ao reiniciar ciclo:', erro);
        this.message.error('Não foi possível reiniciar o ciclo.');
      },
    });
  }

  materiaDisponivel(materia: Materia): boolean {
    return !!materia.id && this.itemDisponivel('MATERIA', materia.id);
  }

  grupoDisponivel(grupo: PlanejamentoGrupoMateria): boolean {
    return !!grupo.id && this.itemDisponivel('GRUPO', grupo.id);
  }

  nomeItem(item: CicloItem): string {
    return item.materia?.nome ?? item.planejamentoGrupoMateria?.nome ?? 'Item sem nome';
  }

  tipoItem(item: CicloItem): 'Matéria' | 'Bloco' {
    return item.materia ? 'Matéria' : 'Bloco';
  }

  conclusaoItem(item: CicloItem): string {
    const registro = item.registroConclusao;
    if (!registro?.dataEstudo || !registro.tempoEstudado) return '';
    const [ano, mes, dia] = registro.dataEstudo.substring(0, 10).split('-');
    return `Feito em ${dia}/${mes}/${ano} · ${registro.tempoEstudado.substring(0, 5)} de estudo`;
  }

  aoTrocarTipoItem(): void {
    this.itemForm.controls.itemId.reset();
  }

  private itemDisponivel(tipo: CicloItemTipo, id: number): boolean {
    return !this.itensDoCiclo.some(item => tipo === 'MATERIA'
      ? item.materia?.id === id
      : item.planejamentoGrupoMateria?.id === id);
  }

  private carregarItens(cicloId: number): void {
    this.carregandoItens = true;
    this.itensDoCiclo = [];
    this.cicloService.listarItens(cicloId).pipe(
      finalize(() => {
        this.carregandoItens = false;
        this.cdr.detectChanges();
      }),
    ).subscribe({
      next: itens => {
        if (this.cicloSelecionado?.id === cicloId) {
          this.itensDoCiclo = [...itens].sort((a, b) => a.ordem - b.ordem);
        }
      },
      error: erro => {
        console.error('Erro ao carregar itens do ciclo:', erro);
        this.message.error('Não foi possível carregar os itens do ciclo.');
      },
    });
  }

  private carregarGruposPlanejamento(planejamentos: Planejamento[]): void {
    const validos = planejamentos.filter(
      (planejamento): planejamento is Planejamento & { id: number } => !!planejamento.id,
    );
    if (!validos.length) {
      this.gruposPlanejamento = [];
      return;
    }

    forkJoin(validos.map(planejamento =>
      this.planejamentoService.listarGruposMaterias(planejamento.id).pipe(
        map(grupos => grupos.map(grupo => ({ grupo, planejamento }))),
      ),
    )).subscribe({
      next: grupos => {
        this.gruposPlanejamento = grupos.flat().sort((a, b) =>
          a.planejamento.nome.localeCompare(b.planejamento.nome)
          || a.grupo.nome.localeCompare(b.grupo.nome),
        );
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao carregar blocos dos planejamentos:', erro);
        this.message.error('Não foi possível carregar os blocos dos planejamentos.');
      },
    });
  }

  private ordenarCiclos(ciclos: Ciclo[]): Ciclo[] {
    return [...ciclos].sort((a, b) => a.nome.localeCompare(b.nome));
  }
}
