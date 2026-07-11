import { Routes } from '@angular/router';
import { RegistroListaComponent } from './pages/registro-lista/registro-lista';
// Vamos criar esse componente de visualização logo abaixo
import { VisualizarRegistrosComponent } from './pages/visualizar-registros/visualizar-registros';

export const routes: Routes = [
  { path: '', redirectTo: 'novo-registro', pathMatch: 'full' }, // Inicializa direto no cadastro
  { path: 'novo-registro', component: RegistroListaComponent },
  { path: 'visualizar-registros', component: VisualizarRegistrosComponent },
  { path: '**', redirectTo: 'novo-registro' } // Rota coringa para evitar erros 404
];