//amodule + tab para crear una plantilla de módulo
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:"new/:id",
    component:NoticiaComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class NoticiasRoutingModule { }
