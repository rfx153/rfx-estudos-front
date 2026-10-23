import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Planejamento, PlanejamentoService } from '../../services/planejamento.service';

@Component({
  selector: 'app-planejamento-detalhe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  templateUrl: './planejamento-detalhe.html',
  styleUrl: './planejamento-detalhe.css'
})
export class PlanejamentoDetalheComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly service = inject(PlanejamentoService);
  private readonly message = inject(NzMessageService);

  readonly form = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(150)]],
    descricao: ['']
  });

  id?: number;
  carregando = false;
  salvando = false;

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

  private carregar(): void {
    if (!this.id) return;
    this.carregando = true;
    this.service.buscarPorId(this.id).subscribe({
      next: planejamento => {
        this.form.patchValue({ nome: planejamento.nome, descricao: planejamento.descricao || '' });
        this.carregando = false;
      },
      error: erro => {
        console.error('Erro ao carregar planejamento:', erro);
        this.carregando = false;
        this.message.error('Não foi possível carregar o planejamento.');
      }
    });
  }
}
