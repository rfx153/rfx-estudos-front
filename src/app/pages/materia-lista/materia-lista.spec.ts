import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaListaComponent } from './materia-lista';

describe('MateriaLista', () => {
  let component: MateriaListaComponent;
  let fixture: ComponentFixture<MateriaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MateriaListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
