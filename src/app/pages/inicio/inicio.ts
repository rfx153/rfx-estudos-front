import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { Registro, RegistroService } from '../../services/registro.service';
import { MetaDiariaResumo, MetaDiariaService } from '../../services/meta-diaria.service';
import { RegistroDetalhesModalComponent } from '../../shared/registro-detalhes-modal/registro-detalhes-modal';
import { classeDesempenho } from '../../shared/desempenho';

interface MateriaEstudadaHoje {
  id: number | string;
  nome: string;
  assuntos: string[];
  questoesFeitas: number;
  questoesAcertadas: number;
  percentualAcertos: string;
  registros: Registro[];
}

interface AtalhoEstudo {
  nome: string;
  descricao: string;
  url: string;
  icone: string;
}

interface ResumoDiaEstudo {
  data: string;
  rotulo: string;
  descricao: string;
  minutos: number;
  altura: number;
  hoje: boolean;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzSpinModule, RegistroDetalhesModalComponent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent implements OnInit {
  private registroService = inject(RegistroService);
  private metaDiariaService = inject(MetaDiariaService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  readonly classeDesempenho = classeDesempenho;

  carregando = true;
  horasEstudadasHoje = '0h 00min';
  questoesFeitasHoje = 0;
  percentualAcertosHoje = '0%';
  materiasEstudadasHoje = 0;
  materiasComAssuntosHoje: MateriaEstudadaHoje[] = [];
  detalhesVisiveis = false;
  detalhesTitulo = 'Detalhes do estudo';
  registrosSelecionados: Registro[] = [];
  saudacao = 'Bom dia, Rafael.';
  perfilVisivel = false;
  metaDiariaHoje: MetaDiariaResumo | null = null;
  carregandoResumoSemanal = true;
  possuiEstudosResumoSemanal = false;
  resumoSemanalVisivel = false;
  resumoUltimosSeteDias: ResumoDiaEstudo[] = [];
  atalhosEstudo: AtalhoEstudo[] = [
    {
      nome: 'Estratégia novo',
      descricao: 'Abrir painel novo',
      url: 'https://concursos.estrategia.com/inicio?from=sidebar',
      icone: 'EN'
    },
    {
      nome: 'Estratégia antigo',
      descricao: 'Abrir dashboard de cursos',
      url: 'https://www.estrategiaconcursos.com.br/app/',
      icone: 'EA'
    },
    {
      nome: 'Tec Concursos',
      descricao: 'Resolver questões',
      url: 'https://www.tecconcursos.com.br/',
      icone: 'TC'
    }
  ];

  ngOnInit(): void {
    this.definirSaudacao();
    this.resumoUltimosSeteDias = this.criarResumoUltimosSeteDias();
    this.carregarResumoDeHoje();
    this.carregarMetaDiariaDeHoje();
  }

  alternarPerfil(): void {
    this.perfilVisivel = !this.perfilVisivel;
  }

  alternarResumoSemanal(): void {
    this.resumoSemanalVisivel = !this.resumoSemanalVisivel;
  }

  abrirDetalhesMateria(materia: MateriaEstudadaHoje): void {
    this.detalhesTitulo = `Registros de ${materia.nome}`;
    this.registrosSelecionados = materia.registros;
    this.detalhesVisiveis = true;
  }

  editarRegistro(registro: Registro): void {
    this.detalhesVisiveis = false;
    this.router.navigate(['/novo-registro'], { state: { registroParaEditar: registro } });
  }

  private carregarResumoDeHoje(): void {
    this.carregando = true;

    this.registroService.listarHoje().subscribe({
      next: registros => {
        // O endpoint pode usar o fuso do servidor. Como `dataEstudo` é um
        // LocalDate (YYYY-MM-DD), confirme o dia no fuso local do navegador.
        const hoje = this.formatarDataLocal(new Date());
        const registrosDeHoje = registros.filter(registro => registro.dataEstudo?.substring(0, 10) === hoje);
        const minutosEstudados = registrosDeHoje.reduce(
          (total, registro) => total + this.tempoParaMinutos(registro.tempoEstudado),
          0
        );

        this.horasEstudadasHoje = this.formatarMinutos(minutosEstudados);
        this.questoesFeitasHoje = registrosDeHoje.reduce(
          (total, registro) => total + (registro.questoesFeitas || 0),
          0
        );
        const questoesAcertadasHoje = registrosDeHoje.reduce(
          (total, registro) => total + (registro.questoesAcertadas || 0),
          0
        );
        this.percentualAcertosHoje = this.calcularPercentualAcertos(questoesAcertadasHoje, this.questoesFeitasHoje);
        this.materiasEstudadasHoje = new Set(
          registrosDeHoje
            .map(registro => registro.materia?.id ?? registro.materia?.nome)
            .filter(Boolean)
        ).size;
        this.materiasComAssuntosHoje = this.agruparMateriasEAssuntos(registrosDeHoje);

        this.carregando = false;
        this.cdr.detectChanges();
        this.carregarResumoSemanalEmSegundoPlano();
      },
      error: erro => {
        console.error('Erro ao carregar resumo de hoje:', erro);
        this.carregando = false;
        this.cdr.detectChanges();
        this.carregarResumoSemanalEmSegundoPlano();
      }
    });
  }

  private carregarResumoSemanalEmSegundoPlano(): void {
    // O gráfico é complementar: aguarda a primeira pintura da página para
    // não disputar carregamento com os indicadores principais.
    setTimeout(() => {
      this.registroService.listarRecentes(100).subscribe({
        next: registros => {
          const minutosPorData = new Map<string, number>();
          const datasDoGrafico = new Set(this.criarResumoUltimosSeteDias().map(dia => dia.data));

          registros.forEach(registro => {
            const data = registro.dataEstudo?.substring(0, 10);
            if (!data || !datasDoGrafico.has(data)) return;

            minutosPorData.set(
              data,
              (minutosPorData.get(data) ?? 0) + this.tempoParaMinutos(registro.tempoEstudado)
            );
          });

          const maiorValor = Math.max(...Array.from(minutosPorData.values()), 0);
          this.resumoUltimosSeteDias = this.criarResumoUltimosSeteDias(minutosPorData, maiorValor);
          this.possuiEstudosResumoSemanal = maiorValor > 0;
          this.carregandoResumoSemanal = false;
          this.cdr.detectChanges();
        },
        error: erro => {
          console.error('Erro ao carregar resumo semanal:', erro);
          this.carregandoResumoSemanal = false;
          this.cdr.detectChanges();
        }
      });
    }, 200);
  }

  private criarResumoUltimosSeteDias(minutosPorData = new Map<string, number>(), maiorValor = 0): ResumoDiaEstudo[] {
    const hoje = new Date();
    const nomesDias = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

    return Array.from({ length: 7 }, (_, indice) => {
      const data = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - (6 - indice));
      const dataFormatada = this.formatarDataLocal(data);
      const minutos = minutosPorData.get(dataFormatada) ?? 0;

      return {
        data: dataFormatada,
        rotulo: indice === 6 ? 'hoje' : nomesDias[data.getDay()],
        descricao: `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}/${data.getFullYear()}`,
        minutos,
        altura: minutos && maiorValor ? Math.max(Math.round((minutos / maiorValor) * 100), 8) : 0,
        hoje: indice === 6
      };
    });
  }

  tempoResumido(minutos: number): string {
    if (minutos < 60) return `${minutos} min`;

    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return minutosRestantes ? `${horas}h ${minutosRestantes}min` : `${horas}h`;
  }

  percentualComoNumero(valor: string): number {
    return Number(valor.replace('%', '')) || 0;
  }

  private tempoParaMinutos(tempo?: string): number {
    if (!tempo) return 0;

    const [horas = '0', minutos = '0'] = tempo.split(':');
    return Number(horas) * 60 + Number(minutos);
  }

  formatarMinutos(totalMinutos: number): string {
    const horas = Math.floor(totalMinutos / 60);
    const minutos = totalMinutos % 60;

    return `${horas}h ${String(minutos).padStart(2, '0')}min`;
  }

  percentualMetaDiaria(): number {
    if (!this.metaDiariaHoje?.metaMinutos) return 0;
    return Math.min(
      Math.round((this.metaDiariaHoje.tempoRealizadoMinutos / this.metaDiariaHoje.metaMinutos) * 100),
      100
    );
  }

  private carregarMetaDiariaDeHoje(): void {
    const hoje = this.formatarDataLocal(new Date());
    this.metaDiariaService.resumir(hoje, hoje).subscribe({
      next: metas => {
        this.metaDiariaHoje = metas[0] ?? null;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao carregar meta diária:', erro);
        this.metaDiariaHoje = null;
        this.cdr.detectChanges();
      }
    });
  }

  private calcularPercentualAcertos(acertos: number, feitas: number): string {
    if (!feitas) return '0%';

    return `${Math.round((acertos / feitas) * 100)}%`;
  }

  private definirSaudacao(): void {
    const hora = new Date().getHours();

    if (hora >= 18) {
      this.saudacao = 'Boa noite, Rafael.';
      return;
    }

    if (hora >= 12) {
      this.saudacao = 'Boa tarde, Rafael.';
      return;
    }

    this.saudacao = 'Bom dia, Rafael.';
  }

  private formatarDataLocal(data: Date): string {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

  private agruparMateriasEAssuntos(registros: Registro[]): MateriaEstudadaHoje[] {
    const materias = new Map<number | string, MateriaEstudadaHoje>();

    registros.forEach(registro => {
      const materiaNome = registro.materia?.nome;
      const assuntoNome = registro.assunto?.nome;

      if (!materiaNome) return;

      const materiaId = registro.materia?.id ?? materiaNome;
      const materia = materias.get(materiaId) ?? {
        id: materiaId,
        nome: materiaNome,
        assuntos: [],
        questoesFeitas: 0,
        questoesAcertadas: 0,
        percentualAcertos: '0%',
        registros: []
      };

      if (assuntoNome && !materia.assuntos.includes(assuntoNome)) {
        materia.assuntos.push(assuntoNome);
      }

      materia.questoesFeitas += registro.questoesFeitas || 0;
      materia.questoesAcertadas += registro.questoesAcertadas || 0;
      materia.percentualAcertos = this.calcularPercentualAcertos(materia.questoesAcertadas, materia.questoesFeitas);
      materia.registros.push(registro);

      materias.set(materiaId, materia);
    });

    return Array.from(materias.values()).sort((a, b) => a.nome.localeCompare(b.nome));
  }
}
