import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type StatusCaminho = 'Feito' | 'Fazendo' | 'A fazer';

interface MarcoCaminho {
  nome: string;
  status: StatusCaminho;
}

interface AreaCaminho {
  nome: string;
  descricao: string;
  marcos: MarcoCaminho[];
}

@Component({
  selector: 'app-caminho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caminho.html',
  styleUrl: './caminho.css'
})
export class CaminhoComponent {
  areas: AreaCaminho[] = [
    {
      nome: 'Graduação / Pesquisa',
      descricao: 'Formação acadêmica, produção e aprofundamento científico.',
      marcos: [
        { nome: 'Engenharia elétrica', status: 'Feito' },
        { nome: 'Computação', status: 'Feito' },
        { nome: 'Análise de sistemas', status: 'Feito' },
        { nome: 'Técnico em informática', status: 'Feito' },
        { nome: 'Pós-graduação', status: 'A fazer' },
        { nome: 'Mestrado', status: 'A fazer' },
        { nome: 'Base - Computação (POSCOMP) e Matemática', status: 'A fazer' },
        { nome: 'Artigos para congresso', status: 'Fazendo' }
      ]
    },
    {
      nome: 'Concursos',
      descricao: 'Construção da base e preparação para os próximos níveis.',
      marcos: [
        { nome: 'Bombeiro', status: 'Feito' },
        { nome: 'Detran/AP', status: 'Feito' },
        { nome: 'Concurso técnico tribunal TRT 1', status: 'Feito' },
        { nome: 'Concurso Tribunal do Estado do Amapá', status: 'Feito' },
        { nome: 'Estudo para concurso de alto nível (Bacen, CGU)', status: 'Fazendo' },
        { nome: 'Receita Federal ou TCU', status: 'A fazer' }
      ]
    },
    {
      nome: 'Línguas',
      descricao: 'Idiomas que ampliam possibilidades acadêmicas e profissionais.',
      marcos: [
        { nome: 'Inglês', status: 'Feito' },
        { nome: 'Espanhol', status: 'Feito' },
        { nome: 'Francês', status: 'Fazendo' },
        { nome: 'Alemão', status: 'A fazer' }
      ]
    },
    {
      nome: 'Habilidades em tecnologia',
      descricao: 'Competências técnicas para apoiar os projetos e a carreira.',
      marcos: [
        { nome: 'Linguagem Java', status: 'Fazendo' },
        { nome: 'Linguagem JavaScript', status: 'Fazendo' },
        { nome: 'Fundamentos de desenvolvimento web e algoritmos', status: 'Fazendo' },
        { nome: 'Banco de dados', status: 'Fazendo' },
        { nome: 'Engenharia de software', status: 'A fazer' },
        { nome: 'Arquitetura de software', status: 'A fazer' },
        { nome: 'CI/CD e Infraestrutura', status: 'A fazer' },
        { nome: 'Inteligência Artificial na prática', status: 'A fazer' }
      ]
    },
    {
      nome: 'Outras metas',
      descricao: 'Objetivos pessoais e profissionais para o futuro.',
      marcos: [
        {
          nome: 'Desenvolver uma aplicação ou empresa voltada ao desenvolvimento de sistemas para ganhar uma boa grana',
          status: 'A fazer'
        }
      ]
    }
  ];

  todosOsMarcos(): MarcoCaminho[] {
    return this.areas.flatMap(area => area.marcos);
  }

  totalMarcos(): number {
    return this.todosOsMarcos().length;
  }

  totalPorStatus(status: StatusCaminho): number {
    return this.todosOsMarcos().filter(marco => marco.status === status).length;
  }
}
