import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ChangeDetectorRef } from '@angular/core';
import nlp from 'compromise';
import { Router } from '@angular/router';
import { Correccion } from 'src/app/gramatica/interfaces/correccion';
import { Reescribir } from 'src/app/gramatica/interfaces/reescribir';
import { GramaticaService } from 'src/app/gramatica/services/gramatica.service';
import { Observable, catchError, map, zip } from 'rxjs';
import { of } from 'rxjs';


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

  checkBoton: { afirmativo: boolean, negativo: boolean, interrogativo: boolean } = {
    afirmativo: false,
    negativo: false,
    interrogativo: false
  }

  mostrarBoton: boolean = false;

  oracionCoincide: { [key: string]: boolean } = {
    afirmativo: true,
    negativo: true,
    interrogativo: true
  };

  correccionesPorTipo: { [tipo: string]: Correccion[] | undefined }[] = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private gramaticaService: GramaticaService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getEjercicios();
  }
  
  getEjercicios() {
    let respuesta = this.gramaticaService.getExercisesHttp().subscribe(
      {
        next: (respuesta) => {
          if (respuesta) {
            const { basico } = respuesta;
            this.reescribir = basico.reescribir;
            this.fraseAleatoria();
          }
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
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

    this.oracionCorrecta()
    this.checkRespuesta();
  }

  oracionCorrecta() {
    let resultado: number = 0;

    let lemmasFrase = this.processPhrase(this.randomPhrase.toLocaleLowerCase());

    for (let key in this.respuestas) { //recorre las claves del objeto

      if (this.respuestas.hasOwnProperty(key)) { //si existe el atributo

        let value = this.respuestas[key as keyof Reescribir]; //copia el valor de ese atributo

        if (typeof value === 'string' && value.trim() !== '') { //si no es el string vacío

          (this.check as any)[key] = true; //la respuesta de este input está enviada
          let lemmasInput = this.processPhrase(value.toLocaleLowerCase());

          //Convertir los lemmas en conjuntos
          let setLemmasFrase = new Set(lemmasFrase);
          let setLemmasInput = new Set(lemmasInput);

          let interseccion = new Set([...setLemmasFrase].filter(palabra => setLemmasInput.has(palabra)));

          // Calcular la similitud Jaccard
          resultado = interseccion.size / setLemmasFrase.size;

          // Establecer la propiedad oracionCoincide en función de la similitud
          if (resultado < 0.4) {
            this.oracionCoincide[key as keyof Reescribir] = false;
          }
        }
      }
    }
  }
  processPhrase(phrase: string): string[] {
    const doc = nlp(phrase);
    const lemmas: string[] = [];

    doc.terms().forEach((term: any) => {
      const lemma = term.verbs().toInfinitive().out() || term.out('root');
      lemmas.push(lemma);
    });

    return lemmas;
  }

  checkRespuesta() {

    this.correccionesPorTipo = [];

    for (let key in this.respuestas) { 

      if (this.check[key as keyof Reescribir] === true && this.oracionCoincide[key] === true) { 

        let value = this.respuestas[key as keyof Reescribir]; 

        value = value.charAt(0).toUpperCase() + value.slice(1); 

        this.gramaticaService.getCorreccionHttp(value.trim()).subscribe(
          {
            next: (correccion) => {
              let aux: { [tipo: string]: Correccion[] | undefined } = {};
              aux[key] = correccion;
              this.correccionesPorTipo.push(aux);
            },
            error: (err) => {
              console.log(err);
            }
          })
      }

    }
  }

  siguienteEjercicio() {
    if (this.reescribir.length > 0) {

      this.index = this.index + 1;

      if(this.index == this.reescribir.length){
        this.router.navigate(['/basico-home']);
      }
      else{
        this.fraseAleatoria();
        this.answer.reset();
        this.correccionesPorTipo = [];
      }
    }
  }

  countFlagBoton() {
    let cont = 0;
    for (let key in this.checkBoton) {
      let value = this.checkBoton[key as keyof { afirmativo: boolean, negativo: boolean, interrogativo: boolean }];
      if (value === true) {
        cont++;
      }
    }

    if (cont === 2 && !this.mostrarBoton) {
      this.mostrarBoton = true;
      this.cdr.detectChanges(); // Forzar la detección de cambios
    } else if (cont < 2 && this.mostrarBoton) {
      this.mostrarBoton = false;
      this.cdr.detectChanges(); // Forzar la detección de cambios
    }
  }

  obtenerCorreccion(tipo: string): Correccion[] | undefined {
    const correccionEncontrada = this.correccionesPorTipo.find(obj => obj.hasOwnProperty(tipo)); //objeto
    return correccionEncontrada ? correccionEncontrada[tipo] : undefined;
  }

  reset() {
    this.correccionesPorTipo = [];
    this.check = { afirmativo: false, negativo: false, interrogativo: false };
    this.oracionCoincide = { afirmativo: true, negativo: true, interrogativo: true };
    this.answer.reset();
    this.mostrarBoton = false;
  }

  onInputChange(event: Event, type: string) {
    const newInputValue = (event.target as HTMLInputElement).value;

    if (newInputValue === '') {
      let aux = this.correccionesPorTipo.find((element) => type in element);
      if (aux) {
        aux[type] = [];
      }
      this.check[type as keyof { afirmativo: boolean, negativo: boolean, interrogativo: boolean }] = false;
      this.oracionCoincide[type] = true;
    }
  }

  flagBoton(type: string, flag: boolean) {
    this.checkBoton[type as keyof { afirmativo: boolean, negativo: boolean, interrogativo: boolean }] = flag;
    this.countFlagBoton();
  }
}