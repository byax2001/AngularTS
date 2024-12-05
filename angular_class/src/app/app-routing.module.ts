import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    // path: 'home',
    // component: HomeComponent
  },
  {
    //path:'**',  // Cualquier otra ruta que no este definida redirige a home
    //redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Exporta el modulo de rutas para que pueda ser usado en otros componentes en el archivo app.module.ts
                          // en la sección de imports
})
export class AppRoutingModule { }
