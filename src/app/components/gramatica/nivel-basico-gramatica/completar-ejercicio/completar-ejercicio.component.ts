import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Completar } from 'src/app/interfaces/completar';
import { Correccion } from 'src/app/interfaces/correccion';
import { GramaticaService } from 'src/app/services/gramatica.service';

@Component({
  selector: 'completar-ejercicio',
  templateUrl: './completar-ejercicio.component.html',
  styleUrls: ['./completar-ejercicio.component.css']
})

export class CompletarEjercicioComponent {
  
  completar: Completar[] = [];

  randomPhrase: Completar = {
    oracion: '',
    respuestas: []
  };

  index: number = 0;
  respuesta: string = '';
  respuestaEnviada: boolean = false;
  correcciones: Correccion[] | undefined = [];
  check: boolean = false;

  answer: FormGroup = this.formBuilder.group ({
    completar: ''
  })

  constructor(private formBuilder: FormBuilder, private gramaticaService: GramaticaService) { }

  async ngOnInit() {
    await this.getEjercicios();
    this.randomPhrase = this.completar[this.index]
  }
  async getEjercicios(){
    try{
      let respuesta = await this.gramaticaService.getExercises();

      if (respuesta) {
        const { basico } = respuesta;
        this.completar = basico.completar;
      }
    }
    catch(error){
      console.log(error);
    }
  }

  siguienteEjercicio() {
    if (this.completar.length > 0) {
      this.index = (this.index + 1) % this.completar.length;
      this.randomPhrase = this.completar[this.index];

      this.answer.reset();
      this.respuestaEnviada = false;
      this.correcciones = [];
    }
  }

  guardarRespuesta() {
    this.respuesta = this.answer.controls['completar'].value;
    let oracion = this.randomPhrase.oracion.replace(/____/, this.respuesta);
    this.respuestaEnviada = true;
    this.checkRespuesta(oracion);
  }

  async checkRespuesta(oracion: string){
    try{
      oracion = oracion.charAt(0).toUpperCase() + oracion.slice(1);
      this.correcciones = await this.gramaticaService.getCorreccion(oracion);

      if(this.correcciones?.length === 0){
        this.check = true;
      }
    }
    catch(error){
      console.log(error);
    }
  }

  reset(){
    this.correcciones = [];
    this.check = false;
    this.answer.reset();
  }
}
