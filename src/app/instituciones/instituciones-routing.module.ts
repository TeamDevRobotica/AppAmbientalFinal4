import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitucionComponent } from './institucion/institucion.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'institucion', component: InstitucionComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionesRoutingModule { }
