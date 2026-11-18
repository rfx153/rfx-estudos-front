import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of, Subject } from 'rxjs';
import { provideNzI18n, pt_BR } from 'ng-zorro-antd/i18n';
import { provideNzNativeDateAdapter } from 'ng-zorro-antd/core/time';
import { NzModalService } from 'ng-zorro-antd/modal';

import { MaterialGuiaService } from '../../services/material-guia.service';
import { Materia, MateriaService } from '../../services/materia.service';
import {
  PlanejamentoDestinoRegistro,
  PlanejamentoService,
} from '../../services/planejamento.service';
import { Assunto, RegistroService } from '../../services/registro.service';
import { RegistroListaComponent } from './registro-lista';

registerLocaleData(pt);

describe('RegistroListaComponent', () => {
  let destinos$: Subject<PlanejamentoDestinoRegistro[]>;
  let criarMateria$: Subject<Materia>;
  let criarAssunto$: Subject<Assunto>;
  let criarMateria: ReturnType<typeof vi.fn>;
  let criarAssunto: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    destinos$ = new Subject<PlanejamentoDestinoRegistro[]>();
    criarMateria$ = new Subject<Materia>();
    criarAssunto$ = new Subject<Assunto>();
    criarMateria = vi.fn(() => criarMateria$);
    criarAssunto = vi.fn(() => criarAssunto$);
    await TestBed.configureTestingModule({
      imports: [RegistroListaComponent],
      providers: [
        provideRouter([]),
        provideNoopAnimations(),
        provideNzI18n(pt_BR),
        provideNzNativeDateAdapter({ locale: 'pt-BR', firstDayOfWeek: 1 }),
        NzModalService,
        {
          provide: MateriaService,
          useValue: { listarTodas: () => of([]), criar: criarMateria },
        },
        {
          provide: PlanejamentoService,
          useValue: {
            listarTodos: () => of([]),
            listarMaterias: () => of([]),
            listarDestinosRegistro: () => destinos$,
          },
        },
        {
          provide: MaterialGuiaService,
          useValue: { listarTodos: () => of([]), criar: () => of({}) },
        },
        {
          provide: RegistroService,
          useValue: {
            listarTiposRegistro: () => of([]),
            listarAssuntosPorMateria: () => of([]),
            criarAssunto,
          },
        },
      ],
    }).compileComponents();
  });

  it('deve criar a tela de novo registro', () => {
    const fixture = TestBed.createComponent(RegistroListaComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Novo registro de estudo');
  });

  it('deve exibir imediatamente a escolha quando houver destinos repetidos', async () => {
    const fixture = TestBed.createComponent(RegistroListaComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const agora = new Date();
    component.validateForm.patchValue(
      {
        materia: 1,
        assunto: 2,
        planejamento: 3,
        tipoRegistro: 4,
        dataEstudo: agora,
        horarioInicio: agora,
        tempoEstudado: agora,
      },
      { emitEvent: false },
    );

    component.submitForm();
    destinos$.next([
      {
        planejamentoMateriaId: 10,
        etapaId: 20,
        planejamentoNome: 'Plano',
        materiaNome: 'Português',
        materiaOrdem: 1,
      },
      {
        planejamentoMateriaId: 11,
        etapaId: 21,
        planejamentoNome: 'Plano',
        materiaNome: 'Português',
        materiaOrdem: 2,
      },
    ]);
    await fixture.whenStable();

    expect(component.modalDestinoAberto).toBe(true);
    expect(document.body.textContent).toContain('Escolha onde salvar no planejamento');
  });

  it('deve bloquear novos cliques enquanto cria uma matéria', () => {
    const fixture = TestBed.createComponent(RegistroListaComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const input = document.createElement('input');
    input.value = 'Português';

    component.cadastrarMateriaRapida(input);
    component.cadastrarMateriaRapida(input);

    expect(component.criandoMateria).toBe(true);
    expect(criarMateria).toHaveBeenCalledOnce();

    criarMateria$.next({ id: 1, nome: 'Português' });
    criarMateria$.complete();
    expect(component.criandoMateria).toBe(false);
  });

  it('deve bloquear novos cliques enquanto cria um assunto', () => {
    const fixture = TestBed.createComponent(RegistroListaComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    component.validateForm.patchValue({ materia: 1 }, { emitEvent: false });
    const input = document.createElement('input');
    input.value = 'Interpretação';

    component.cadastrarAssuntoRapido(input);
    component.cadastrarAssuntoRapido(input);

    expect(component.criandoAssunto).toBe(true);
    expect(criarAssunto).toHaveBeenCalledOnce();

    criarAssunto$.next({ id: 2, nome: 'Interpretação' });
    criarAssunto$.complete();
    expect(component.criandoAssunto).toBe(false);
  });
});
