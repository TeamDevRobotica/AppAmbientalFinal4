import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminInstitucionesComponent } from './admin-instituciones/admin-instituciones.component';
import { AdminInstitucionesNuevoComponent } from './admin-instituciones-nuevo/admin-instituciones-nuevo.component';
import { AdminTemporalComponent } from './admin-temporal/admin-temporal.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'adminInstitucion',
        canActivateChild: [AuthGuard],
        component: AdminInstitucionesComponent,
        children: [
          { path: 'adminInstitucionNuevo', canActivateChild: [AuthGuard], component: AdminInstitucionesNuevoComponent }
        ]
      },
      { path: '', component: AdminTemporalComponent, canActivateChild: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
