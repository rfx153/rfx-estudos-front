import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaLista } from './materia-lista';

describe('MateriaLista', () => {
  let component: MateriaLista;
  let fixture: ComponentFixture<MateriaLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaLista],
    }).compileComponents();

    fixture = TestBed.createComponent(MateriaLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
