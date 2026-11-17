import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Registro, RegistroService } from '../../services/registro.service';

type AbaAcompanhamento = 'desempenho' | 'linha-tempo' | 'tempo-estudo' | 'tipo-estudo';
type TipoPeriodo = 'semana' | 'mes' | 'ano' | 'total' | 'personalizado';

interface ResumoMateria {
  nome: string;
  minutos: number;
  questoes: number;
  acertos: number;
  percentualAcertos: number;
  percentualTempo: number;
  percentualTotal: number;
  cor: string;
}

interface SegmentoMateria {
  nome: string;
  minutos: number;
  altura: number;
  cor: string;
}

interface ResumoDia {
  data: string;
  rotulo: string;
  minutos: number;
  percentual: number;
  segmentos: SegmentoMateria[];
}

interface ResumoTipo {
  nome: string;
  quantidade: number;
  minutos: number;
  percentual: number;
}

@Component({
  selector: 'app-acompanhamento',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './acompanhamento.html',
  styleUrl: './acompanhamento.css'
})
export class AcompanhamentoComponent implements OnInit {
  private registroService = inject(RegistroService);
  private cdr = inject(ChangeDetectorRef);

  abaAtiva: AbaAcompanhamento = 'desempenho';
  carregando = true;
  mensagemErro = '';
  todosRegistros: Registro[] = [];
  registros: Registro[] = [];
  periodoAtivo: TipoPeriodo = 'semana';
  dataReferencia = new Date();
  inicioPeriodo: Date | null = null;
  fimPeriodo: Date | null = null;
  inicioPersonalizado = '';
  fimPersonalizado = '';

  totalMinutos = 0;
  totalQuestoes = 0;
  totalAcertos = 0;
  percentualAcertos = 0;
  totalMaterias = 0;
  materias: ResumoMateria[] = [];
  dias: ResumoDia[] = [];
  tipos: ResumoTipo[] = [];
  private readonly coresMaterias = [
    '#1677ff', '#22c55e', '#f97316', '#8b5cf6', '#e11d48', '#14b8a6',
    '#eab308', '#0ea5e9', '#a855f7', '#84cc16', '#f43f5e', '#6366f1'
  ];

  ngOnInit(): void {
    this.definirPeriodo('semana');
    this.carregarDados();
  }

  selecionarAba(aba: AbaAcompanhamento): void {
    this.abaAtiva = aba;
  }

  selecionarPeriodo(periodo: TipoPeriodo): void {
    this.periodoAtivo = periodo;

    if (periodo === 'personalizado') {
      this.inicioPersonalizado = this.inicioPeriodo ? this.dataLocal(this.inicioPeriodo) : this.dataLocal(new Date());
      this.fimPersonalizado = this.fimPeriodo ? this.dataLocal(this.fimPeriodo) : this.inicioPersonalizado;
      this.aplicarPeriodoPersonalizado();
      return;
    }

    this.definirPeriodo(periodo);
    this.aplicarFiltroPeriodo();
  }

  navegarPeriodo(direcao: -1 | 1): void {
    if (this.periodoAtivo === 'total' || !this.inicioPeriodo || !this.fimPeriodo) return;

    if (this.periodoAtivo === 'semana') {
      this.dataReferencia = this.adicionarDias(this.dataReferencia, direcao * 7);
      this.definirPeriodo('semana');
    } else if (this.periodoAtivo === 'mes') {
      this.dataReferencia = new Date(
        this.dataReferencia.getFullYear(),
        this.dataReferencia.getMonth() + direcao,
        1
      );
      this.definirPeriodo('mes');
    } else if (this.periodoAtivo === 'ano') {
      this.dataReferencia = new Date(this.dataReferencia.getFullYear() + direcao, 0, 1);
      this.definirPeriodo('ano');
    } else {
      const duracao = this.diferencaEmDias(this.inicioPeriodo, this.fimPeriodo) + 1;
      this.inicioPeriodo = this.adicionarDias(this.inicioPeriodo, direcao * duracao);
      this.fimPeriodo = this.adicionarDias(this.fimPeriodo, direcao * duracao);
      this.inicioPersonalizado = this.dataLocal(this.inicioPeriodo);
      this.fimPersonalizado = this.dataLocal(this.fimPeriodo);
    }

    this.aplicarFiltroPeriodo();
  }

  aplicarPeriodoPersonalizado(): void {
    const inicio = this.dataDeCampo(this.inicioPersonalizado);
    const fim = this.dataDeCampo(this.fimPersonalizado);
    if (!inicio || !fim) return;

    this.inicioPeriodo = inicio <= fim ? inicio : fim;
    this.fimPeriodo = inicio <= fim ? fim : inicio;
    this.inicioPersonalizado = this.dataLocal(this.inicioPeriodo);
    this.fimPersonalizado = this.dataLocal(this.fimPeriodo);
    this.aplicarFiltroPeriodo();
  }

  get rotuloPeriodo(): string {
    if (this.periodoAtivo === 'total') return 'Todo o período';
    if (!this.inicioPeriodo || !this.fimPeriodo) return 'Período não definido';

    if (this.periodoAtivo === 'mes') {
      const texto = this.inicioPeriodo.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
      return texto.charAt(0).toUpperCase() + texto.slice(1);
    }
    if (this.periodoAtivo === 'ano') return String(this.inicioPeriodo.getFullYear());

    return `${this.dataCurta(this.inicioPeriodo)} a ${this.dataCurta(this.fimPeriodo)}`;
  }

  get descricaoGrafico(): string {
    if (this.periodoAtivo === 'semana') return 'Dias da semana';
    if (this.periodoAtivo === 'mes') return 'Dias do mês';
    return 'Evolução no período';
  }

  formatarTempo(minutos: number): string {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;

    if (!horas) return `${minutosRestantes}min`;
    if (!minutosRestantes) return `${horas}h`;
    return `${horas}h ${String(minutosRestantes).padStart(2, '0')}min`;
  }

  formatarData(data?: string): string {
    if (!data) return 'Data não informada';
    const [ano, mes, dia] = data.substring(0, 10).split('-').map(Number);
    if (!ano || !mes || !dia) return data;

    return new Date(ano, mes - 1, dia).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  trackByRegistro(index: number, registro: Registro): number {
    return registro.id ?? index;
  }

  formatarIndice(indice: number): string {
    return String(indice + 1).padStart(2, '0');
  }

  tempoParaMinutos(tempo?: string): number {
    if (!tempo) return 0;
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':');
    return Number(horas) * 60 + Number(minutos) + (Number(segundos) >= 30 ? 1 : 0);
  }

  private carregarDados(): void {
    this.registroService.listarTodos().subscribe({
      next: registros => {
        this.todosRegistros = [...registros].sort((a, b) => {
          const dataA = `${a.dataEstudo ?? ''}T${a.horarioInicio ?? '00:00:00'}`;
          const dataB = `${b.dataEstudo ?? ''}T${b.horarioInicio ?? '00:00:00'}`;
          return dataB.localeCompare(dataA);
        });
        this.aplicarFiltroPeriodo();
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao carregar acompanhamento:', erro);
        this.mensagemErro = 'Não foi possível carregar os dados de acompanhamento.';
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }

  private calcularResumos(): void {
    this.totalMinutos = this.registros.reduce(
      (total, registro) => total + this.tempoParaMinutos(registro.tempoEstudado),
      0
    );
    this.totalQuestoes = this.registros.reduce((total, registro) => total + (registro.questoesFeitas || 0), 0);
    this.totalAcertos = this.registros.reduce((total, registro) => total + (registro.questoesAcertadas || 0), 0);
    this.percentualAcertos = this.totalQuestoes
      ? Math.round((this.totalAcertos / this.totalQuestoes) * 100)
      : 0;

    this.materias = this.criarResumoMaterias();
    this.totalMaterias = this.materias.length;
    this.dias = this.criarResumoDias();
    this.tipos = this.criarResumoTipos();
  }

  private criarResumoMaterias(): ResumoMateria[] {
    const mapa = new Map<string, Omit<ResumoMateria, 'percentualAcertos' | 'percentualTempo' | 'percentualTotal' | 'cor'>>();

    this.registros.forEach(registro => {
      const nome = registro.materia?.nome || 'Sem matéria';
      const resumo = mapa.get(nome) ?? { nome, minutos: 0, questoes: 0, acertos: 0 };
      resumo.minutos += this.tempoParaMinutos(registro.tempoEstudado);
      resumo.questoes += registro.questoesFeitas || 0;
      resumo.acertos += registro.questoesAcertadas || 0;
      mapa.set(nome, resumo);
    });

    const maiorTempo = Math.max(...Array.from(mapa.values()).map(item => item.minutos), 0);
    return Array.from(mapa.values())
      .map(item => ({
        ...item,
        percentualAcertos: item.questoes ? Math.round((item.acertos / item.questoes) * 100) : 0,
        percentualTempo: maiorTempo ? Math.round((item.minutos / maiorTempo) * 100) : 0,
        percentualTotal: this.totalMinutos ? Math.round((item.minutos / this.totalMinutos) * 1000) / 10 : 0,
        cor: this.corDaMateria(item.nome)
      }))
      .sort((a, b) => b.minutos - a.minutos);
  }

  private criarResumoDias(): ResumoDia[] {
    const minutosPorDia = new Map<string, number>();
    const minutosPorMateriaEDia = new Map<string, Map<string, number>>();
    this.registros.forEach(registro => {
      const data = registro.dataEstudo?.substring(0, 10);
      if (!data) return;
      const minutos = this.tempoParaMinutos(registro.tempoEstudado);
      const materia = registro.materia?.nome || 'Sem matéria';
      minutosPorDia.set(data, (minutosPorDia.get(data) ?? 0) + minutos);
      const materiasDoDia = minutosPorMateriaEDia.get(data) ?? new Map<string, number>();
      materiasDoDia.set(materia, (materiasDoDia.get(materia) ?? 0) + minutos);
      minutosPorMateriaEDia.set(data, materiasDoDia);
    });

    const inicio = this.inicioPeriodo ?? this.dataDoPrimeiroRegistro() ?? new Date();
    const fim = this.fimPeriodo ?? this.dataDoUltimoRegistro() ?? inicio;
    const quantidadeDias = this.diferencaEmDias(inicio, fim) + 1;
    const agruparPorMes = quantidadeDias > 62;
    const datas = agruparPorMes ? this.criarMeses(inicio, fim) : this.criarDias(inicio, fim);

    const dias = datas.map(data => {
      const dataChave = this.dataLocal(data);
      let minutos = 0;
      const materiasDoPeriodo = new Map<string, number>();
      if (agruparPorMes) {
        const prefixo = dataChave.substring(0, 7);
        minutos = Array.from(minutosPorDia.entries())
          .filter(([chave]) => chave.startsWith(prefixo))
          .reduce((total, [, valor]) => total + valor, 0);
        Array.from(minutosPorMateriaEDia.entries())
          .filter(([chave]) => chave.startsWith(prefixo))
          .forEach(([, materias]) => materias.forEach((valor, nome) => {
            materiasDoPeriodo.set(nome, (materiasDoPeriodo.get(nome) ?? 0) + valor);
          }));
      } else {
        minutos = minutosPorDia.get(dataChave) ?? 0;
        minutosPorMateriaEDia.get(dataChave)?.forEach((valor, nome) => materiasDoPeriodo.set(nome, valor));
      }

      return {
        data: dataChave,
        rotulo: agruparPorMes
          ? data.toLocaleDateString('pt-BR', { month: 'short', year: quantidadeDias > 370 ? '2-digit' : undefined })
          : data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
        minutos,
        percentual: 0,
        segmentos: Array.from(materiasDoPeriodo.entries())
          .map(([nome, tempo]) => ({ nome, minutos: tempo, altura: 0, cor: this.corDaMateria(nome) }))
          .sort((a, b) => b.minutos - a.minutos)
      };
    });
    const maiorTempo = Math.max(...dias.map(dia => dia.minutos), 0);

    return dias.map(dia => ({
      ...dia,
      percentual: maiorTempo ? Math.round((dia.minutos / maiorTempo) * 100) : 0,
      segmentos: dia.segmentos.map(segmento => ({
        ...segmento,
        altura: maiorTempo ? (segmento.minutos / maiorTempo) * 100 : 0
      }))
    }));
  }

  private criarResumoTipos(): ResumoTipo[] {
    const mapa = new Map<string, Omit<ResumoTipo, 'percentual'>>();
    this.registros.forEach(registro => {
      const nome = registro.tipoRegistro?.nome || 'Não informado';
      const resumo = mapa.get(nome) ?? { nome, quantidade: 0, minutos: 0 };
      resumo.quantidade += 1;
      resumo.minutos += this.tempoParaMinutos(registro.tempoEstudado);
      mapa.set(nome, resumo);
    });

    return Array.from(mapa.values())
      .map(item => ({
        ...item,
        percentual: this.totalMinutos ? Math.round((item.minutos / this.totalMinutos) * 100) : 0
      }))
      .sort((a, b) => b.minutos - a.minutos);
  }

  private definirPeriodo(periodo: Exclude<TipoPeriodo, 'personalizado'>): void {
    const ano = this.dataReferencia.getFullYear();
    const mes = this.dataReferencia.getMonth();

    if (periodo === 'semana') {
      this.inicioPeriodo = this.adicionarDias(this.dataReferencia, -this.dataReferencia.getDay());
      this.fimPeriodo = this.adicionarDias(this.inicioPeriodo, 6);
    } else if (periodo === 'mes') {
      this.inicioPeriodo = new Date(ano, mes, 1);
      this.fimPeriodo = new Date(ano, mes + 1, 0);
    } else if (periodo === 'ano') {
      this.inicioPeriodo = new Date(ano, 0, 1);
      this.fimPeriodo = new Date(ano, 11, 31);
    } else {
      this.inicioPeriodo = null;
      this.fimPeriodo = null;
    }
  }

  private aplicarFiltroPeriodo(): void {
    this.registros = this.todosRegistros.filter(registro => {
      const data = registro.dataEstudo?.substring(0, 10);
      if (!data || this.periodoAtivo === 'total') return this.periodoAtivo === 'total';
      const inicio = this.inicioPeriodo ? this.dataLocal(this.inicioPeriodo) : '';
      const fim = this.fimPeriodo ? this.dataLocal(this.fimPeriodo) : '';
      return data >= inicio && data <= fim;
    });
    this.calcularResumos();
  }

  private criarDias(inicio: Date, fim: Date): Date[] {
    const dias: Date[] = [];
    for (let data = new Date(inicio); data <= fim; data = this.adicionarDias(data, 1)) {
      dias.push(data);
    }
    return dias;
  }

  private criarMeses(inicio: Date, fim: Date): Date[] {
    const meses: Date[] = [];
    let data = new Date(inicio.getFullYear(), inicio.getMonth(), 1);
    const limite = new Date(fim.getFullYear(), fim.getMonth(), 1);
    while (data <= limite) {
      meses.push(data);
      data = new Date(data.getFullYear(), data.getMonth() + 1, 1);
    }
    return meses;
  }

  private dataDoPrimeiroRegistro(): Date | null {
    const data = this.todosRegistros.at(-1)?.dataEstudo;
    return data ? this.dataDeCampo(data.substring(0, 10)) : null;
  }

  private dataDoUltimoRegistro(): Date | null {
    const data = this.todosRegistros[0]?.dataEstudo;
    return data ? this.dataDeCampo(data.substring(0, 10)) : null;
  }

  private adicionarDias(data: Date, quantidade: number): Date {
    return new Date(data.getFullYear(), data.getMonth(), data.getDate() + quantidade);
  }

  private diferencaEmDias(inicio: Date, fim: Date): number {
    const inicioUtc = Date.UTC(inicio.getFullYear(), inicio.getMonth(), inicio.getDate());
    const fimUtc = Date.UTC(fim.getFullYear(), fim.getMonth(), fim.getDate());
    return Math.round((fimUtc - inicioUtc) / 86_400_000);
  }

  private dataDeCampo(valor: string): Date | null {
    const [ano, mes, dia] = valor.split('-').map(Number);
    return ano && mes && dia ? new Date(ano, mes - 1, dia) : null;
  }

  private dataCurta(data: Date): string {
    return data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  private corDaMateria(nome: string): string {
    let hash = 0;
    for (const caractere of nome) hash = (hash * 31 + caractere.charCodeAt(0)) | 0;
    return this.coresMaterias[Math.abs(hash) % this.coresMaterias.length];
  }

  private dataLocal(data: Date): string {
    return `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}-${String(data.getDate()).padStart(2, '0')}`;
  }
}
