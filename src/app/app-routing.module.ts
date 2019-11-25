import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'agenda',
    loadChildren: './agenda/agenda.module#AgendaPageModule'
  },
  {
    path: 'dicas',
    loadChildren: './dicas/dicas.module#DicasPageModule'
  },
  {
    path: 'portifolio',
    loadChildren: './portifolio/portifolio.module#PortifolioPageModule'
  },
  {
    path: 'servicos',
    loadChildren: './servicos/servicos.module#ServicosPageModule'
  },
  {
    path: 'procedimentos',
    loadChildren: './procedimentos/procedimentos.module#ProcedimentosPageModule'
  },
  {
    path: 'arquivos',
    loadChildren: './arquivos/arquivos.module#ArquivosPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
