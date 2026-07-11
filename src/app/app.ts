import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MateriaListaComponent } from './pages/materia-lista/materia-lista';
import { RegistroListaComponent } from "./pages/registro-lista/registro-lista";

@Component({
  selector: 'app-root',
  imports: [ RegistroListaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly title = signal('rfx-estudos-front');
}
