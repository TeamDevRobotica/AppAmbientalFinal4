import { Prototipo } from "./Prototipo";
import { Sensor } from "./Sensor";
import { TipoDatoAmbiental } from "./TipoDatoAmbiental";
import { Institucion } from "./Institucion";

export class DatoAmbiental {

    id: number;

    fecha: Date;

    valor: number;

    ubicacion: string;

    prototipo: Prototipo;

    sensor: Sensor;

    tipoDato: TipoDatoAmbiental;

    institucion: Institucion;

}