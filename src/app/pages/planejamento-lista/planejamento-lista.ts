import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Planejamento, PlanejamentoService } from '../../services/planejamento.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-planejamento-lista',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, NzButtonModule],
  templateUrl: './planejamento-lista.html',
  styleUrl: './planejamento-lista.css'
})
export class PlanejamentoListaComponent implements OnInit {
  private service = inject(PlanejamentoService);
  private router = inject(Router);
  private message = inject(NzMessageService);
  private cdr = inject(ChangeDetectorRef);
  private fb = inject(FormBuilder);

  planejamentos: Planejamento[] = [];
  carregando = true;
  salvando = false;
  excluindoId?: number;
  planejamentoEditando?: Planejamento;
  readonly editForm = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(150)]],
    descricao: ['']
  });

  ngOnInit(): void {
    this.service.listarTodos().pipe(
      finalize(() => {
        this.carregando = false;
        this.cdr.detectChanges();
      })
    ).subscribe({
      next: dados => {
        this.planejamentos = dados;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao carregar planejamentos:', erro);
        this.message.error('Não foi possível carregar os planejamentos.');
        this.cdr.detectChanges();
      }
    });
  }

  novo(): void { this.router.navigate(['/planejamentos/novo']); }
  abrir(planejamento: Planejamento): void { if (planejamento.id) this.router.navigate(['/planejamentos', planejamento.id]); }

  editar(evento: Event, planejamento: Planejamento): void {
    evento.preventDefault();
    evento.stopPropagation();
    this.planejamentoEditando = planejamento;
    this.editForm.setValue({ nome: planejamento.nome, descricao: planejamento.descricao || '' });
  }

  remover(evento: Event, planejamento: Planejamento): void {
    evento.preventDefault();
    evento.stopPropagation();
    if (!planejamento.id || !window.confirm(`Remover o planejamento "${planejamento.nome}"?`)) return;

    const id = planejamento.id;
    this.excluindoId = id;
    this.service.excluir(id).pipe(finalize(() => {
      this.excluindoId = undefined;
      this.cdr.detectChanges();
    })).subscribe({
      next: () => {
        this.planejamentos = this.planejamentos.filter(item => item.id !== id);
        this.message.success('Planejamento removido.');
      },
      error: erro => {
        console.error('Erro ao remover planejamento:', erro);
        this.message.error('Não foi possível remover o planejamento.');
      }
    });
  }

  fecharModal(): void {
    if (this.salvando) return;
    this.planejamentoEditando = undefined;
    this.editForm.reset({ nome: '', descricao: '' });
  }

  salvarEdicao(): void {
    if (!this.planejamentoEditando?.id || this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }

    const id = this.planejamentoEditando.id;
    const dados: Planejamento = {
      nome: this.editForm.controls.nome.value!.trim(),
      descricao: this.editForm.controls.descricao.value?.trim() || null
    };
    this.salvando = true;
    this.service.atualizar(id, dados).pipe(finalize(() => {
      this.salvando = false;
      this.cdr.detectChanges();
    })).subscribe({
      next: atualizado => {
        const indice = this.planejamentos.findIndex(item => item.id === id);
        if (indice >= 0) this.planejamentos[indice] = atualizado;
        this.message.success('Planejamento atualizado.');
        this.planejamentoEditando = undefined;
      },
      error: erro => {
        console.error('Erro ao atualizar planejamento:', erro);
        this.message.error('Não foi possível atualizar o planejamento.');
      }
    });
  }
}
