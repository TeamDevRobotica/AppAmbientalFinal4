import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institucion } from '../modelo/Institucion';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InstitucionService {

  institucionUrl = 'http://educaciondigitalmisiones.com:50000/institucion';

  //institucionUrl = 'http://localhost:50000/institucion';

  constructor(private http: HttpClient) { }

  getInstituciones(): Observable<Institucion[]> {
    return this.http.get<Institucion[]>(this.institucionUrl);
  }

  getInstitucion(id: number): Observable<Institucion> {
    const url = `${this.institucionUrl}/${id}`;
    return this.http.get<Institucion>(url).pipe(/* 
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`)) */
    );
  }

  /** POST: add a new hero to the server */
  agregarInstitucion(institucion: Institucion): Observable<Institucion> {
    console.log(institucion);
    return this.http.post<Institucion>(this.institucionUrl, { id: 1 }).pipe(
     /*  tap((nuevoUsuario: Usuario) => this.log(`added usuario w/ id=${nuevoUsuario.id}`)),
      catchError(this.handleError<Usuario>('addHero'))
     */);
  }

  /** DELETE: delete the hero from the server */
  borrarInstitucion(usuario: Institucion | number): Observable<Institucion> {
    const id = typeof usuario === 'number' ? usuario : usuario.id;
    const url = `${this.institucionUrl}/${id}`;

    return this.http.delete<Institucion>(url, httpOptions).pipe(/* 
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero')) */
    );
  }

  /** PUT: update the hero on the server */
  editarInstitucion(usuario: Institucion): Observable<any> {
    // const id = typeof usuario === 'number' ? usuario : usuario.id;
    const url = `${this.institucionUrl}/${usuario.id}`;
    return this.http.put(url, usuario, httpOptions).pipe(/* 
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero')) */
    );
  }

}
