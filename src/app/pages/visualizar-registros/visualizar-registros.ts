import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { RegistroService } from '../../services/registro.service';
import { MateriaService } from '../../services/materia.service';

@Component({
  selector: 'app-visualizar-registros',
  standalone: true,
  imports: [CommonModule, FormsModule, NzTableModule, NzSelectModule, NzGridModule, NzCardModule, NzTagModule],
  templateUrl: 'visualizar-registros.html'
})
export class VisualizarRegistrosComponent implements OnInit {
  listaRegistros: any[] = [];
  registrosFiltrados: any[] = [];
  listaMaterias: any[] = [];
  materiaSelecionadaId: number | null = null;

  constructor(
    private registroService: RegistroService,
    private materiaService: MateriaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarMaterias();
    this.carregarTodosRegistros();
  }

  carregarMaterias(): void {
    this.materiaService.listarTodas().subscribe(materias => {
      this.listaMaterias = materias;
      this.cdr.detectChanges();
    });
  }

  carregarTodosRegistros(): void {
    // Vamos criar esse método GET no service na sequência
    this.registroService.listarTodos().subscribe(registros => {
      this.listaRegistros = registros;
      this.registrosFiltrados = registros; // Inicialmente mostra tudo
      this.cdr.detectChanges();
    });
  }

  // 🔥 LÓGICA DO FILTRO POR MATÉRIA
  filtrarPorMateria(materiaId: number | null): void {
    this.materiaSelecionadaId = materiaId;
    if (!materiaId) {
      this.registrosFiltrados = this.listaRegistros; // Filtro limpo = mostra todos
    } else {
      this.registrosFiltrados = this.listaRegistros.filter(
        reg => reg.materia && reg.materia.id === materiaId
      );
    }
    this.cdr.detectChanges();
  }
  private aplicarFiltroEAutoExpansao(materiaId: number | null): void {
  // 1. Filtra a lista
  if (!materiaId) {
    this.registrosFiltrados = [...this.listaRegistros];
  } else {
    this.registrosFiltrados = this.listaRegistros.filter(
      reg => reg.materia && reg.materia.id === materiaId
    );
  }

  // 2. Reseta o estado de expansão de todos para não misturar
  this.registrosFiltrados.forEach(reg => reg.expandido = false);

  // 3. PRIORIDADE: Abre o último registro do topo automaticamente se a lista não estiver vazia
  if (this.registrosFiltrados.length > 0) {
    this.registrosFiltrados[0].expandido = true;
  }

  this.cdr.detectChanges();
}
}