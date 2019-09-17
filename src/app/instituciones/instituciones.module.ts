import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionesRoutingModule } from './instituciones-routing.module';
import { InstitucionComponent } from './institucion/institucion.component';

@NgModule({
  declarations: [InstitucionComponent],
  imports: [
    CommonModule,
    InstitucionesRoutingModule
  ]
})
export class InstitucionesModule { }
