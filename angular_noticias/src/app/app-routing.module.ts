import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'registro',
    component:RegistrarseComponent,
  },
  {
    // Lazy loading
    path:"notigt",
    loadChildren: ()=>import('./noticias/noticias.module').then( m_new => m_new.NoticiasModule)
  },
  {
    path:'**',  // Cualquier otra ruta que no este definida redirige a home
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
