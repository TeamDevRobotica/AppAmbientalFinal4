import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatoAmbiental } from '../modelo/DatoAmbiental';
import { DateUtils } from '../util/DateUtils';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DatoAmbientalService {

  datoAmbientalUrl = 'http://educaciondigitalmisiones.com:50000/datoAmbiental';
  //datoAmbientalUrl = 'http://localhost:50000/datoAmbiental';

  constructor(private http: HttpClient) { }

  getDatosAmbientales(): Observable<DatoAmbiental[]> {
    return this.http.get<DatoAmbiental[]>(this.datoAmbientalUrl + "8");
  }

  getDatosAmbientalesPorTipo(id: number): Observable<DatoAmbiental[][]> {
    return this.http.get<DatoAmbiental[][]>(this.datoAmbientalUrl + "UltimosDatos/" +  '2019-09-10'/* DateUtils.mixedDateToDateString(new Date())*/ + '/' + id);
  }

  getUltimoDatosAmbientalesPorTipo(id: number): Observable<DatoAmbiental[][]> {
    return this.http.get<DatoAmbiental[][]>(this.datoAmbientalUrl + "UltimoDato/" +  '2019-09-10'/* DateUtils.mixedDateToDateString(new Date())*/ + '/' + id);
  }

  getDatoAmbiental(id: number): Observable<DatoAmbiental> {
    const url = `${this.datoAmbientalUrl}/${id}`;
    return this.http.get<DatoAmbiental>(url).pipe(/* 
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`)) */
    );
  }

  /** POST: add a new hero to the server */
  agregarDatoAmbiental(datoAmbiental: DatoAmbiental): Observable<DatoAmbiental> {
    return this.http.post<DatoAmbiental>(this.datoAmbientalUrl, datoAmbiental, httpOptions).pipe(
     /*  tap((nuevoUsuario: Usuario) => this.log(`added usuario w/ id=${nuevoUsuario.id}`)),
      catchError(this.handleError<Usuario>('addHero'))
     */);
  }

  /** DELETE: delete the hero from the server */
  borrarDatoAmbiental(datoAmbiental: DatoAmbiental | number): Observable<DatoAmbiental> {
    const id = typeof datoAmbiental === 'number' ? datoAmbiental : datoAmbiental.id;
    const url = `${this.datoAmbientalUrl}/${id}`;

    return this.http.delete<DatoAmbiental>(url, httpOptions).pipe(/* 
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero')) */
    );
  }

  /** PUT: update the hero on the server */
  editarDatoAmbiental(datoAmbiental: DatoAmbiental): Observable<any> {
    // const id = typeof usuario === 'number' ? usuario : usuario.id;
    const url = `${this.datoAmbientalUrl}/${datoAmbiental.id}`;
    return this.http.put(url, datoAmbiental, httpOptions).pipe(/* 
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero')) */
    );
  }


  seEncuentraTipoDato(datos: any[], tipoDato: string): boolean {
    datos.forEach(element => {
      console.log(element);
      if (element.label.equals(tipoDato)) {
        return true;
      }
    });
    return false;
  }

  getDatosPersonalizados() {
    let datosPersonalizados = [];
    this.http.get<DatoAmbiental[]>(this.datoAmbientalUrl).subscribe(datos => {
      datos.forEach(element => {
        console.log(element.tipoDato.descripcion === 'temperatura ambiente');
        // console.log(this.seEncuentraTipoDato(datosPersonalizados, element.tipoDato.descripcion));
        // if (!this.seEncuentraTipoDato(datosPersonalizados, element.tipoDato.descripcion)) {
        // datosPersonalizados.push({ y: element.valor, label: element.tipoDato.descripcion })
        // console.log(datosPersonalizados);
        // }
      });
    }, complete => { console.log(datosPersonalizados) });
  }
}
