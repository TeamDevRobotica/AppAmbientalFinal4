import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Observable } from 'rxjs';
import { DatoAmbientalService } from 'src/app/servicios/dato-ambiental.service';
import { DateUtils } from 'src/app/util/DateUtils';
import * as CanvasJS from 'src/canvasjs-2.3.2/canvasjs.min';

@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
  styleUrls: ['./institucion.component.sass']
})
export class InstitucionComponent implements OnInit {
  id;
  cue = [];
  institucion = [];
  // usuarios: Observable<any[]>;
  // usuarios2 = [];
  //dataPoints = [];
  // cantidad = 0;
  intervalUpdate: any = null;
  chart: any = null;

  dataPoints1 = [{ y: 0, x: new Date().getTime() }];
  dataPoints2 = [{ y: 0, x: new Date().getTime() }];
  dataPoints3 = [{ y: 0, x: new Date().getTime() }];
  dataPoints4 = [{ y: 0, x: new Date().getTime() }];
  dataPoints5 = [{ y: 0, x: new Date().getTime() }];
  dataPoints6 = [{ y: 0, x: new Date().getTime() }];
  dataPoints7 = [{ y: 0, x: new Date().getTime() }];

  constructor(private authService: AuthService, private datoAmbientalServicio: DatoAmbientalService) { }

  ngOnInit() {
    this.cue = this.authService.user;
    console.log("user " + this.cue[0].institucion.id);
    this.institucion = this.cue[0].institucion.descripcion;
    this.id = this.cue[0].institucion.id;

    this.chart = new CanvasJS.Chart("chartContainer", {
      zoomEnabled: true,
      exportEnabled: true,
      title: {
        text: "Cue " + this.cue[0].institucion.cue/* "Grafico tiempo real" */,
        fontSize: 20
      },
      // subtitles: [
      //   {
      //     text: DateUtils.mixedDateToDateString(new Date()),
      //     //Uncomment properties below to see how they behave
      //     fontColor: "red",
      //     fontSize: 30
      //   }
      // ],
      axisX: {
        interlacedColor: "#F0F8FF",
        tickLength: 10
      },
      axisY: {
        prefix: "",
        includeZero: false
      },
      toolTip: {
        shared: true,
        // content: "{name} </br> <strong>Temperature: </strong> </br> Min: {y} °C, Max: {x} °C" + DateUtils.mixedDateToDateString(new Date())
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "top",
        fontSize: 10,
        fontColor: "dimGrey"/* ,
        itemclick: toggleDataSeries */
      },
      data: [{
        type: "line",
        xValueType: "dateTime",
        yValueFormatString: "####.00",
        xValueFormatString: "hh:mm:ss TT",
        showInLegend: true,
        name: "Temperatura Ambiente",
        dataPoints: this.dataPoints1
      },
      {
        type: "line",
        xValueType: "dateTime",
        yValueFormatString: "####.00",
        xValueFormatString: "hh:mm:ss TT",
        showInLegend: true,
        name: "Humedad Ambiente",
        dataPoints: this.dataPoints2
      },
      {
        type: "line",
        xValueType: "dateTime",
        yValueFormatString: "####.00",
        xValueFormatString: "hh:mm:ss TT",
        showInLegend: true,
        name: "Humedad Suelo",
        dataPoints: this.dataPoints3
      },
      {
        type: "line",
        xValueType: "dateTime",
        yValueFormatString: "####.00",
        xValueFormatString: "hh:mm:ss TT",
        showInLegend: true,
        name: "Luz",
        dataPoints: this.dataPoints4
      },
      {
        type: "line",
        xValueType: "dateTime",
        yValueFormatString: "####.00",
        xValueFormatString: "hh:mm:ss TT",
        showInLegend: true,
        name: "Lluvia",
        dataPoints: this.dataPoints5
      },
      {
        type: "line",
        xValueType: "dateTime",
        yValueFormatString: "####.00",
        xValueFormatString: "hh:mm:ss TT",
        showInLegend: true,
        name: "Viento",
        dataPoints: this.dataPoints6
      },
      {
        type: "line",
        xValueType: "dateTime",
        yValueFormatString: "####.00",
        xValueFormatString: "hh:mm:ss TT",
        showInLegend: true,
        name: "Pluviometro",
        dataPoints: this.dataPoints7
      }]
    });

    //this.chart.render();
    this.datoAmbientalServicio.getDatosAmbientalesPorTipo(this.cue[0].institucion.id).subscribe(datos => {
      let time = new Date();
      datos.forEach(element => {
        for (let index = 0; index < element.length; index++) {
          console.log(element[index].tipoDato.id);
          // console.log(element[index].fecha);
          // console.log(new Date(element[index].fecha));
          const element1 = element[index];
          if (element1.tipoDato.id == 1) {
            this.dataPoints1.push({ y: element[index].valor, x: time.getTime() });
          }
          if (element1.tipoDato.id == 2) {
            this.dataPoints2.push({ y: element[index].valor, x: time.getTime() });
          }
          if (element1.tipoDato.id == 3) {
            this.dataPoints3.push({ y: element[index].valor, x: time.getTime() });
          }
          if (element1.tipoDato.id == 4) {
            this.dataPoints4.push({ y: element[index].valor, x: time.getTime() });
          }
          if (element1.tipoDato.id == 5) {
            this.dataPoints5.push({ y: element[index].valor, x: time.getTime() });
          }
          if (element1.tipoDato.id == 6) {
            this.dataPoints6.push({ y: element[index].valor, x: time.getTime() });
          }
          if (element1.tipoDato.id == 7) {
            this.dataPoints7.push({ y: element[index].valor, x: time.getTime() });
          }
        }
        // dataPoints2.push({ y: element[3].valor, label: element[3].tipoDato.descripcion });
      })
    }, err => { }, () => { console.log(this.dataPoints5); this.chart.render(); }
    );

    // }


    this.intervalUpdate = setInterval(function () {
      this.actualizar();
    }.bind(this), 10000);
  }

  actualizar() {
    let time = new Date();
    this.datoAmbientalServicio.getUltimoDatosAmbientalesPorTipo(this.cue[0].institucion.id).subscribe(datos => {
      datos.forEach(element => {
        for (let index = 0; index < element.length; index++) {
          console.log(element[index].tipoDato.id);
          // console.log(new Date(element[index].fecha));
          const element1 = element[index];
          if (element1.tipoDato.id == 1) {
            console.log(element1.valor);
            this.dataPoints1.push({ y: element[index].valor, x: time.getTime() });
          }
          if (element1.tipoDato.id == 2) {
            this.dataPoints2.push({ y: element[index].valor, x: time.getTime() });
          }
          if (element1.tipoDato.id == 3) {
            this.dataPoints3.push({ y: element[index].valor, x: time.getTime() });
          }
          if (element1.tipoDato.id == 4) {
            this.dataPoints4.push({ y: element[index].valor, x: time.getTime() });
          }
          if (element1.tipoDato.id == 5) {
            this.dataPoints5.push({ y: element[index].valor, x: time.getTime() });
          }
          if (element1.tipoDato.id == 6) {
            this.dataPoints6.push({ y: element[index].valor, x: time.getTime() });
          }
          if (element1.tipoDato.id == 7) {
            this.dataPoints7.push({ y: element[index].valor, x: time.getTime() });
          }
        }
        // dataPoints2.push({ y: element[3].valor, label: element[3].tipoDato.descripcion });
      })
    }, err => { },
      () => {
        console.log(this.dataPoints1);
        console.log(this.dataPoints1.length);
        if (this.dataPoints1.length > 7) {
          this.dataPoints1.shift();
        }
        if (this.dataPoints2.length > 7) {
          this.dataPoints2.shift();
        }
        if (this.dataPoints3.length > 7) {
          this.dataPoints3.shift();
        }
        if (this.dataPoints4.length > 7) {
          this.dataPoints4.shift();
        }
        if (this.dataPoints5.length > 7) {
          this.dataPoints5.shift();
        }
        if (this.dataPoints6.length > 7) {
          this.dataPoints6.shift();
        }
        if (this.dataPoints7.length > 7) {
          this.dataPoints7.shift();
        }
        this.chart.options.data[0].legendText = " Temperatura Ambiente " + this.dataPoints1[this.dataPoints1.length - 1].y;
        this.chart.options.data[1].legendText = " Humedad Ambiente " + this.dataPoints2[this.dataPoints2.length - 1].y;
        this.chart.options.data[2].legendText = " Humedad Suelo " + this.dataPoints3[this.dataPoints3.length - 1].y;
        this.chart.options.data[3].legendText = " Luz " + this.dataPoints4[this.dataPoints4.length - 1].y;
        this.chart.options.data[4].legendText = " Lluvia " + this.dataPoints5[this.dataPoints5.length - 1].y;
        this.chart.options.data[5].legendText = " Viento " + this.dataPoints6[this.dataPoints6.length - 1].y;
        this.chart.options.data[6].legendText = " Pluviometro " + this.dataPoints7[this.dataPoints7.length - 1].y;
        this.chart.render();
      }
    );
  }

}
