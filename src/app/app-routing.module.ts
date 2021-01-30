import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArtigosInfoComponent } from './conteudo/artigos-info.component';
import { ArtigosListComponent } from './conteudo/artigos-list.component';

import { ContentAddComponent } from './content-add/content-add.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { 
    path: 'tabs/tab1/ArtigosListComponent',
    component: ArtigosListComponent
  },
  { 
    path: 'tabs/tab1/ArtigosInfoComponent/:id',
    component: ArtigosInfoComponent 
  },
  {
    path: 'tabs/tab1/adicionar-editar',
    component: ContentAddComponent
  },
  {
    path: 'tabs/tab2/adicionar-editar',
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
