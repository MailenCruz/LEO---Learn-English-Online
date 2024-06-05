import { Injectable } from '@angular/core';
import { Shopping } from '../interfaces/shopping';
import { Restaurante } from '../interfaces/restaurante';
import { Alojamiento } from '../interfaces/alojamiento';
import { Vocabulario } from '../interfaces/vocabulario';
import { Ejercicio } from '../interfaces/ejercicio';
import { Pregunta } from '../interfaces/pregunta';
import { environments } from 'src/environments/environments.prod';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ViajeroService {

  jsonUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }


  /*SHOPPING*/

  getDataShopping(): Observable<Shopping | undefined> {
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.shopping)
    );
  }

  getDataShopping_vocabulario(): Observable<Vocabulario | undefined> {
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.shopping.vocabulario)
    );
  }

  getDataShopping_ejercicios(): Observable<Ejercicio[]>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.shopping.ejercicios)
    );
  }

  getDataShopping_preguntas(): Observable<Pregunta[]>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.shopping.preguntas)
    );
  }

  /*RESTAURANTE*/

  getDataRestaurante(): Observable<Restaurante | undefined>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.restaurante)
    );  }


  getDataRestaurante_vocabulario(): Observable<Vocabulario | undefined>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.restaurante.vocabulario)
    );  }


  getDataRestaurante_ejercicios(): Observable<Ejercicio[]>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.restaurante.ejercicios)
    );  }


  getDataRestaurante_preguntas(): Observable<Pregunta[]>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.restaurante.preguntas)
    );  }


  /*ALOJAMIENTO*/

  getDataAlojamiento(): Observable<Alojamiento | undefined>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.alojamiento)
    );  }


  getDataAlojamiento_vocabulario(): Observable<Vocabulario | undefined>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.alojamiento.vocabulario)
    );  }


  getDataAlojamiento_ejercicios(): Observable<Ejercicio[]>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.alojamiento.ejercicios)
    );  }


  getDataAlojamiento_preguntas(): Observable<Pregunta[]>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.alojamiento.preguntas)
    );  }

}
