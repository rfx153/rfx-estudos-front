import { CommonModule, formatDate } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { timeout } from 'rxjs';
import { Materia, MateriaService } from '../../services/materia.service';
import {
  MetaDiaria,
  MetaDiariaResumo,
  MetaDiariaService,
} from '../../services/meta-diaria.service';
import {
  MetaMateria,
  MetaMateriaResumo,
  MetaMateriaService,
  PeriodoMeta,
} from '../../services/meta-materia.service';
import {
  MetaSemanal,
  MetaSemanalResumo,
  MetaSemanalService,
} from '../../services/meta-semanal.service';

@Component({
  selector: 'app-metas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class MetasComponent implements OnInit {
  private metaService = inject(MetaMateriaService);
  private metaDiariaService = inject(MetaDiariaService);
  private metaSemanalService = inject(MetaSemanalService);
  private materiaService = inject(MateriaService);
  private cdr = inject(ChangeDetectorRef);

  periodo: PeriodoMeta = 'SEMANAL';
  referencia = new Date();
  referenciaDiaria = new Date();
  referenciaSemanal = new Date();
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
  tipoMeta: 'DIARIA' | 'SEMANAL' | 'POR_MATERIA' = 'DIARIA';
  inicioDiarias = '';
  fimDiarias = '';
  metasDiarias: MetaDiariaResumo[] = [];
  carregandoDiarias = false;
  salvandoDiaria = false;
  modalDiariaAberto = false;
  metaDiariaEmEdicao: MetaDiaria | null = null;
  formularioDiario = { data: '', horas: 1 };
  inicioSemanal = '';
  fimSemanal = '';
  metaSemanal: MetaSemanalResumo | null = null;
  carregandoSemanal = false;
  salvandoSemanal = false;
  modalSemanalAberto = false;
  metaSemanalEmEdicao: MetaSemanal | null = null;
  horasMetaSemanal = 10;

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
    this.atualizarPeriodoDiario();
    this.atualizarPeriodoSemanal();
  }

  get tituloPeriodoDiario(): string {
    const inicio = this.dataLocal(this.inicioDiarias);
    const fim = this.dataLocal(this.fimDiarias);
    return `${inicio.toLocaleDateString('pt-BR')} a ${fim.toLocaleDateString('pt-BR')}`;
  }

  get tituloPeriodoSemanal(): string {
    const inicio = this.dataLocal(this.inicioSemanal);
    const fim = this.dataLocal(this.fimSemanal);
    return `${inicio.toLocaleDateString('pt-BR')} a ${fim.toLocaleDateString('pt-BR')}`;
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

  mudarTipoMeta(tipo: 'DIARIA' | 'SEMANAL' | 'POR_MATERIA'): void {
    this.tipoMeta = tipo;
    this.erro = '';
  }

  navegarSemanal(direcao: number): void {
    const referencia = new Date(this.referenciaSemanal);
    referencia.setDate(referencia.getDate() + (direcao * 7));
    this.referenciaSemanal = referencia;
    this.atualizarPeriodoSemanal();
  }

  abrirCriacaoSemanal(): void {
    this.metaSemanalEmEdicao = null;
    this.horasMetaSemanal = 10;
    this.erro = '';
    this.modalSemanalAberto = true;
  }

  editarSemanal(meta: MetaSemanalResumo): void {
    this.metaSemanalEmEdicao = {
      id: meta.id,
      inicioSemana: meta.inicioSemana,
      metaMinutos: meta.metaMinutos,
    };
    this.horasMetaSemanal = meta.metaMinutos / 60;
    this.erro = '';
    this.modalSemanalAberto = true;
  }

  cancelarEdicaoSemanal(): void {
    this.metaSemanalEmEdicao = null;
    this.modalSemanalAberto = false;
    this.horasMetaSemanal = 10;
  }

  salvarSemanal(): void {
    const metaMinutos = Math.round(Number(this.horasMetaSemanal) * 60);
    if (!Number.isFinite(metaMinutos) || metaMinutos <= 0) {
      this.erro = 'Informe uma quantidade de horas maior que zero.';
      return;
    }

    const payload = {
      inicioSemana: this.metaSemanalEmEdicao?.inicioSemana ?? this.inicioSemanal,
      metaMinutos,
    };
    const requisicao = this.metaSemanalEmEdicao
      ? this.metaSemanalService.atualizar(this.metaSemanalEmEdicao.id, payload)
      : this.metaSemanalService.criar(payload);

    this.salvandoSemanal = true;
    this.erro = '';
    requisicao.subscribe({
      next: () => {
        this.salvandoSemanal = false;
        this.cancelarEdicaoSemanal();
        this.carregarMetaSemanal();
      },
      error: () => {
        this.salvandoSemanal = false;
        this.erro = 'Não foi possível salvar a meta. Essa semana pode já possuir uma meta.';
      },
    });
  }

  excluirSemanal(meta: MetaSemanalResumo): void {
    if (!confirm(`Remover a meta da semana de ${this.tituloPeriodoSemanal}?`)) return;
    this.metaSemanalService.excluir(meta.id).subscribe({
      next: () => this.carregarMetaSemanal(),
      error: () => this.erro = 'Não foi possível remover a meta semanal.',
    });
  }

  porcentagemSemanal(meta: MetaSemanalResumo): number {
    if (!meta.metaMinutos) return 0;
    return Math.min(100, (meta.tempoRealizadoMinutos / meta.metaMinutos) * 100);
  }

  restanteSemanal(meta: MetaSemanalResumo): number {
    return Math.max(0, meta.metaMinutos - meta.tempoRealizadoMinutos);
  }

  navegarDiarias(direcao: number): void {
    const referencia = new Date(this.referenciaDiaria);
    referencia.setDate(referencia.getDate() + (direcao * 7));
    this.referenciaDiaria = referencia;
    this.atualizarPeriodoDiario();
  }

  abrirCriacaoDiaria(): void {
    this.metaDiariaEmEdicao = null;
    this.formularioDiario = {
      data: formatDate(new Date(), 'yyyy-MM-dd', 'en-US'),
      horas: 1,
    };
    this.erro = '';
    this.modalDiariaAberto = true;
  }

  editarDiaria(meta: MetaDiariaResumo): void {
    this.metaDiariaEmEdicao = {
      id: meta.id,
      data: meta.data,
      metaMinutos: meta.metaMinutos,
    };
    this.formularioDiario = {
      data: meta.data,
      horas: meta.metaMinutos / 60,
    };
    this.erro = '';
    this.modalDiariaAberto = true;
  }

  cancelarEdicaoDiaria(): void {
    this.metaDiariaEmEdicao = null;
    this.modalDiariaAberto = false;
    this.formularioDiario = { data: '', horas: 1 };
  }

  salvarDiaria(): void {
    const metaMinutos = Math.round(Number(this.formularioDiario.horas) * 60);
    if (!this.formularioDiario.data || !Number.isFinite(metaMinutos) || metaMinutos <= 0) {
      this.erro = 'Informe a data e uma quantidade de horas maior que zero.';
      return;
    }

    const payload = { data: this.formularioDiario.data, metaMinutos };
    const requisicao = this.metaDiariaEmEdicao
      ? this.metaDiariaService.atualizar(this.metaDiariaEmEdicao.id, payload)
      : this.metaDiariaService.criar(payload);

    this.salvandoDiaria = true;
    this.erro = '';
    requisicao.subscribe({
      next: () => {
        this.salvandoDiaria = false;
        this.cancelarEdicaoDiaria();
        this.carregarMetasDiarias();
      },
      error: () => {
        this.salvandoDiaria = false;
        this.erro = 'Não foi possível salvar a meta. Essa data pode já possuir uma meta.';
      },
    });
  }

  excluirDiaria(meta: MetaDiariaResumo): void {
    if (!confirm(`Remover a meta de ${this.formatarData(meta.data)}?`)) return;
    this.metaDiariaService.excluir(meta.id).subscribe({
      next: () => this.carregarMetasDiarias(),
      error: () => this.erro = 'Não foi possível remover a meta diária.',
    });
  }

  porcentagemDiaria(meta: MetaDiariaResumo): number {
    if (!meta.metaMinutos) return 0;
    return Math.min(100, (meta.tempoRealizadoMinutos / meta.metaMinutos) * 100);
  }

  restanteDiaria(meta: MetaDiariaResumo): number {
    return Math.max(0, meta.metaMinutos - meta.tempoRealizadoMinutos);
  }

  formatarData(data: string): string {
    return this.dataLocal(data).toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
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

  private atualizarPeriodoDiario(): void {
    const referencia = new Date(this.referenciaDiaria);
    const inicio = new Date(referencia);
    inicio.setDate(referencia.getDate() - referencia.getDay());
    const fim = new Date(inicio);
    fim.setDate(inicio.getDate() + 6);
    this.inicioDiarias = formatDate(inicio, 'yyyy-MM-dd', 'en-US');
    this.fimDiarias = formatDate(fim, 'yyyy-MM-dd', 'en-US');
    this.carregarMetasDiarias();
  }

  private atualizarPeriodoSemanal(): void {
    const referencia = new Date(this.referenciaSemanal);
    const inicio = new Date(referencia);
    inicio.setDate(referencia.getDate() - referencia.getDay());
    const fim = new Date(inicio);
    fim.setDate(inicio.getDate() + 6);
    this.inicioSemanal = formatDate(inicio, 'yyyy-MM-dd', 'en-US');
    this.fimSemanal = formatDate(fim, 'yyyy-MM-dd', 'en-US');
    this.carregarMetaSemanal();
  }

  private carregarMetaSemanal(): void {
    this.carregandoSemanal = true;
    this.erro = '';
    this.metaSemanalService.resumir(this.inicioSemanal).pipe(timeout(15000)).subscribe({
      next: metas => {
        this.metaSemanal = metas[0] ?? null;
        this.carregandoSemanal = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = 'Não foi possível carregar a meta semanal. Verifique se a migration foi executada.';
        this.carregandoSemanal = false;
        this.cdr.detectChanges();
      },
    });
  }

  private carregarMetasDiarias(): void {
    this.carregandoDiarias = true;
    this.erro = '';
    this.metaDiariaService.resumir(this.inicioDiarias, this.fimDiarias).pipe(timeout(15000)).subscribe({
      next: metas => {
        this.metasDiarias = metas;
        this.carregandoDiarias = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = 'Não foi possível carregar as metas diárias. Verifique se a migration foi executada.';
        this.carregandoDiarias = false;
        this.cdr.detectChanges();
      },
    });
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
