import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { DetallecicloComponent } from './components/detalleciclo/detalleciclo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"ciclos",component:CiclosComponent},
  {path:"detalleCiclos/:curso/:nombre",component:DetallecicloComponent},
  {path:"asignaturas",component:AsignaturasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
