import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ChangeDetectorRef } from '@angular/core';
import nlp from 'compromise';
import { Router } from '@angular/router';
import { Completar } from 'src/app/gramatica/interfaces/completar';
import { Correccion } from 'src/app/gramatica/interfaces/correccion';
import { GramaticaService } from 'src/app/gramatica/services/gramatica.service';

@Component({
  selector: 'completar-ejercicio',
  templateUrl: './completar-ejercicio.component.html',
  styleUrls: ['./completar-ejercicio.component.css']
})

export class CompletarEjercicioComponent {

  completar: Completar[] = [];

  index: number = 0;
  randomPhrase: Completar = {
    oracion: '',
    respuestas: []
  };

  correcciones: Correccion[] | undefined = [];

  respuesta: string = '';
  check: boolean = false;
  correcto: boolean = false;

  answer: FormGroup = this.formBuilder.group({
    completar: ['', Validators.required]
  })

  constructor(private router:Router, private formBuilder: FormBuilder, private gramaticaService: GramaticaService, private cdr: ChangeDetectorRef) { }

  async ngOnInit() {
    await this.getEjercicios();
    this.randomPhrase = this.completar[this.index]
  }

  async getEjercicios() {
    try {
      let respuesta = await this.gramaticaService.getExercises();

      if (respuesta) {
        const { basico } = respuesta;
        this.completar = basico.completar;
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  siguienteEjercicio() {
    if (this.completar.length > 0) {
      this.index = (this.index + 1);

      if(this.index == this.completar.length){
        this.router.navigate(['/basico-home']);
      }
      else{
        this.randomPhrase = this.completar[this.index];
  
        this.answer.reset();
        this.check = false;
        this.correcciones = [];
        this.correcto = false;
      }

    }
  }

  guardarRespuesta() {
    this.respuesta = this.answer.controls['completar'].value;
    let oracion = this.randomPhrase.oracion.replace(/____/, this.respuesta);

    this.check = true;
    this.correcto = false;
    this.checkRespuesta(oracion);
  }

  async checkRespuesta(oracion: string) {
    try {
      oracion = oracion.charAt(0).toUpperCase() + oracion.slice(1);
      this.correcciones = await this.gramaticaService.getCorreccion(oracion);

      if (this.correcciones?.length === 0) {
        this.correcto = true;
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  reset() {
    this.correcciones = [];
    this.check = false;
    this.answer.reset();
    this.correcto = false;
  }
}