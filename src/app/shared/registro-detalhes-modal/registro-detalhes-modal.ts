import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { Registro } from '../../services/registro.service';

@Component({
  selector: 'app-registro-detalhes-modal',
  standalone: true,
  imports: [CommonModule, NzModalModule, NzTagModule, NzButtonModule],
  templateUrl: './registro-detalhes-modal.html',
  styleUrl: './registro-detalhes-modal.css'
})
export class RegistroDetalhesModalComponent {
  @Input() visivel = false;
  @Input() titulo = 'Detalhes do estudo';
  @Input() registros: Registro[] = [];
  @Output() visivelChange = new EventEmitter<boolean>();

  fechar(): void {
    this.visivel = false;
    this.visivelChange.emit(false);
  }

  aproveitamento(feitas = 0, acertadas = 0): string {
    if (!feitas) return '0%';
    return `${Math.round((acertadas / feitas) * 100)}%`;
  }
}
