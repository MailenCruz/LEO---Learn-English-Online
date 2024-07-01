import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environments } from 'src/environments/environments.prod';
import { Traduccion } from '../interfaces/traduccion';


@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  private traducciones: Traduccion[] = []; // Aquí deberías cargar tus datos de traducción
  
  urlEN_ES:string = environments.urlEN_EStraductor;
  urlES_EN:string = environments.urlES_ENtraductor;
  urlTrad:string = environments.urlTrad;

  palabra:string = "";


  constructor(private http: HttpClient) {
    // Cargar los datos de traducción
    this.loadTraducciones();
  }

  loadTraducciones() {
    // Suponiendo que tienes un endpoint para obtener las traducciones
    this.http.get<Traduccion[]>(this.urlTrad).subscribe(data => {
      this.traducciones = data;
    });
  }

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

  wordExists(palabra: string): Observable<number> {
    const exists = this.traducciones.some(trad => trad.palabra === palabra);
    return of(exists ? 1 : 0);
  }

  getTraduccionCorregida(palabra: string): Observable<string> {
    const traduccion = this.traducciones.find(trad => trad.palabra === palabra);
    console.log(traduccion);
    return of(traduccion?  traduccion.traduccion : "error");
    //return of(traduccion ? (traduccion.en === palabra ? traduccion.es : traduccion.en) : '');
  }
}

/*import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environments } from 'src/environments/environments.prod';
import { Traduccion } from '../interfaces/traduccion';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  urlEN_ES:string = environments.urlEN_EStraductor;
  urlES_EN:string = environments.urlES_ENtraductor;
  urlTrad:string = environments.urlTrad;

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

  // Función para obtener el JSON de traducciones
  getTranslations(): Observable<Traduccion[]> {
    return this.http.get<Traduccion[]>(this.urlTrad);
  }

  // Función para verificar si una palabra está en el JSON
  wordExists(word: string): Observable<number> {
    return new Observable<number>(observer => {
      this.getTranslations().subscribe(
        (data: Traduccion[]) => {
          const found = data.some(item => item.palabra.toLowerCase() === word.toLowerCase());
          observer.next(found ? 1 : 0);
          observer.complete();
        },
        error => {
          console.error('Error fetching translations:', error);
          observer.error(error);
        }
      );
    });
  }

  getTraduccionCorregida(palabra: string): Observable<string | undefined> {
    return new Observable<string | undefined>(observer => {
      this.getTranslations().subscribe(
        (data: any) => {
          const traduccion = data.traducciones.find((item: any) => item.palabra.toLowerCase() === traduccion.toLowerCase());
          if (traduccion) {
            observer.next(traduccion.traduccion);
          } else {
            observer.next(undefined);
          }
          observer.complete();
        },
        error => {
          console.error('Error fetching translations:', error);
          observer.error(error);
        }
      );
    });
  }

}


*/
