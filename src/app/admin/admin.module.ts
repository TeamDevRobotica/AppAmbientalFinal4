import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminInstitucionesComponent } from './admin-instituciones/admin-instituciones.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminInstitucionesNuevoComponent } from './admin-instituciones-nuevo/admin-instituciones-nuevo.component';
import { AdminTemporalComponent } from './admin-temporal/admin-temporal.component';

@NgModule({
  declarations: [AdminComponent, AdminInstitucionesComponent, AdminInstitucionesNuevoComponent, AdminTemporalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
