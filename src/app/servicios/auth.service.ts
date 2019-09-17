import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioAdmin } from '../modelo/UsuarioAdmin';
import { UsuarioInstitucion } from '../modelo/UsuarioInstitucion';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl;

  loginUrl = 'http://educaciondigitalmisiones.com:50000/login';
  //loginUrl = 'http://localhost:50000/login';
  admin: UsuarioAdmin;
  institucionUsuario: UsuarioInstitucion;

  user;
  constructor(private http: HttpClient) { }

  // login(user: string, pass: string): Observable<any> {
  //   this.isLoggedIn = true;

  //   this.http.get<Institucion[]>(this.institucionUrl);

  //   if (user == "a" && pass == 'a') {
  //     return of("/admin");
  //   }
  //   return of("/institucion");
  // }

  login(username, password) {
    return this.http.get<any>(`${this.loginUrl}` + "/" + username + "/" + password)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes

        //this.currentUserSubject.next(user);
        console.log(user);
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.user = user;
          this.isLoggedIn = true;
          return "/" + user[1];
        }
        return "/";
      }));
  }

  // redireccionar(usuario){
  //   if(){

  //   }
  // }
}
