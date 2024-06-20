import { Injectable } from '@angular/core';
import { Gramatica } from '../interfaces/gramatica';
import { Correccion } from '../interfaces/correccion';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environments } from 'src/environments/environments.prod';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GramaticaService {

  url: string = environments.baseUrl;
  urlAPI: string = environments.urlAPIGramaticas;

  constructor(private router: Router, private http: HttpClient) { }

  getExercisesHttp(): Observable<Gramatica | undefined> {
    return this.http.get<Gramatica>(`${this.url}/gramatica`);
  }

  getCorreccionHttp(answer: string): Observable<Correccion[] | undefined> {

    const data = new URLSearchParams();
    data.append('text', answer);
    data.append('language', 'en');
    data.append('enabledOnly', 'false');

    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });

    return this.http.post<any>(
      this.urlAPI,
      data,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      })
      .pipe(
        map(response => {

          let correcciones: Correccion[] = [];

          if (response && Array.isArray(response.matches)) {

            response.matches.forEach((element: any) => {

              let { message, replacements } = element;

              let arreglo: string[] = replacements.map((replacement: any) => replacement.value);

              let error: Correccion = {
                message,
                replacements: arreglo,
              };

              correcciones.push(error);
            });

          }
          return correcciones; // Devuelve el array de correcciones
        }),
        catchError(error => {
          console.log(error);
          return of(undefined); // Devuelve un observable con 'undefined' en caso de error
        })
      );
  }
}
