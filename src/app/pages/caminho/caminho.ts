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
        { nome: 'Artigos para congresso', status: 'Fazendo' }
      ]
    },
    {
      nome: 'Concursos',
      descricao: 'Construção da base e preparação para os próximos níveis.',
      marcos: [
        { nome: 'Concurso tribunal', status: 'Feito' },
        { nome: 'Refinar a base', status: 'A fazer' },
        { nome: 'Estudos para concurso de alto nível', status: 'Fazendo' }
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
      marcos: []
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
