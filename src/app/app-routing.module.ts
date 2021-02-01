import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ContentAddComponent } from './content-add/content-add.component';
import { ConteudoInfoComponent } from './conteudo/conteudo-info.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { 
    path: 'tabs/tab1/conteudo-info/:id',
    component: ConteudoInfoComponent 
  },
  { 
    path: 'tabs/tab2/conteudo-info/:id',
    component: ConteudoInfoComponent 
  },
  {
    path: 'tabs/tab1/adicionar-editar',
    component: ContentAddComponent
  },
  {
    path: 'tabs/tab1/adicionar-editar/:id',
    component: ContentAddComponent
  },
  {
    path: 'tabs/tab2/adicionar-editar',
    component: ContentAddComponent
  },
  {
    path: 'tabs/tab2/adicionar-editar/:id',
    component: ContentAddComponent
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
