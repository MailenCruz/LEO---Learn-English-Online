import { Injectable } from '@angular/core';
import { Shopping } from '../interfaces/shopping';
import { Restaurante } from '../interfaces/restaurante';
import { Alojamiento } from '../interfaces/alojamiento';
import { Vocabulario } from '../interfaces/vocabulario';
import { Ejercicio } from '../interfaces/ejercicio';
import { Pregunta } from '../interfaces/pregunta';
import { environments } from 'src/environments/environments.prod';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ViajeroService {

  //private jsonUrl = 'http://localhost:4000/viajero';
  jsonUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  /*SHOPPING*/


  getDataShopping(): Observable<Shopping | undefined> {
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.shopping)
    );
  }

  /*async getDataShopping(): Promise<Shopping | undefined> {
    try {
      const response = await fetch(this.jsonUrl);

      //por si tiene problemas con la solicitud al json 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const shopping = data.shopping as Shopping;  // accedo directamente a shopping
      return shopping;

    } catch (error) {
      console.error(error);
      return undefined;
    }
  }*/

  getDataShopping_vocabulario(): Observable<Vocabulario | undefined> {
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.shopping.vocabulario)
    );
  }

  /*async getDataShopping_vocabulario(): Promise<Vocabulario | undefined> {
    try {
      const response = await fetch(this.jsonUrl);

      //por si tiene problemas con la solicitud al json 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const vocabulario = data.shopping.vocabulario as Vocabulario;  // accedo directamente a vocabulario
      return vocabulario;

    } catch (error) {
      console.error(error);
      return undefined;
    }
  }*/

  getDataShopping_ejercicios(): Observable<Ejercicio[]>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.shopping.ejercicios)
    );
  }

  /*async getDataShopping_ejercicios(): Promise<Ejercicio[]> {
    try {
      const response = await fetch(this.jsonUrl);

      //por si tiene problemas con la solicitud al json 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const ejercicios = data.shopping.ejercicios as Ejercicio[];  // accedo directamente a vocabulario
      return ejercicios;

    } catch (error) {
      console.error(error);
      return [];
    }
  }*/

  getDataShopping_preguntas(): Observable<Pregunta[]>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.shopping.preguntas)
    );
  }

  /*async getDataShopping_preguntas(): Promise<Pregunta[]> {
    try {
      const response = await fetch(this.jsonUrl);

      //por si tiene problemas con la solicitud al json 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const preguntas = data.shopping.preguntas as Pregunta[];  // accedo directamente a vocabulario
      return preguntas;

    } catch (error) {
      console.error(error);
      return [];
    }
  }*/

  /*RESTAURANTE*/

  getDataRestaurante(): Observable<Restaurante | undefined>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.restaurante)
    );  }

  /*async getDataRestaurante(): Promise<Restaurante | undefined> {
    try {
      const response = await fetch(this.jsonUrl);

      //por si tiene problemas con la solicitud al json 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const restaurante = data.restaurante as Restaurante;  // accedo directamente a shopping
      return restaurante;

    } catch (error) {
      console.error(error);
      return undefined;
    }
  }*/

  getDataRestaurante_vocabulario(): Observable<Vocabulario | undefined>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.restaurante.vocabulario)
    );  }

  /*async getDataRestaurante_vocabulario(): Promise<Vocabulario | undefined> {
    try {
      const response = await fetch(this.jsonUrl);

      //por si tiene problemas con la solicitud al json 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const vocabulario = data.restaurante.vocabulario as Vocabulario;  // accedo directamente a vocabulario
      return vocabulario;

    } catch (error) {
      console.error(error);
      return undefined;
    }
  }*/

  getDataRestaurante_ejercicios(): Observable<Ejercicio[]>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.restaurante.ejercicios)
    );  }

  /*async getDataRestaurante_ejercicios(): Promise<Ejercicio[]> {
    try {
      const response = await fetch(this.jsonUrl);

      //por si tiene problemas con la solicitud al json 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const ejercicios = data.restaurante.ejercicios as Ejercicio[];  // accedo directamente a vocabulario
      return ejercicios;

    } catch (error) {
      console.error(error);
      return [];
    }
  }*/

  getDataRestaurante_preguntas(): Observable<Pregunta[]>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.restaurante.preguntas)
    );  }

  /*async getDataRestaurante_preguntas(): Promise<Pregunta[]> {
    try {
      const response = await fetch(this.jsonUrl);

      //por si tiene problemas con la solicitud al json 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const preguntas = data.restaurante.preguntas as Pregunta[];  // accedo directamente a vocabulario
      return preguntas;

    } catch (error) {
      console.error(error);
      return [];
    }
  }*/

  /*ALOJAMIENTO*/

  getDataAlojamiento(): Observable<Alojamiento | undefined>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.alojamiento)
    );  }

  /*async getDataAlojamiento(): Promise<Alojamiento | undefined> {
    try {
      const response = await fetch(this.jsonUrl);

      //por si tiene problemas con la solicitud al json 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const alojamiento = data.alojamiento as Alojamiento;  // accedo directamente a shopping
      return alojamiento;

    } catch (error) {
      console.error(error);
      return undefined;
    }
  }*/

  getDataAlojamiento_vocabulario(): Observable<Vocabulario | undefined>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.alojamiento.vocabulario)
    );  }

  /*async getDataAlojamiento_vocabulario(): Promise<Vocabulario | undefined> {
    try {
      const response = await fetch(this.jsonUrl);

      //por si tiene problemas con la solicitud al json 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const vocabulario = data.alojamiento.vocabulario as Vocabulario;  // accedo directamente a vocabulario
      return vocabulario;

    } catch (error) {
      console.error(error);
      return undefined;
    }
  }*/

  getDataAlojamiento_ejercicios(): Observable<Ejercicio[]>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.alojamiento.ejercicios)
    );  }

  /*async getDataAlojamiento_ejercicios(): Promise<Ejercicio[]> {
    try {
      const response = await fetch(this.jsonUrl);

      //por si tiene problemas con la solicitud al json 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const ejercicios = data.alojamiento.ejercicios as Ejercicio[];  // accedo directamente a vocabulario
      return ejercicios;

    } catch (error) {
      console.error(error);
      return [];
    }
  }*/

  getDataAlojamiento_preguntas(): Observable<Pregunta[]>{
    return this.http.get<any>(`${this.jsonUrl}/viajero`).pipe(
      map(response => response.alojamiento.preguntas)
    );  }

  /*async getDataAlojamiento_preguntas(): Promise<Pregunta[]> {
    try {
      const response = await fetch(this.jsonUrl);

      //por si tiene problemas con la solicitud al json 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const preguntas = data.alojamiento.preguntas as Pregunta[];  // accedo directamente a vocabulario
      return preguntas;

    } catch (error) {
      console.error(error);
      return [];
    }
  }*/
}
