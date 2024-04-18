import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import nlp from 'compromise/three';
import { Correccion } from 'src/app/gramatica/interfaces/correccion';
import { GramaticaService } from 'src/app/gramatica/services/gramatica.service';

@Component({
  selector: 'ordenar-ejercicio-av',
  templateUrl: './ordenar-ejercicio-av.component.html',
  styleUrls: ['./ordenar-ejercicio-av.component.css']
})
export class OrdenarEjercicioAvComponent {
  ordenar: string[] = [];
  
  index: number = 0;
  randomPhrase: string = '';
  correcciones: Correccion[] | undefined = [];
  check: boolean = false;
  oracionCoincide: boolean = true;
  correcto: boolean = false;
  
  answer: FormGroup = this.formBuilder.group({
    ordenar: ['', Validators.required]
  });

  constructor(private router:Router, private formBuilder: FormBuilder, private gramaticaService: GramaticaService, private cdr: ChangeDetectorRef) { }

  async ngOnInit() {
    await this.getEjercicios();
    this.randomPhrase = this.ordenar[this.index];
  }

  async getEjercicios() {
    try {
      let respuesta = await this.gramaticaService.getExercises();

      if (respuesta) {
        const { avanzado } = respuesta;
        this.ordenar = avanzado.ordenar;
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  siguienteEjercicio() {
    if (this.ordenar.length > 0) {
      this.index = (this.index + 1);

      if(this.index == this.ordenar.length){
        this.router.navigate(['/basico-home']);
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

  async checkRespuesta(oracion: string) {
    try {
      if (this.oracionCoincide === true) {
        oracion = oracion.charAt(0).toUpperCase() + oracion.slice(1);
        this.correcciones = await this.gramaticaService.getCorreccion(oracion);

        if (this.correcciones?.length === 0) {
          this.correcto = true;
        }
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

    let frase = this.randomPhrase.split('/');
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
