import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArtigosInfoComponent } from './conteudo/artigos-info.component';
import { ArtigosListComponent } from './conteudo/artigos-list.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { 
    path: 'ArtigosListComponent',
    component: ArtigosListComponent
  },
  { 
    path: 'ArtigosInfoComponent/:id',
    component: ArtigosInfoComponent 
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
