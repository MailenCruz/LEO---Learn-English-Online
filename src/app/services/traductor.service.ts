import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environments } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  urlEN_ES:string = environments.urlEN_EStraductor;
  urlES_EN:string = environments.urlES_ENtraductor;

  palabra:string = "";

  constructor(private router: Router, private http: HttpClient) { }


  getTraduccionENES(palabra: string): Observable<string | undefined> {
    return this.http.get<any>(`${this.urlEN_ES}=${palabra}`)
      .pipe(
        map(traduccion => {
          const { responseData } = traduccion;
          const { translatedText } = responseData;
          return translatedText;
        }),
        catchError(error => {
          console.log(error);
          return of(undefined);
        })
      );
  }
  

  getTraduccionESEN(palabra: string): Observable<string | undefined> {
    return this.http.get<any>(`${this.urlES_EN}=${palabra}`)
      .pipe(
        map(traduccion => {
          const { responseData } = traduccion;
          const { translatedText } = responseData;
          return translatedText;
        }),
        catchError(error => {
          console.log(error);
          return of(undefined);
        })
      );
  }
}



