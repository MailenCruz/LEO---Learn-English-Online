import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Correccion } from 'src/app/interfaces/correccion';
import { Reescribir } from 'src/app/interfaces/reescribir';
import { GramaticaService } from 'src/app/services/gramatica.service';

@Component({
  selector: 'reescribir-ejercicio',
  templateUrl: './reescribir-ejercicio.component.html',
  styleUrls: ['./reescribir-ejercicio.component.css']
})

export class ReescribirEjercicioComponent {
  reescribir: Reescribir[] = [];

  phraseType: "afirmativo" | "negativo" | "interrogativo" = "afirmativo";

  randomPhrase: string = '';
  index: number = 0;


  answer: FormGroup = this.formBuilder.group({
    afirmativo: ['', [Validators.required]],
    negativo: ['', [Validators.required]],
    interrogativo: ['', [Validators.required]]
  })

  respuestas: Reescribir = {
    afirmativo: '',
    negativo: '',
    interrogativo: ''
  }

  check: { afirmativo: boolean, negativo: boolean, interrogativo: boolean } = {
    afirmativo: false,
    negativo: false,
    interrogativo: false
  }

  correccionesPorTipo: { [tipo: string]: Correccion[] | undefined }[] = [];

  constructor(private formBuilder: FormBuilder, private gramaticaService: GramaticaService) { }

  async ngOnInit() {
    await this.getEjercicios();
    this.fraseAleatoria();
  }

  async getEjercicios() { //trae desde el json y carga al array REESCRIBIR los ejercicios
    try {
      const respuesta = await this.gramaticaService.getExercises();

      if (respuesta) {
        const { basico } = respuesta;
        this.reescribir = basico.reescribir;
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  fraseAleatoria() {
    const types = ['afirmativo', 'negativo', 'interrogativo'] as const;
    this.phraseType = types[Math.floor(Math.random() * types.length)];
    this.randomPhrase = this.reescribir[this.index][this.phraseType];
  }

  guardarRespuesta() {
    this.respuestas = {
      afirmativo: this.answer.controls['afirmativo'].value,
      negativo: this.answer.controls['negativo'].value,
      interrogativo: this.answer.controls['interrogativo'].value
    };
    this.checkRespuesta();
  }

  async checkRespuesta() {
    try {
      for (let key in this.respuestas) { //recorre las claves del objeto

        if (this.respuestas.hasOwnProperty(key)) { //si existe el atributo

          let value = this.respuestas[key as keyof Reescribir]; //copia el valor de ese atributo

          if (typeof value === 'string' && value.trim() !== '') { //si no es el string vacío

            value = value.charAt(0).toUpperCase() + value.slice(1);
            let correcciones: Correccion[] | undefined = await this.gramaticaService.getCorreccion(value.trim()); //trae las correciones
            let aux: { [tipo: string]: Correccion[] | undefined } = {};
            aux[key] = correcciones;
            this.correccionesPorTipo.push(aux);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  siguienteEjercicio() {
    if (this.reescribir.length > 0) {
      this.index = (this.index + 1) % this.reescribir.length;
      this.fraseAleatoria();

      this.answer.reset();
      this.correccionesPorTipo = [];
    }
  }
  obtenerCorreccion(tipo: string): Correccion[] | undefined {
    const correccionEncontrada = this.correccionesPorTipo.find(obj => obj.hasOwnProperty(tipo)); //objeto

    if (correccionEncontrada) {

      if (correccionEncontrada[tipo]?.length === 0) {
        (this.check as any)[tipo] = true;
      }

      return correccionEncontrada[tipo]; //el value del objeto según la key 
    } else {
      return undefined;
    }
  }

  reset() {
    this.correccionesPorTipo = [];
    this.check = {afirmativo: false, negativo: false, interrogativo: false};
    this.answer.reset();
  }

}
