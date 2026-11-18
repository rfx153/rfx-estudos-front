import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MateriaService } from '../../services/materia.service';
import { PlanejamentoService } from '../../services/planejamento.service';
import { RegistroService } from '../../services/registro.service';
import { PlanejamentoDetalheComponent } from './planejamento-detalhe';

describe('PlanejamentoDetalheComponent', () => {
  const materia = { id: 1, nome: 'Português' };
  const assunto = { id: 2, nome: 'Interpretação de texto', materia };
  const materiasPlanejadas = [
    { id: 10, materia, ordem: 1 },
    { id: 11, materia, ordem: 2 },
  ];
  const estrutura = {
    grupos: [
      { id: 20, planejamentoMateriaId: 10, tipo: 'BLOCO' as const, nome: 'Teoria' },
      { id: 21, planejamentoMateriaId: 11, tipo: 'BLOCO' as const, nome: 'Revisão' },
    ],
    itens: [
      {
        id: 30,
        grupoId: 20,
        assuntoId: assunto.id,
        assuntoNome: assunto.nome,
      },
    ],
    etapas: [],
  };

  let planejamentoService: {
    adicionarMateria: ReturnType<typeof vi.fn>;
    adicionarItem: ReturnType<typeof vi.fn>;
    [chave: string]: unknown;
  };

  beforeEach(async () => {
    planejamentoService = {
      buscarPorId: () => of({ id: 1, nome: 'Plano de estudos' }),
      listarGruposMaterias: () => of([]),
      listarMaterias: () => of(materiasPlanejadas),
      buscarEstrutura: () => of(estrutura),
      adicionarMateria: vi.fn(() => of(materiasPlanejadas[1])),
      adicionarItem: vi.fn(() => of({ id: 31, assunto })),
      listarItens: () => of([]),
      listarGrupos: () => of([]),
    };

    await TestBed.configureTestingModule({
      imports: [PlanejamentoDetalheComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } },
        },
        { provide: Router, useValue: { navigate: vi.fn() } },
        { provide: PlanejamentoService, useValue: planejamentoService },
        { provide: MateriaService, useValue: { listarTodas: () => of([materia]) } },
        {
          provide: RegistroService,
          useValue: { listarAssuntosPorMateria: () => of([assunto]) },
        },
        {
          provide: NzMessageService,
          useValue: { success: vi.fn(), warning: vi.fn(), error: vi.fn() },
        },
      ],
    }).compileComponents();
  });

  afterEach(() => vi.restoreAllMocks());

  it('pede confirmação antes de adicionar uma matéria repetida', () => {
    const fixture = TestBed.createComponent(PlanejamentoDetalheComponent);
    fixture.componentInstance.ngOnInit();
    const component = fixture.componentInstance;
    component.materiaForm.patchValue({ tipo: 'MATERIA', materiaIds: [materia.id] });
    const confirmar = vi.spyOn(window, 'confirm').mockReturnValue(false);

    component.salvarMateria();

    expect(confirmar).toHaveBeenCalledWith(
      'A matéria "Português" já está cadastrada neste planejamento. Deseja adicioná-la novamente?',
    );
    expect(planejamentoService.adicionarMateria).not.toHaveBeenCalled();

    confirmar.mockReturnValue(true);
    component.salvarMateria();
    expect(planejamentoService.adicionarMateria).toHaveBeenCalledOnce();
  });

  it('pede confirmação antes de repetir um assunto em outra ocorrência da matéria', () => {
    const fixture = TestBed.createComponent(PlanejamentoDetalheComponent);
    fixture.componentInstance.ngOnInit();
    const component = fixture.componentInstance;
    component.materiaSelecionada = materiasPlanejadas[1];
    component.grupoSelecionado = { id: 21, tipo: 'BLOCO', nome: 'Revisão' };
    component.assuntos = [assunto];
    component.itemForm.patchValue({ assuntoIds: [assunto.id] });
    const confirmar = vi.spyOn(window, 'confirm').mockReturnValue(false);

    component.salvarItem();

    expect(confirmar).toHaveBeenCalledWith(
      'O assunto "Interpretação de texto" já está cadastrado neste planejamento. Deseja adicioná-lo novamente?',
    );
    expect(planejamentoService.adicionarItem).not.toHaveBeenCalled();

    confirmar.mockReturnValue(true);
    component.salvarItem();
    expect(planejamentoService.adicionarItem).toHaveBeenCalledOnce();
  });
});
