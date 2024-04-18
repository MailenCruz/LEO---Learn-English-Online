import { Injectable } from '@angular/core';
import { Shopping } from '../interfaces/shopping';
import { Restaurante } from '../interfaces/restaurante';
import { Alojamiento } from '../interfaces/alojamiento';
import { Vocabulario } from '../interfaces/vocabulario';
import { Ejercicio } from '../interfaces/ejercicio';
import { Pregunta } from '../interfaces/pregunta';

@Injectable({
  providedIn: 'root'
})
export class ViajeroService {

  private jsonUrl = 'http://localhost:4000/viajero';

  /*SHOPPING*/

  async getDataShopping(): Promise<Shopping | undefined> {
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
  }

  async getDataShopping_vocabulario(): Promise<Vocabulario | undefined> {
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
  }

  async getDataShopping_ejercicios(): Promise<Ejercicio []> {
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
  }

  async getDataShopping_preguntas(): Promise<Pregunta[]> {
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
  }

  /*RESTAURANTE*/

  async getDataRestaurante(): Promise<Restaurante | undefined> {
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
  }

  async getDataRestaurante_vocabulario(): Promise<Vocabulario | undefined> {
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
  }

  async getDataRestaurante_ejercicios(): Promise<Ejercicio []> {
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
  }

  async getDataRestaurante_preguntas(): Promise<Pregunta []> {
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
  }

  /*ALOJAMIENTO*/

  async getDataAlojamiento(): Promise<Alojamiento | undefined> {
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
  }

  async getDataAlojamiento_vocabulario(): Promise<Vocabulario | undefined> {
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
  }

  async getDataAlojamiento_ejercicios(): Promise<Ejercicio[]> {
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
  }

  async getDataAlojamiento_preguntas(): Promise<Pregunta []> {
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
  }





}
