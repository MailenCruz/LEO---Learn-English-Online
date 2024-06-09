import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import nlp from 'compromise';
import { Correccion } from 'src/app/gramatica/interfaces/correccion';
import { Reescribir } from 'src/app/gramatica/interfaces/reescribir';
import { GramaticaService } from 'src/app/gramatica/services/gramatica.service';

@Component({
  selector: 'reescribir-ejercicio-int',
  templateUrl: './reescribir-ejercicio-int.component.html',
  styleUrls: ['./reescribir-ejercicio-int.component.css']
})
export class ReescribirEjercicioIntComponent {
  loading: boolean = false;

  reescribir: Reescribir[] = [];

  phraseType: "afirmativo" | "negativo" | "interrogativo" = "afirmativo";

  randomPhrase: string = '';
  index: number = 0;
  intentos: number = 0;

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

  oracionFormato: { [key: string]: boolean } = {
    afirmativo: false,
    negativo: false,
    interrogativo: false
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
            const { intermedio } = respuesta;
            this.reescribir = intermedio.reescribir;
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
    if(this.intentos > 0){
      this.mostrarBoton = false;

      this.oracionFormato = { afirmativo: false, negativo: false, interrogativo: false };
      this.oracionCoincide = { afirmativo: true, negativo: true, interrogativo: true };
      this.check = { afirmativo: false, negativo: false, interrogativo: false };
      this.checkBoton = { afirmativo: false, negativo: false, interrogativo: false };
    }

    this.respuestas = {
      afirmativo: this.answer.controls['afirmativo'].value,
      negativo: this.answer.controls['negativo'].value,
      interrogativo: this.answer.controls['interrogativo'].value
    };

    this.oracionCorrecta();
    this.analizarFormato();
    this.checkRespuesta();
  }

  analizarFormato() {
    this.oracionFormato = { afirmativo: false, negativo: false, interrogativo: false};

    let formatoConsigna = this.getFormatoOracion(this.randomPhrase);
    this.oracionFormato[formatoConsigna as keyof Reescribir] = true;

    for (let key in this.respuestas) {
      if(key !== formatoConsigna){

        if(this.respuestas[key as keyof Reescribir]){
          let formatoRespuesta = this.getFormatoOracion(this.respuestas[key as keyof Reescribir]);
          
          if(formatoRespuesta === key){
            this.oracionFormato[key] = true;
          }
        }
      }
    }
  }

  getFormatoOracion(respuesta: string): string {
    if (this.esInterrogativo(respuesta)) {
      return 'interrogativo';
    } else if (this.esNegativo(respuesta)) {
      return 'negativo';
    } else if(this.esAfirmativo(respuesta)){
      return 'afirmativo';
    } else {
      return 'sin formato';
    }
  }

  esNegativo(oracion: string): boolean {
    return /(wh|how|why|who|what|where|when|do|did|does|was|were|is|are|am|will).*\b(not|n't)/i.test(oracion);
  }

  esInterrogativo(oracion: string): boolean {
    return /^(wh|how|why|who|what|where|when|do|did|does|was|were|is|are|am|will)\b.*\?$/i.test(oracion);
  }  

  esAfirmativo(oracion: string): boolean {
    const formatoNegInt = /n't|not|\?/i;
    return !formatoNegInt.test(oracion);
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
    this.intentos++;
    
    this.correccionesPorTipo = [];
    
    for (let key in this.respuestas) {
      
      if (this.check[key as keyof Reescribir] === true && this.oracionCoincide[key] === true && this.oracionFormato[key] === true) { 
        this.loading = true;
        let value = this.respuestas[key as keyof Reescribir];
        
        if(value !== null){
          value = value.charAt(0).toUpperCase() + value.slice(1);

          this.gramaticaService.getCorreccionHttp(value.trim()).subscribe(
            {
              next: (correccion) => {
                let aux: { [tipo: string]: Correccion[] | undefined } = {};
                aux[key] = correccion;
                this.correccionesPorTipo.push(aux);
                this.loading = false;
              },
              error: (err) => {
                console.log(err);
                this.loading = false;
              }
            }
          )
        }
      }

    }
  }

  siguienteEjercicio() {
    if (this.reescribir.length > 0) {

      this.index = this.index + 1;

      if (this.index == this.reescribir.length) {
        this.router.navigate(['/basico-home']);
      }
      else {
        this.fraseAleatoria();

        this.answer.reset();
        this.correccionesPorTipo = [];
        this.mostrarBoton = false;

        this.oracionFormato = { afirmativo: false, negativo: false, interrogativo: false };
        this.oracionCoincide = { afirmativo: true, negativo: true, interrogativo: true };
        this.check = { afirmativo: false, negativo: false, interrogativo: false };
        this.checkBoton = { afirmativo: false, negativo: false, interrogativo: false };

        this.intentos = 0;
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
    this.checkBoton = { afirmativo: false, negativo: false, interrogativo: false };
    this.oracionCoincide = { afirmativo: true, negativo: true, interrogativo: true };
    this.oracionFormato = { afirmativo: false, negativo: false, interrogativo: false};
    this.answer.reset();
    this.mostrarBoton = false;
    this.intentos = 0;
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
      this.oracionFormato[type] = false;
    }
  }

  flagBoton(type: string, flag: boolean) {
    this.checkBoton[type as keyof { afirmativo: boolean, negativo: boolean, interrogativo: boolean }] = flag;
    this.countFlagBoton();
  }
}
