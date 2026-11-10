import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Ciclo, CicloMateria, CicloService } from '../../services/ciclo.service';
import { Materia, MateriaService } from '../../services/materia.service';

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
  private readonly fb = inject(FormBuilder);
  private readonly message = inject(NzMessageService);
  private readonly cdr = inject(ChangeDetectorRef);

  ciclos: Ciclo[] = [];
  materias: Materia[] = [];
  materiasDoCiclo: CicloMateria[] = [];
  cicloSelecionado?: Ciclo;
  modoNovo = false;
  carregando = true;
  carregandoMaterias = false;
  salvandoCiclo = false;
  adicionandoMateria = false;
  excluindoCiclo = false;
  reordenando = false;

  readonly cicloForm = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(150)]],
    observacoes: [''],
    ativo: [true],
  });

  readonly materiaForm = this.fb.group({
    materiaId: [null as number | null, Validators.required],
  });

  ngOnInit(): void {
    forkJoin({
      ciclos: this.cicloService.listarTodos(),
      materias: this.materiaService.listarTodas(),
    }).pipe(
      finalize(() => {
        this.carregando = false;
        this.cdr.detectChanges();
      }),
    ).subscribe({
      next: ({ ciclos, materias }) => {
        this.ciclos = this.ordenarCiclos(ciclos);
        this.materias = [...materias].sort((a, b) => a.nome.localeCompare(b.nome));

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
    this.materiasDoCiclo = [];
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
    this.carregarMaterias(ciclo.id);
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

  adicionarMateria(): void {
    const cicloId = this.cicloSelecionado?.id;
    const materiaId = this.materiaForm.controls.materiaId.value;
    if (!cicloId || !materiaId) {
      this.materiaForm.markAllAsTouched();
      return;
    }

    if (this.materiasDoCiclo.some(item => item.materia.id === materiaId)) {
      this.message.warning('Esta matéria já faz parte do ciclo.');
      return;
    }

    this.adicionandoMateria = true;
    this.cicloService.adicionarMateria(cicloId, {
      materiaId,
      ordem: this.materiasDoCiclo.length + 1,
      ativo: true,
    }).pipe(
      finalize(() => {
        this.adicionandoMateria = false;
        this.cdr.detectChanges();
      }),
    ).subscribe({
      next: item => {
        this.materiasDoCiclo = [...this.materiasDoCiclo, item].sort((a, b) => a.ordem - b.ordem);
        this.materiaForm.reset({ materiaId: null });
        this.message.success('Matéria adicionada ao ciclo.');
      },
      error: erro => {
        console.error('Erro ao adicionar matéria ao ciclo:', erro);
        this.message.error('Não foi possível adicionar a matéria.');
      },
    });
  }

  removerMateria(item: CicloMateria): void {
    const cicloId = this.cicloSelecionado?.id;
    if (!cicloId || !item.id || !window.confirm(`Remover "${item.materia.nome}" deste ciclo?`)) return;

    this.cicloService.excluirMateria(cicloId, item.id).subscribe({
      next: () => {
        this.materiasDoCiclo = this.materiasDoCiclo
          .filter(materia => materia.id !== item.id)
          .map((materia, indice) => ({ ...materia, ordem: indice + 1 }));
        this.message.success('Matéria removida do ciclo.');
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao remover matéria do ciclo:', erro);
        this.message.error('Não foi possível remover a matéria.');
      },
    });
  }

  alternarMateria(item: CicloMateria): void {
    const cicloId = this.cicloSelecionado?.id;
    if (!cicloId || !item.id || !item.materia.id) return;

    this.cicloService.atualizarMateria(cicloId, item.id, {
      materiaId: item.materia.id,
      ordem: item.ordem,
      ativo: !item.ativo,
    }).subscribe({
      next: atualizado => {
        this.materiasDoCiclo = this.materiasDoCiclo.map(materia =>
          materia.id === atualizado.id ? atualizado : materia,
        );
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao alterar matéria do ciclo:', erro);
        this.message.error('Não foi possível alterar a matéria.');
      },
    });
  }

  moverMateria(indice: number, deslocamento: -1 | 1): void {
    const destino = indice + deslocamento;
    const cicloId = this.cicloSelecionado?.id;
    if (!cicloId || destino < 0 || destino >= this.materiasDoCiclo.length || this.reordenando) return;

    const anterior = [...this.materiasDoCiclo];
    const reordenadas = [...this.materiasDoCiclo];
    [reordenadas[indice], reordenadas[destino]] = [reordenadas[destino], reordenadas[indice]];
    this.materiasDoCiclo = reordenadas.map((item, posicao) => ({ ...item, ordem: posicao + 1 }));
    this.reordenando = true;

    this.cicloService.reordenarMaterias(cicloId, this.materiasDoCiclo).pipe(
      finalize(() => {
        this.reordenando = false;
        this.cdr.detectChanges();
      }),
    ).subscribe({
      next: itens => {
        this.materiasDoCiclo = [...itens].sort((a, b) => a.ordem - b.ordem);
      },
      error: erro => {
        this.materiasDoCiclo = anterior;
        console.error('Erro ao reordenar matérias:', erro);
        this.message.error('Não foi possível alterar a ordem das matérias.');
      },
    });
  }

  materiaDisponivel(materia: Materia): boolean {
    return !this.materiasDoCiclo.some(item => item.materia.id === materia.id);
  }

  private carregarMaterias(cicloId: number): void {
    this.carregandoMaterias = true;
    this.materiasDoCiclo = [];
    this.cicloService.listarMaterias(cicloId).pipe(
      finalize(() => {
        this.carregandoMaterias = false;
        this.cdr.detectChanges();
      }),
    ).subscribe({
      next: itens => {
        if (this.cicloSelecionado?.id === cicloId) {
          this.materiasDoCiclo = [...itens].sort((a, b) => a.ordem - b.ordem);
        }
      },
      error: erro => {
        console.error('Erro ao carregar matérias do ciclo:', erro);
        this.message.error('Não foi possível carregar as matérias do ciclo.');
      },
    });
  }

  private ordenarCiclos(ciclos: Ciclo[]): Ciclo[] {
    return [...ciclos].sort((a, b) => a.nome.localeCompare(b.nome));
  }
}
