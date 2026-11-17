import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface EtapaMetodologia {
  sigla: string;
  nome: string;
  descricao: string;
  minutos: number;
  grupo: 'novo' | 'antigo';
}

interface EtapaMetodologiaMacro {
  numero: number;
  nome: string;
  descricao: string;
  praticas: string[];
  classe: string;
}

@Component({
  selector: 'app-metodologia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metodologia.html',
  styleUrl: './metodologia.css'
})
export class MetodologiaComponent {
  etapas: EtapaMetodologia[] = [
    { sigla: 'Q', nome: 'Questões do assunto antigo', descricao: 'Resolva questões para recuperar o que já foi estudado.', minutos: 5, grupo: 'novo' },
    { sigla: 'R', nome: 'Revisão do assunto antigo', descricao: 'Revise os erros e os pontos importantes do assunto anterior.', minutos: 3, grupo: 'novo' },
    { sigla: 'A', nome: 'Leitura do assunto novo', descricao: 'Leia e compreenda o novo conteúdo com atenção.', minutos: 34, grupo: 'novo' },
    { sigla: 'Q', nome: 'Questões do assunto novo', descricao: 'Resolva questões para aplicar o conteúdo recém-estudado.', minutos: 5, grupo: 'novo' },
    { sigla: 'R', nome: 'Revisão do assunto novo', descricao: 'Revise o conteúdo novo e consolide os pontos principais.', minutos: 3, grupo: 'novo' },
    { sigla: 'R', nome: 'Revisão do assunto antigo', descricao: 'Retome um assunto antigo para manter o conteúdo ativo.', minutos: 3, grupo: 'antigo' },
    { sigla: 'Q', nome: 'Questão do assunto antigo', descricao: 'Finalize testando a retenção do assunto revisado.', minutos: 5, grupo: 'antigo' }
  ];

  etapasMacro: EtapaMetodologiaMacro[] = [
    {
      numero: 1,
      nome: 'Assunto',
      descricao: 'Estude e compreenda o conteúdo central antes de avançar.',
      praticas: ['Leitura ativa', 'Compreensão do conteúdo'],
      classe: 'assunto'
    },
    {
      numero: 2,
      nome: 'Resumo',
      descricao: 'Organize o conhecimento em materiais rápidos de consultar.',
      praticas: ['Anki', 'Pastas no Drive', 'NotebookLM'],
      classe: 'resumo'
    },
    {
      numero: 3,
      nome: 'Questões',
      descricao: 'Teste a aplicação do conteúdo e identifique lacunas.',
      praticas: ['Questões do TEC', 'Questões geradas pelo LLM'],
      classe: 'questoes'
    },
    {
      numero: 4,
      nome: 'Revisão',
      descricao: 'Retome conteúdos anteriores para manter a retenção ativa.',
      praticas: ['Revisão dos últimos assuntos', 'Leitura do Anki', 'Resolver questões'],
      classe: 'revisao'
    }
  ];

  get etapasNovas(): EtapaMetodologia[] {
    return this.etapas.filter(etapa => etapa.grupo === 'novo');
  }

  get etapasAntigas(): EtapaMetodologia[] {
    return this.etapas.filter(etapa => etapa.grupo === 'antigo');
  }

  get totalMinutos(): number {
    return this.etapasNovas.reduce((total, etapa) => total + etapa.minutos, 0);
  }
}
