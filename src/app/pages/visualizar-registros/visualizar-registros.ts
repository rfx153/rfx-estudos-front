import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Registro, RegistroService } from '../../services/registro.service';
import { MateriaService } from '../../services/materia.service';
import { RegistroDetalhesModalComponent } from '../../shared/registro-detalhes-modal/registro-detalhes-modal';

@Component({
  selector: 'app-visualizar-registros',
  standalone: true,
  imports: [CommonModule, FormsModule, NzTableModule, NzSelectModule, NzGridModule, NzCardModule, NzTagModule, NzButtonModule, RegistroDetalhesModalComponent],
  templateUrl: 'visualizar-registros.html',
  styleUrl: 'visualizar-registros.css'
})
export class VisualizarRegistrosComponent implements OnInit {
  listaRegistros: Registro[] = [];
  registrosFiltrados: Registro[] = [];
  listaMaterias: any[] = [];
  materiaSelecionadaId: number | null = null;
  carregando = true;
  detalhesVisiveis = false;
  registrosSelecionados: Registro[] = [];
  detalhesTitulo = 'Detalhes do estudo';

  constructor(
    private registroService: RegistroService,
    private materiaService: MateriaService,
    private cdr: ChangeDetectorRef,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.carregarMaterias();
    this.carregarRegistrosRecentes();
  }

  carregarMaterias(): void {
    this.materiaService.listarTodas().subscribe(materias => {
      this.listaMaterias = materias;
      this.cdr.detectChanges();
    });
  }

  carregarRegistrosRecentes(materiaId: number | null = this.materiaSelecionadaId): void {
    this.carregando = true;
    this.registroService.listarRecentes(100, materiaId).subscribe({
      next: registros => {
        this.listaRegistros = registros;
        this.registrosFiltrados = registros;
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao carregar histórico:', erro);
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }

  // 🔥 LÓGICA DO FILTRO POR MATÉRIA
  filtrarPorMateria(materiaId: number | null): void {
    this.materiaSelecionadaId = materiaId;
    this.carregarRegistrosRecentes(materiaId);
  }

  abrirDetalhes(registro: Registro): void {
    this.detalhesTitulo = `${registro.materia?.nome || 'Estudo'} - ${registro.assunto?.nome || 'Detalhes'}`;
    this.registrosSelecionados = [registro];
    this.detalhesVisiveis = true;
  }

  excluirRegistro(registro: Registro): void {
    if (!registro.id || !window.confirm('Apagar este registro de estudo?')) return;

    this.registroService.excluir(registro.id).subscribe({
      next: () => {
        this.listaRegistros = this.listaRegistros.filter(item => item.id !== registro.id);
        this.registrosFiltrados = this.registrosFiltrados.filter(item => item.id !== registro.id);
        if (this.registrosSelecionados.some(item => item.id === registro.id)) {
          this.detalhesVisiveis = false;
          this.registrosSelecionados = [];
        }
        this.message.success('Registro apagado com sucesso.');
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao apagar registro:', erro);
        this.message.error('Não foi possível apagar o registro.');
      }
    });
  }
}
