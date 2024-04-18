import { Injectable } from '@angular/core';
import { Gramatica } from '../interfaces/gramatica';
import { Correccion } from '../interfaces/correccion';

@Injectable({
  providedIn: 'root'
})
export class GramaticaService {

  url: string = "http://localhost:4000/gramatica"
  urlAPI: string = "https://api.languagetool.org/v2/check"

  constructor() { }

  async getExercises(): Promise<Gramatica | undefined> { //trae desde el json todos los ejercicios de gramatica
    try {
      const resultado = await fetch(this.url, { method: 'GET' })
      const ejercicios = resultado.json();

      return ejercicios;
    }
    catch (error) {
      console.log(error);
    }
    return undefined;
  }

  async getCorreccion(answer: string): Promise<Correccion[] | undefined> {
    try {
      const data = new URLSearchParams();
      data.append('text', answer);
      data.append('language', 'en');
      data.append('enabledOnly', 'false');

      const respuesta = await fetch(
        this.urlAPI,
        {
          method: 'POST',
          body: data,
          headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }
        }
      )

      if (respuesta.ok) {
        let json = await respuesta.json();
        let { matches } = json;
        let correcciones: Correccion[] = [];

        matches.forEach((element: any) => {
          let { message, replacements } = element;

          let arreglo: string[] = replacements.map((replacement: any) => replacement.value);

          let error: Correccion = {
            message,
            replacements: arreglo,
          };
          correcciones.push(error);
        })
        
        return correcciones;
      }
    }
    catch (error) {
      console.log(error);
    }

    return undefined;
  }
}

