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
import {
  Planejamento,
  PlanejamentoMateria,
  PlanejamentoMateriaDTO,
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

  id?: number;
  carregando = false;
  salvando = false;
  carregandoMaterias = false;
  salvandoMateria = false;
  materiaEditandoId?: number;
  materias: Materia[] = [];
  materiasPlanejadas: PlanejamentoMateria[] = [];

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
}
