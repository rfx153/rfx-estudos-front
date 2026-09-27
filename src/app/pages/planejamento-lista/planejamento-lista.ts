import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Planejamento, PlanejamentoService } from '../../services/planejamento.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-planejamento-lista',
  standalone: true,
  imports: [CommonModule, RouterLink, NzButtonModule, NzTagModule],
  templateUrl: './planejamento-lista.html',
  styleUrl: './planejamento-lista.css'
})
export class PlanejamentoListaComponent implements OnInit {
  private service = inject(PlanejamentoService);
  private router = inject(Router);
  private message = inject(NzMessageService);
  private cdr = inject(ChangeDetectorRef);

  planejamentos: Planejamento[] = [];
  carregando = true;

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
  corStatus(status?: string): string { return status === 'Concluido' ? 'green' : status === 'Pausado' ? 'orange' : 'blue'; }
}
