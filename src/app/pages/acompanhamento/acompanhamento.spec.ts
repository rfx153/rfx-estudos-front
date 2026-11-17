import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RegistroService } from '../../services/registro.service';
import { AcompanhamentoComponent } from './acompanhamento';

describe('AcompanhamentoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcompanhamentoComponent],
      providers: [
        {
          provide: RegistroService,
          useValue: {
            listarTodos: () => of([
              {
                id: 1,
                materia: { id: 1, nome: 'Português' },
                assunto: { id: 1, nome: 'Interpretação' },
                tipoRegistro: { id: 1, nome: 'Questões' },
                questoesFeitas: 20,
                questoesAcertadas: 15,
                dataEstudo: '2026-11-17',
                horarioInicio: '08:00:00',
                tempoEstudado: '01:30:00'
              },
              {
                id: 2,
                materia: { id: 2, nome: 'Direito' },
                assunto: { id: 2, nome: 'Constitucional' },
                tipoRegistro: { id: 2, nome: 'Teoria' },
                questoesFeitas: 0,
                questoesAcertadas: 0,
                dataEstudo: '2026-10-17',
                horarioInicio: '10:00:00',
                tempoEstudado: '01:00:00'
              }
            ])
          }
        }
      ]
    }).compileComponents();
  });

  it('deve resumir os registros de estudo', () => {
    const fixture = TestBed.createComponent(AcompanhamentoComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    expect(component.totalMinutos).toBe(90);
    expect(component.totalQuestoes).toBe(20);
    expect(component.percentualAcertos).toBe(75);
    expect(component.totalMaterias).toBe(1);
    expect(component.materias[0].percentualTotal).toBe(100);
    expect(component.dias.flatMap(dia => dia.segmentos).some(segmento => segmento.nome === 'Português')).toBe(true);
    expect(fixture.nativeElement.textContent).toContain('Desempenho acumulado');
  });

  it('deve alternar para a linha do tempo', async () => {
    const fixture = TestBed.createComponent(AcompanhamentoComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    const botoes = fixture.nativeElement.querySelectorAll('.tracking-tabs button') as NodeListOf<HTMLButtonElement>;
    botoes[1].click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.nativeElement.textContent).toContain('Interpretação');
    expect(fixture.nativeElement.textContent).toContain('1h 30min');
  });

  it('deve recalcular os indicadores ao trocar o intervalo', () => {
    const fixture = TestBed.createComponent(AcompanhamentoComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    component.selecionarPeriodo('total');
    expect(component.registros.length).toBe(2);
    expect(component.totalMinutos).toBe(150);

    component.inicioPersonalizado = '2026-10-01';
    component.fimPersonalizado = '2026-10-31';
    component.periodoAtivo = 'personalizado';
    component.aplicarPeriodoPersonalizado();

    expect(component.registros.length).toBe(1);
    expect(component.registros[0].materia.nome).toBe('Direito');
    expect(component.rotuloPeriodo).toBe('01/10/2026 a 31/10/2026');
  });
});
