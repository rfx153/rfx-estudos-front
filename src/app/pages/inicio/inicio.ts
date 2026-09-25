import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { Registro, RegistroService } from '../../services/registro.service';
import { RegistroDetalhesModalComponent } from '../../shared/registro-detalhes-modal/registro-detalhes-modal';

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

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzSpinModule, RegistroDetalhesModalComponent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent implements OnInit {
  private registroService = inject(RegistroService);
  private cdr = inject(ChangeDetectorRef);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

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
  fraseMotivacional = '';
  somBloqueado = false;
  perfilVisivel = false;
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

  private readonly frasesMotivacionais = [
    'Um bloco bem estudado hoje vira tranquilidade na prova.',
    'Constância ganha de intensidade quando o plano é passar.',
    'Cada questão corrigida é um erro a menos no dia decisivo.',
    'Estudo registrado é progresso que você consegue enxergar.',
    'A aprovação gosta de rotina, revisão e um pouco de teimosia.',
    'Hoje não precisa ser perfeito; precisa contar.',
    'Quem mede o estudo aprende a ajustar a rota.',
    'Pequenas sessões bem feitas empilham resultados grandes.'
  ];

  ngOnInit(): void {
    this.definirSaudacao();
    this.sortearFraseMotivacional();
    this.carregarResumoDeHoje();
    this.tentarTocarSomInicial();
  }

  tocarSomRetro(): void {
    this.tocarChimeRetro();
    this.somBloqueado = false;
  }

  alternarPerfil(): void {
    this.perfilVisivel = !this.perfilVisivel;
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
        const registrosDeHoje = registros;
        const minutosEstudados = registrosDeHoje.reduce(
          (total, registro) => total + this.tempoParaMinutos(registro.tempoEstudado),
          0
        );

        this.horasEstudadasHoje = this.formatarMinutos(minutosEstudados);
        this.questoesFeitasHoje = registrosDeHoje.reduce(
          (total, registro) => total + (registro.questoesFeitas || 0) + (registro.questoesRevisaoFeitas || 0),
          0
        );
        const questoesAcertadasHoje = registrosDeHoje.reduce(
          (total, registro) => total + (registro.questoesAcertadas || 0) + (registro.questoesRevisaoAcertadas || 0),
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
      },
      error: erro => {
        console.error('Erro ao carregar resumo de hoje:', erro);
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }

  private tempoParaMinutos(tempo?: string): number {
    if (!tempo) return 0;

    const [horas = '0', minutos = '0'] = tempo.split(':');
    return Number(horas) * 60 + Number(minutos);
  }

  private formatarMinutos(totalMinutos: number): string {
    const horas = Math.floor(totalMinutos / 60);
    const minutos = totalMinutos % 60;

    return `${horas}h ${String(minutos).padStart(2, '0')}min`;
  }

  percentualMeta(valor: number, meta: number): number {
    return Math.min(Math.round((valor / meta) * 100), 100);
  }

  private calcularPercentualAcertos(acertos: number, feitas: number): string {
    if (!feitas) return '0%';

    return `${Math.round((acertos / feitas) * 100)}%`;
  }

  private sortearFraseMotivacional(): void {
    const indice = Math.floor(Math.random() * this.frasesMotivacionais.length);
    this.fraseMotivacional = this.frasesMotivacionais[indice];
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

  private tentarTocarSomInicial(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      try {
        this.tocarChimeRetro();
      } catch {
        this.somBloqueado = true;
        this.cdr.detectChanges();
      }
    }, 450);
  }

  private tocarChimeRetro(): void {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    const audioContext = new AudioContextClass();

    if (audioContext.state === 'suspended') {
      audioContext.resume().catch(() => {
        this.somBloqueado = true;
        this.cdr.detectChanges();
      });
    }

    const masterGain = audioContext.createGain();
    masterGain.gain.setValueAtTime(0.08, audioContext.currentTime);
    masterGain.connect(audioContext.destination);

    const notas = [
      { frequencia: 523.25, inicio: 0, duracao: 0.16 },
      { frequencia: 659.25, inicio: 0.13, duracao: 0.2 },
      { frequencia: 783.99, inicio: 0.32, duracao: 0.34 },
      { frequencia: 1046.5, inicio: 0.52, duracao: 0.42 }
    ];

    notas.forEach(nota => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const inicio = audioContext.currentTime + nota.inicio;
      const fim = inicio + nota.duracao;

      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(nota.frequencia, inicio);
      gain.gain.setValueAtTime(0, inicio);
      gain.gain.linearRampToValueAtTime(0.9, inicio + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, fim);

      oscillator.connect(gain);
      gain.connect(masterGain);
      oscillator.start(inicio);
      oscillator.stop(fim + 0.03);
    });
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

      materia.questoesFeitas += (registro.questoesFeitas || 0) + (registro.questoesRevisaoFeitas || 0);
      materia.questoesAcertadas += (registro.questoesAcertadas || 0) + (registro.questoesRevisaoAcertadas || 0);
      materia.percentualAcertos = this.calcularPercentualAcertos(materia.questoesAcertadas, materia.questoesFeitas);
      materia.registros.push(registro);

      materias.set(materiaId, materia);
    });

    return Array.from(materias.values()).sort((a, b) => a.nome.localeCompare(b.nome));
  }
}
