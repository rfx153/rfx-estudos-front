import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PlanejamentoService } from '../../services/planejamento.service';
import { RegistroService } from '../../services/registro.service';
import { PlanejamentoVisualizacaoComponent } from './planejamento-visualizacao';

describe('PlanejamentoVisualizacaoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanejamentoVisualizacaoComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } },
        },
        {
          provide: PlanejamentoService,
          useValue: {
            buscarPorId: () => of({ id: 1, nome: 'Plano de estudos' }),
            listarGruposMaterias: () => of([]),
            listarMaterias: () =>
              of([
                {
                  id: 10,
                  materia: { id: 20, nome: 'Português' },
                  ordem: 1,
                },
              ]),
            listarAproveitamentos: () => of([]),
            buscarEstrutura: () =>
              of({
                grupos: [
                  {
                    id: 30,
                    planejamentoMateriaId: 10,
                    tipo: 'ASSUNTO',
                    ordem: 1,
                  },
                ],
                itens: [
                  {
                    id: 40,
                    grupoId: 30,
                    assuntoId: 50,
                    assuntoNome: 'Interpretação de texto',
                    ordem: 1,
                  },
                ],
                etapas: [],
              }),
          },
        },
        {
          provide: RegistroService,
          useValue: {
            listarTiposRegistro: () => of([]),
            listarRecentes: () => of([]),
          },
        },
        {
          provide: NzMessageService,
          useValue: { success: () => undefined, warning: () => undefined, error: () => undefined },
        },
      ],
    }).compileComponents();
  });

  it('mantém o card estável ao expandir uma matéria', () => {
    const fixture = TestBed.createComponent(PlanejamentoVisualizacaoComponent);
    fixture.detectChanges();

    const cardAntes = fixture.nativeElement.querySelector('.materia') as HTMLElement;
    const botao = cardAntes.querySelector('.materia-trigger') as HTMLButtonElement;

    botao.click();
    fixture.detectChanges();

    const cardDepois = fixture.nativeElement.querySelector('.materia') as HTMLElement;
    expect(cardDepois).toBe(cardAntes);
    expect(cardDepois.textContent).toContain('Interpretação de texto');
  });
});
