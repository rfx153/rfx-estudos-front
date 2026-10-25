import { Routes } from '@angular/router';
import { RegistroListaComponent } from './pages/registro-lista/registro-lista';
// Vamos criar esse componente de visualização logo abaixo
import { VisualizarRegistrosComponent } from './pages/visualizar-registros/visualizar-registros';
import { MateriaListaComponent } from './pages/materia-lista/materia-lista';
import { InicioComponent } from './pages/inicio/inicio';
import { PlanejamentoListaComponent } from './pages/planejamento-lista/planejamento-lista';
import { PlanejamentoDetalheComponent } from './pages/planejamento-detalhe/planejamento-detalhe';
import { PlanejamentoVisualizacaoComponent } from './pages/planejamento-visualizacao/planejamento-visualizacao';
import { MetodologiaComponent } from './pages/metodologia/metodologia';
import { CaminhoComponent } from './pages/caminho/caminho';
import { MetasComponent } from './pages/metas/metas';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'novo-registro', component: RegistroListaComponent },
  { path: 'visualizar-registros', component: VisualizarRegistrosComponent },
  { path: 'planejamentos', component: PlanejamentoListaComponent },
  { path: 'planejamentos/novo', component: PlanejamentoDetalheComponent },
  { path: 'planejamentos/:id', component: PlanejamentoDetalheComponent },
  { path: 'planejamento', component: PlanejamentoVisualizacaoComponent },
  { path: 'planejamento/:id', component: PlanejamentoVisualizacaoComponent },
  { path: 'metodologia', component: MetodologiaComponent },
  { path: 'caminho', component: CaminhoComponent },
  { path: 'metas', component: MetasComponent },
  { path: 'materias', component: MateriaListaComponent },
  { path: '**', redirectTo: '' } // Rota coringa para evitar erros 404
];
