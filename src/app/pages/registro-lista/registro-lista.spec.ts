import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { provideNzI18n, pt_BR } from 'ng-zorro-antd/i18n';
import { provideNzNativeDateAdapter } from 'ng-zorro-antd/core/time';
import { NzModalService } from 'ng-zorro-antd/modal';

import { MaterialGuiaService } from '../../services/material-guia.service';
import { MateriaService } from '../../services/materia.service';
import { PlanejamentoService } from '../../services/planejamento.service';
import { RegistroService } from '../../services/registro.service';
import { RegistroListaComponent } from './registro-lista';

registerLocaleData(pt);

describe('RegistroListaComponent', () => {
  beforeEach(async () => {
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
          useValue: { listarTodas: () => of([]), criar: () => of({}) },
        },
        {
          provide: PlanejamentoService,
          useValue: { listarTodos: () => of([]) },
        },
        {
          provide: MaterialGuiaService,
          useValue: { listarTodos: () => of([]), criar: () => of({}) },
        },
        {
          provide: RegistroService,
          useValue: { listarTiposRegistro: () => of([]) },
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
});
