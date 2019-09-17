import * as CanvasJS from 'src/canvasjs-2.3.2/canvasjs.min';
import { DateUtils } from 'src/app/util/DateUtils';
import { DatoAmbientalService } from './dato-ambiental.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GraficoService {

    constructor(private datoAmbientalServicio: DatoAmbientalService) {
    }

    actualizarGraficos(charts) {
        for (let index = 0; index < charts.length; index++) {
            this.datoAmbientalServicio.getUltimoDatosAmbientalesPorTipo(index + 1).subscribe(datos => {
                this.cargarDataPoints(charts[index], datos);
            }, err => { }, () => {
                if (charts[index].options.data[0].dataPoints.length > 0) {
                    this.controlarDataPoints(charts[index]);
                }
            });
        }
    }

    private controlarDataPoints(chart) {
        if (chart.options.data[0].dataPoints.length > 7) {
            chart.options.data[0].dataPoints.shift();
        }
        if (chart.options.data[1].dataPoints.length > 7) {
            chart.options.data[1].dataPoints.shift();
        }
        if (chart.options.data[2].dataPoints.length > 7) {
            chart.options.data[2].dataPoints.shift();
        }
        if (chart.options.data[3].dataPoints.length > 7) {
            chart.options.data[3].dataPoints.shift();
        }
        if (chart.options.data[4].dataPoints.length > 7) {
            chart.options.data[4].dataPoints.shift();
        }
        if (chart.options.data[5].dataPoints.length > 7) {
            chart.options.data[5].dataPoints.shift();
        }
        if (chart.options.data[6].dataPoints.length > 7) {
            chart.options.data[6].dataPoints.shift();
        }
        console.log(chart.options.data[0].dataPoints);
        console.log(chart.options.data[0].name);

        chart.options.data[0].legendText = " Temperatura Ambiente " + chart.options.data[0].dataPoints[chart.options.data[0].dataPoints.length - 1].y;
        chart.options.data[1].legendText = " Humedad Ambiente " + chart.options.data[1].dataPoints[chart.options.data[1].dataPoints.length - 1].y;
        chart.options.data[2].legendText = " Humedad Suelo " + chart.options.data[2].dataPoints[chart.options.data[2].dataPoints.length - 1].y;
        chart.options.data[3].legendText = " Luz " + chart.options.data[3].dataPoints[chart.options.data[3].dataPoints.length - 1].y;
        chart.options.data[4].legendText = " Lluvia " + chart.options.data[4].dataPoints[chart.options.data[4].dataPoints.length - 1].y;
        chart.options.data[5].legendText = " Viento " + chart.options.data[5].dataPoints[chart.options.data[5].dataPoints.length - 1].y;
        chart.options.data[6].legendText = " Pluviometro " + chart.options.data[6].dataPoints[chart.options.data[6].dataPoints.length - 1].y;
        chart.render();
    }

    private cargarDataPoints(chart, datos) {
        let time = new Date();
        datos.forEach(element => {
            for (let index = 0; index < element.length; index++) {
                const element1 = element[index];
                if (element1.tipoDato.id == 1) {
                    chart.options.data[0].dataPoints.push({ y: element[index].valor, x: time.getTime() });
                }
                if (element1.tipoDato.id == 2) {
                    chart.options.data[1].dataPoints.push({ y: element[index].valor, x: time.getTime() });
                }
                if (element1.tipoDato.id == 3) {
                    chart.options.data[2].dataPoints.push({ y: element[index].valor, x: time.getTime() });
                }
                if (element1.tipoDato.id == 4) {
                    chart.options.data[3].dataPoints.push({ y: element[index].valor, x: time.getTime() });
                }
                if (element1.tipoDato.id == 5) {
                    chart.options.data[4].dataPoints.push({ y: element[index].valor, x: time.getTime() });
                }
                if (element1.tipoDato.id == 6) {
                    chart.options.data[5].dataPoints.push({ y: element[index].valor, x: time.getTime() });
                }
                if (element1.tipoDato.id == 7) {
                    chart.options.data[6].dataPoints.push({ y: element[index].valor, x: time.getTime() });
                }
                console.log(chart.options.data[0].dataPoints);
            }
        })
    }

    crearGrafico(id: number, cue): CanvasJS.Chart {
        return new CanvasJS.Chart("chartContainer" + id, {
            zoomEnabled: true,
            exportEnabled: true,
            theme: /* "light1", "dark2",  "dark1",*/  "light1",
            title: {
                text: "Institucion " + id/* + this.cue[0].institucion.cue *//* "Grafico tiempo real" */,
                fontSize: 20
            },
            // subtitles: [
            //     {
            //         text: DateUtils.mixedDateToDateString(new Date()),
            //         //Uncomment properties below to see how they behave
            //         fontColor: "red",
            //         fontSize: 14
            //     }
            // ],
            axisX: {
                // title: "El grafico se actualiza cada 10 segundos ",
                interlacedColor: "#F0F8FF",
                tickLength: 10
                
            },
            // axisY: {
            //     prefix: "",
            //     includeZero: false
            // },
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
                dataPoints: []
            },
            {
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "####.00",
                xValueFormatString: "hh:mm:ss TT",
                showInLegend: true,
                name: "Humedad Ambiente",
                dataPoints: []
            },
            {
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "####.00",
                xValueFormatString: "hh:mm:ss TT",
                showInLegend: true,
                name: "Humedad Suelo",
                dataPoints: []
            },
            {
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "####.00",
                xValueFormatString: "hh:mm:ss TT",
                showInLegend: true,
                name: "Luz",
                dataPoints: []
            },
            {
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "####.00",
                xValueFormatString: "hh:mm:ss TT",
                showInLegend: true,
                name: "Lluvia",
                dataPoints: []
            },
            {
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "####.00",
                xValueFormatString: "hh:mm:ss TT",
                showInLegend: true,
                name: "Viento",
                dataPoints: []
            },
            {
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "####.00",
                xValueFormatString: "hh:mm:ss TT",
                showInLegend: true,
                name: "Pluviometro",
                dataPoints: []
            }]
        }/* , this.cargarDataPoints(datos) */);
    }

} 