import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Assunto, Registro, RegistroService, TipoRegistro } from '../../services/registro.service';
import { MateriaService } from '../../services/materia.service';
import { MaterialGuia, MaterialGuiaService } from '../../services/material-guia.service';
import { RegistroDetalhesModalComponent } from '../../shared/registro-detalhes-modal/registro-detalhes-modal';
import { calcularPercentualDesempenho, classeDesempenho } from '../../shared/desempenho';

@Component({
  selector: 'app-visualizar-registros',
  standalone: true,
  imports: [CommonModule, FormsModule, NzSelectModule, NzGridModule, NzCardModule, NzTagModule, NzButtonModule, NzPaginationModule, RegistroDetalhesModalComponent],
  templateUrl: 'visualizar-registros.html',
  styleUrl: 'visualizar-registros.css'
})
export class VisualizarRegistrosComponent implements OnInit {
  readonly classeDesempenho = classeDesempenho;
  listaRegistros: Registro[] = [];
  registrosFiltrados: Registro[] = [];
  listaMaterias: any[] = [];
  listaAssuntos: Assunto[] = [];
  listaMateriaisGuia: MaterialGuia[] = [];
  listaTiposRegistro: TipoRegistro[] = [];
  materiaSelecionadaId: number | null = null;
  assuntoSelecionadoId: number | null = null;
  materialGuiaSelecionadoId: number | null = null;
  tipoRegistroSelecionadoId: number | null = null;
  carregando = true;
  detalhesVisiveis = false;
  registrosSelecionados: Registro[] = [];
  detalhesTitulo = 'Detalhes do estudo';
  paginaAtual = 1;
  itensPorPagina = 10;
  totalRegistrosHistorico = 0;

  constructor(
    private registroService: RegistroService,
    private materiaService: MateriaService,
    private materialGuiaService: MaterialGuiaService,
    private cdr: ChangeDetectorRef,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarMaterias();
    this.carregarAssuntos();
    this.carregarMateriaisGuia();
    this.carregarTiposRegistro();
    this.carregarRegistrosRecentes();
  }

  carregarAssuntos(): void {
    this.registroService.listarAssuntos(true).subscribe(assuntos => {
      this.listaAssuntos = assuntos;
      this.cdr.detectChanges();
    });
  }

  carregarMateriaisGuia(): void {
    this.materialGuiaService.listarTodosIncluindoInativos().subscribe(materiais => {
      this.listaMateriaisGuia = materiais;
      this.cdr.detectChanges();
    });
  }

  carregarTiposRegistro(): void {
    this.registroService.listarTiposRegistro(true).subscribe(tipos => {
      this.listaTiposRegistro = tipos;
      this.cdr.detectChanges();
    });
  }

  carregarMaterias(): void {
    this.materiaService.listarTodasIncluindoInativas().subscribe(materias => {
      this.listaMaterias = materias;
      this.cdr.detectChanges();
    });
  }

  carregarRegistrosRecentes(): void {
    this.carregando = true;
    this.registroService.listarRecentesPaginado(
      this.paginaAtual - 1,
      this.itensPorPagina,
      this.materiaSelecionadaId,
      this.assuntoSelecionadoId,
      this.materialGuiaSelecionadoId,
      this.tipoRegistroSelecionadoId
    ).subscribe({
      next: pagina => {
        this.listaRegistros = pagina.content;
        this.registrosFiltrados = pagina.content;
        this.totalRegistrosHistorico = pagina.totalElements;
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

  aplicarFiltros(): void {
    this.paginaAtual = 1;
    this.carregarRegistrosRecentes();
  }

  alterarMateria(): void {
    if (this.assuntoSelecionadoId !== null) {
      const assuntoSelecionado = this.listaAssuntos.find(
        assunto => assunto.id === this.assuntoSelecionadoId
      );
      const pertenceAMateria = this.materiaSelecionadaId === null
        || assuntoSelecionado?.materia?.id === this.materiaSelecionadaId;

      if (!pertenceAMateria) {
        this.assuntoSelecionadoId = null;
      }
    }

    this.aplicarFiltros();
  }

  get assuntosDisponiveis(): Assunto[] {
    if (this.materiaSelecionadaId === null) return this.listaAssuntos;
    return this.listaAssuntos.filter(
      assunto => assunto.materia?.id === this.materiaSelecionadaId
    );
  }

  get registrosPaginados(): Registro[] {
    return this.registrosFiltrados;
  }

  get primeiroRegistroDaPagina(): number {
    if (!this.totalRegistrosHistorico) return 0;
    return (this.paginaAtual - 1) * this.itensPorPagina + 1;
  }

  get ultimoRegistroDaPagina(): number {
    return Math.min(this.paginaAtual * this.itensPorPagina, this.totalRegistrosHistorico);
  }

  trocarPagina(pagina: number): void {
    this.paginaAtual = pagina;
    this.carregarRegistrosRecentes();
  }

  abrirDetalhes(registro: Registro): void {
    this.detalhesTitulo = `${registro.materia?.nome || 'Estudo'} - ${registro.assunto?.nome || 'Detalhes'}`;
    this.registrosSelecionados = [registro];
    this.detalhesVisiveis = true;
  }

  editarRegistro(registro: Registro): void {
    this.detalhesVisiveis = false;
    this.router.navigate(['/novo-registro'], { state: { registroParaEditar: registro } });
  }

  calcularAproveitamento(feitas = 0, acertadas = 0): string {
    if (!feitas) return '0%';
    return `${calcularPercentualDesempenho(feitas, acertadas)}%`;
  }

  percentualAproveitamento(feitas = 0, acertadas = 0): number {
    return calcularPercentualDesempenho(feitas, acertadas);
  }

  trackByRegistroId(index: number, registro: Registro): number {
    return registro.id ?? index;
  }

  excluirRegistro(registro: Registro): void {
    if (!registro.id || !window.confirm('Apagar este registro de estudo?')) return;

    this.registroService.excluir(registro.id).subscribe({
      next: () => {
        this.listaRegistros = this.listaRegistros.filter(item => item.id !== registro.id);
        this.registrosFiltrados = this.registrosFiltrados.filter(item => item.id !== registro.id);
        this.totalRegistrosHistorico = Math.max(0, this.totalRegistrosHistorico - 1);
        this.ajustarPaginaDepoisDeExcluir();
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

  private ajustarPaginaDepoisDeExcluir(): void {
    const totalPaginas = Math.max(1, Math.ceil(this.totalRegistrosHistorico / this.itensPorPagina));
    if (this.paginaAtual > totalPaginas) {
      this.paginaAtual = totalPaginas;
      this.carregarRegistrosRecentes();
      return;
    }

    if (!this.registrosFiltrados.length && this.totalRegistrosHistorico > 0) {
      this.carregarRegistrosRecentes();
    }
  }
}
