import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface EtapaMetodologia {
  sigla: string;
  nome: string;
  descricao: string;
  minutos: number;
  grupo: 'novo' | 'antigo';
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
