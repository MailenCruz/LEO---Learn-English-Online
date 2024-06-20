import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import nlp from 'compromise/three';
import { Correccion } from 'src/app/gramatica/interfaces/correccion';
import { Ordenar } from 'src/app/gramatica/interfaces/ordenar';
import { GramaticaService } from 'src/app/gramatica/services/gramatica.service';


@Component({
  selector: 'ordenar-ejercicio-int',
  templateUrl: './ordenar-ejercicio-int.component.html',
  styleUrls: ['./ordenar-ejercicio-int.component.css']
})
export class OrdenarEjercicioIntComponent {
  ganador: boolean = false;
  loading: boolean = false;

  ordenar: Ordenar[] = [];
  
  index: number = 0;
  randomPhrase: Ordenar = {
    oracion: '',
    respuesta: ''
  };

  correcciones: Correccion[] | undefined = [];
  check: boolean = false;
  oracionCoincide: boolean = true;
  correcto: boolean = false;
  
  answer: FormGroup = this.formBuilder.group({
    ordenar: ['', Validators.required]
  });

  constructor(private router:Router, private formBuilder: FormBuilder, private gramaticaService: GramaticaService, private cdr: ChangeDetectorRef) { }

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
            this.ordenar = intermedio.ordenar;
            this.randomPhrase = this.ordenar[this.index];
          }
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  getCorreccion(phrase:string, answer: string){
    this.loading = true;

    answer = answer.toLowerCase();
    answer = answer.replace(/\s+/g, ' ');
    answer = answer.trim();

    this.ordenar.forEach(ejercicio => {
      if(ejercicio.oracion === phrase){
        if(ejercicio.respuesta === answer){
          this.correcto = true;
          this.loading = false;
        }
      } 
    });
    this.loading = false;
  }


  siguienteEjercicio() {
    if (this.ordenar.length > 0) {
      this.index = (this.index + 1);

      if(this.index == this.ordenar.length){
        this.ganador = true;
        //this.router.navigate(['/intermedio-home']);
      }
      else{
        this.randomPhrase = this.ordenar[this.index];
  
        this.answer.reset();
        this.check = false;
        this.correcciones = [];
        this.oracionCoincide = true;
        this.correcto = false;
      }
    }
  }

  guardarRespuesta() {
    let respuesta = this.answer.controls['ordenar'].value;
    this.check = true;
    this.correcto = false;
    this.oracionCoincide = true;

    this.oracionCorrecta();
    this.checkRespuesta(respuesta);
  }

  checkRespuesta(oracion: string){
    if(this.oracionCoincide === true){
      this.getCorreccion(this.randomPhrase.oracion, oracion);
    }
  }

  /*checkRespuesta(oracion: string) {
    if(this.oracionCoincide === true){
      this.loading = true;

      oracion = oracion.charAt(0).toUpperCase() + oracion.slice(1);
      this.gramaticaService.getCorreccionHttp(oracion).subscribe(
        {
          next: (correccion) => {
            this.correcciones = correccion;
  
            if (this.correcciones && this.correcciones.length === 0) {
              this.correcto = true;
            }
            this.loading = false;
          },
          error: (err) => {
            console.log(err);
            this.loading = false;
          }
        }
      )
    }
  }*/

  reset() {
    this.correcciones = [];
    this.check = false;
    this.answer.reset();
    this.oracionCoincide = true;
    this.correcto = false;
  }

  onInputChange(event: Event) {
    const newInputValue = (event.target as HTMLInputElement).value;

    if (newInputValue === '') {
      this.correcciones = [];
      this.oracionCoincide = true;
      this.check = false;
      this.correcto = false;
    }
  }
  oracionCorrecta() {
    let resultado: number = 0;

    let frase = this.randomPhrase.oracion.split('/');
    let fraseFinal = frase.join(' ');
    let lemmasFrase = this.processPhrase(fraseFinal.toLocaleLowerCase());

    let value = this.answer.controls['ordenar'].value;
    let lemmasInput = this.processPhrase(value.toLocaleLowerCase());

    let setLemmasFrase = new Set(lemmasFrase);
    let setLemmasInput = new Set(lemmasInput);

    let interseccion = new Set([...setLemmasFrase].filter(palabra => setLemmasInput.has(palabra)));

    resultado = interseccion.size / setLemmasFrase.size;

    if (resultado < 0.4) {
      this.oracionCoincide = false;
      this.correcto = false;
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

}
