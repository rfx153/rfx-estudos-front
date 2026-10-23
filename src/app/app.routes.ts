import { Routes } from '@angular/router';
import { RegistroListaComponent } from './pages/registro-lista/registro-lista';
// Vamos criar esse componente de visualização logo abaixo
import { VisualizarRegistrosComponent } from './pages/visualizar-registros/visualizar-registros';
import { MateriaListaComponent } from './pages/materia-lista/materia-lista';
import { InicioComponent } from './pages/inicio/inicio';
import { PlanejamentoListaComponent } from './pages/planejamento-lista/planejamento-lista';
import { PlanejamentoDetalheComponent } from './pages/planejamento-detalhe/planejamento-detalhe';
import { MetodologiaComponent } from './pages/metodologia/metodologia';
import { CaminhoComponent } from './pages/caminho/caminho';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'novo-registro', component: RegistroListaComponent },
  { path: 'visualizar-registros', component: VisualizarRegistrosComponent },
  { path: 'planejamentos', component: PlanejamentoListaComponent },
  { path: 'planejamentos/novo', component: PlanejamentoDetalheComponent },
  { path: 'planejamentos/:id', component: PlanejamentoDetalheComponent },
  { path: 'metodologia', component: MetodologiaComponent },
  { path: 'caminho', component: CaminhoComponent },
  { path: 'materias', component: MateriaListaComponent },
  { path: '**', redirectTo: '' } // Rota coringa para evitar erros 404
];
