import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/canvasjs-2.3.2/canvasjs.min';
import { DateUtils } from 'src/app/util/DateUtils';
import { DatoAmbientalService } from 'src/app/servicios/dato-ambiental.service';
import { GraficoService } from 'src/app/servicios/GraficoService';

//cantidad de graficos
const GRAFICOS = 3;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  charts: CanvasJS.Chart[] = [];

  constructor() { }

  ngOnInit() {

  }

}
