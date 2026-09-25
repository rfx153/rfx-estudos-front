import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';

interface PlanejamentoResumo {
  id: number;
  nome: string;
  descricao: string;
  status: 'Ativo' | 'Rascunho' | 'Pausado';
  cargaSemanal: number;
  progresso: number;
  disciplinas: number;
  revisoes: number;
}

interface SessaoPlanejada {
  dia: string;
  horario: string;
  disciplina: string;
  atividade: string;
  duracao: string;
  prioridade: 'Alta' | 'Media' | 'Baixa';
}

@Component({
  selector: 'app-planejamentos',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzTagModule],
  templateUrl: './planejamentos.html',
  styleUrl: './planejamentos.css'
})
export class PlanejamentosComponent {
  planejamentos: PlanejamentoResumo[] = [
    {
      id: 1,
      nome: 'Ciclo base SEFAZ',
      descricao: 'Distribuição inicial para consolidar teoria, questões e revisões curtas.',
      status: 'Ativo',
      cargaSemanal: 18,
      progresso: 42,
      disciplinas: 8,
      revisoes: 5
    },
    {
      id: 2,
      nome: 'Reta final discursivas',
      descricao: 'Blocos focados em escrita, jurisprudência e simulados comentados.',
      status: 'Rascunho',
      cargaSemanal: 10,
      progresso: 16,
      disciplinas: 4,
      revisoes: 2
    },
    {
      id: 3,
      nome: 'Manutenção de revisões',
      descricao: 'Rotina leve para manter assuntos sensíveis ativos na memória.',
      status: 'Pausado',
      cargaSemanal: 6,
      progresso: 68,
      disciplinas: 6,
      revisoes: 12
    }
  ];

  sessoesSemana: SessaoPlanejada[] = [
    {
      dia: 'Segunda',
      horario: '07:00',
      disciplina: 'Direito Constitucional',
      atividade: 'Teoria + mapa mental',
      duracao: '1h30',
      prioridade: 'Alta'
    },
    {
      dia: 'Terça',
      horario: '19:30',
      disciplina: 'Contabilidade',
      atividade: 'Questões comentadas',
      duracao: '2h',
      prioridade: 'Alta'
    },
    {
      dia: 'Quarta',
      horario: '07:00',
      disciplina: 'Direito Tributario',
      atividade: 'Revisão 7 dias',
      duracao: '1h',
      prioridade: 'Media'
    },
    {
      dia: 'Quinta',
      horario: '20:00',
      disciplina: 'Tecnologia da Informação',
      atividade: 'Resumo dirigido',
      duracao: '1h30',
      prioridade: 'Media'
    },
    {
      dia: 'Sabado',
      horario: '08:30',
      disciplina: 'Simulado misto',
      atividade: 'Bloco de 60 questoes',
      duracao: '3h',
      prioridade: 'Baixa'
    }
  ];

  get totalHorasSemana(): number {
    return this.planejamentos.reduce((total, planejamento) => total + planejamento.cargaSemanal, 0);
  }

  get totalDisciplinas(): number {
    return this.planejamentos.reduce((total, planejamento) => total + planejamento.disciplinas, 0);
  }

  get totalRevisoes(): number {
    return this.planejamentos.reduce((total, planejamento) => total + planejamento.revisoes, 0);
  }

  corStatus(status: PlanejamentoResumo['status']): string {
    const cores = {
      Ativo: 'green',
      Rascunho: 'blue',
      Pausado: 'default'
    };

    return cores[status];
  }

  corPrioridade(prioridade: SessaoPlanejada['prioridade']): string {
    const cores = {
      Alta: 'red',
      Media: 'blue',
      Baixa: 'default'
    };

    return cores[prioridade];
  }

  trackByPlanejamentoId(_: number, planejamento: PlanejamentoResumo): number {
    return planejamento.id;
  }

  trackBySessao(_: number, sessao: SessaoPlanejada): string {
    return `${sessao.dia}-${sessao.horario}-${sessao.disciplina}`;
  }
}
