import { Component, OnInit } from '@angular/core';
import { GraficoService } from 'src/app/servicios/GraficoService';
import * as CanvasJS from 'src/canvasjs-2.3.2/canvasjs.min';
import { InstitucionService } from 'src/app/servicios/institucion.service';

//cantidad de graficos
const GRAFICOS = 6;

@Component({
  selector: 'app-admin-temporal',
  templateUrl: './admin-temporal.component.html',
  styleUrls: ['./admin-temporal.component.sass']
})
export class AdminTemporalComponent implements OnInit {

  charts: CanvasJS.Chart[] = [];
  cue;
  constructor(private grafico: GraficoService, private institucionService: InstitucionService) { }

  ngOnInit() {
    // for (let index = 1; index <= GRAFICOS; index++) {
    //   this.institucionService.getInstitucion(index).subscribe(inst => {
    //     this.cue = inst.cue, this.charts.push(this.grafico.crearGrafico(index, this.cue));
    //     console.log(this.charts[index - 1]);
    //     this.charts[index - 1].render();
    //   }, err => { }, () => {
    //   });
    // }
    for (let index = 1; index <= GRAFICOS; index++) {
      this.charts.push(this.grafico.crearGrafico(index, this.cue));
      console.log(this.charts[index - 1]);
      this.charts[index - 1].render();
    }

    this.grafico.actualizarGraficos(this.charts);

    setInterval(function () {
      console.log(this.charts);
      this.grafico.actualizarGraficos(this.charts);
    }.bind(this), 10000);
  }

}
