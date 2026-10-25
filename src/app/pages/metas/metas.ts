import { CommonModule, formatDate } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { timeout } from 'rxjs';
import { Materia, MateriaService } from '../../services/materia.service';
import {
  MetaMateria,
  MetaMateriaResumo,
  MetaMateriaService,
  PeriodoMeta,
} from '../../services/meta-materia.service';

@Component({
  selector: 'app-metas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class MetasComponent implements OnInit {
  private metaService = inject(MetaMateriaService);
  private materiaService = inject(MateriaService);
  private cdr = inject(ChangeDetectorRef);

  periodo: PeriodoMeta = 'SEMANAL';
  referencia = new Date();
  inicio = '';
  fim = '';
  resumo: MetaMateriaResumo[] = [];
  materias: Materia[] = [];
  carregando = false;
  salvando = false;
  erro = '';
  metaEmEdicao: MetaMateria | null = null;
  modalAberto = false;
  formulario = { materiaId: null as number | null, horas: 1, minutos: 0 };

  ngOnInit(): void {
    this.materiaService.listarTodas().subscribe({
      next: materias => {
        this.materias = materias;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = 'Não foi possível carregar as matérias.';
        this.cdr.detectChanges();
      },
    });
    this.atualizarPeriodo();
  }

  get tituloPeriodo(): string {
    const inicio = this.dataLocal(this.inicio);
    const fim = this.dataLocal(this.fim);
    if (this.periodo === 'MENSAL') {
      return inicio.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    }
    return `${inicio.toLocaleDateString('pt-BR')} a ${fim.toLocaleDateString('pt-BR')}`;
  }

  get materiasSemMeta(): Materia[] {
    const idsComMeta = new Set(this.resumo.map(meta => meta.materiaId));
    const materiaAtual = this.metaEmEdicao?.materia.id;
    return this.materias.filter(materia => materia.id === materiaAtual || !idsComMeta.has(materia.id!));
  }

  mudarPeriodo(periodo: PeriodoMeta): void {
    this.periodo = periodo;
    this.atualizarPeriodo();
  }

  navegar(direcao: number): void {
    const novaReferencia = new Date(this.referencia);
    if (this.periodo === 'SEMANAL') novaReferencia.setDate(novaReferencia.getDate() + (direcao * 7));
    else novaReferencia.setMonth(novaReferencia.getMonth() + direcao);
    this.referencia = novaReferencia;
    this.atualizarPeriodo();
  }

  salvar(): void {
    if (!this.formulario.materiaId) {
      this.erro = 'Selecione uma matéria.';
      return;
    }
    const totalMinutos = (Number(this.formulario.horas) * 60) + Number(this.formulario.minutos);
    if (!Number.isInteger(totalMinutos) || totalMinutos <= 0) {
      this.erro = 'Informe uma meta semanal maior que zero.';
      return;
    }

    this.salvando = true;
    this.erro = '';
    const payload = { materiaId: this.formulario.materiaId, metaSemanalMinutos: totalMinutos };
    const requisicao = this.metaEmEdicao
      ? this.metaService.atualizar(this.metaEmEdicao.id, payload)
      : this.metaService.criar(payload);

    requisicao.subscribe({
      next: () => {
        this.salvando = false;
        this.cancelarEdicao();
        this.carregarResumo();
      },
      error: () => {
        this.salvando = false;
        this.erro = 'Não foi possível salvar a meta. Verifique se a matéria já possui uma meta.';
      },
    });
  }

  editar(meta: MetaMateriaResumo): void {
    this.metaEmEdicao = {
      id: meta.id,
      materia: { id: meta.materiaId, nome: meta.materiaNome },
      metaSemanalMinutos: meta.metaSemanalMinutos,
    };
    this.formulario = {
      materiaId: meta.materiaId,
      horas: Math.floor(meta.metaSemanalMinutos / 60),
      minutos: meta.metaSemanalMinutos % 60,
    };
    this.erro = '';
    this.modalAberto = true;
  }

  cancelarEdicao(): void {
    this.metaEmEdicao = null;
    this.formulario = { materiaId: null, horas: 1, minutos: 0 };
    this.modalAberto = false;
  }

  abrirCriacao(): void {
    this.metaEmEdicao = null;
    this.formulario = { materiaId: null, horas: 1, minutos: 0 };
    this.erro = '';
    this.modalAberto = true;
  }

  excluir(meta: MetaMateriaResumo): void {
    if (!confirm(`Remover a meta de ${meta.materiaNome}?`)) return;
    this.metaService.excluir(meta.id).subscribe({
      next: () => this.carregarResumo(),
      error: () => this.erro = 'Não foi possível remover a meta.',
    });
  }

  porcentagem(meta: MetaMateriaResumo): number {
    if (!meta.metaPeriodoMinutos) return 0;
    return Math.min(100, (meta.tempoRealizadoMinutos / meta.metaPeriodoMinutos) * 100);
  }

  restante(meta: MetaMateriaResumo): number {
    return Math.max(0, meta.metaPeriodoMinutos - meta.tempoRealizadoMinutos);
  }

  formatarDuracao(minutos: number): string {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    if (!horas) return `${minutosRestantes}min`;
    if (!minutosRestantes) return `${horas}h`;
    return `${horas}h ${minutosRestantes}min`;
  }

  private atualizarPeriodo(): void {
    const referencia = new Date(this.referencia);
    let inicio: Date;
    let fim: Date;
    if (this.periodo === 'SEMANAL') {
      inicio = new Date(referencia);
      inicio.setDate(referencia.getDate() - referencia.getDay());
      fim = new Date(inicio);
      fim.setDate(inicio.getDate() + 6);
    } else {
      inicio = new Date(referencia.getFullYear(), referencia.getMonth(), 1);
      fim = new Date(referencia.getFullYear(), referencia.getMonth() + 1, 0);
    }
    this.inicio = formatDate(inicio, 'yyyy-MM-dd', 'en-US');
    this.fim = formatDate(fim, 'yyyy-MM-dd', 'en-US');
    this.carregarResumo();
  }

  private carregarResumo(): void {
    this.carregando = true;
    this.erro = '';
    this.metaService.resumir(this.inicio, this.fim, this.periodo).pipe(timeout(15000)).subscribe({
      next: resumo => {
        this.resumo = resumo;
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = 'Não foi possível carregar as metas para este período. Verifique se a migration foi executada e se a API está disponível.';
        this.carregando = false;
        this.cdr.detectChanges();
      },
    });
  }

  private dataLocal(data: string): Date {
    const [ano, mes, dia] = data.split('-').map(Number);
    return new Date(ano, mes - 1, dia);
  }
}
