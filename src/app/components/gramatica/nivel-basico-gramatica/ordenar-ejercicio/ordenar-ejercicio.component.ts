import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Correccion } from 'src/app/interfaces/correccion';
import { GramaticaService } from 'src/app/services/gramatica.service';

@Component({
  selector: 'ordenar-ejercicio',
  templateUrl: './ordenar-ejercicio.component.html',
  styleUrls: ['./ordenar-ejercicio.component.css']
})
export class OrdenarEjercicioComponent {

  constructor(private  formBuilder: FormBuilder, private gramaticaService: GramaticaService) {}

  ordenar: string[] = [];

  index: number = 0;
  randomPhrase: string = '';
  
  respuestaEnviada: boolean = false;
  correcciones: Correccion[] | undefined = [];

  answer: FormGroup = this.formBuilder.group({
    ordenar: ''
  });

  async ngOnInit() {
    await this.getEjercicios();
    this.randomPhrase = this.ordenar[this.index];
  }

  async getEjercicios(){
    try{
      let respuesta = await this.gramaticaService.getExercises();

      if (respuesta) {
        const { basico } = respuesta;
        this.ordenar = basico.ordenar;
      }
    }
    catch(error){
      console.log(error);
    }
  }

  siguienteEjercicio() {
    if (this.ordenar.length > 0) {
      this.index = (this.index + 1) % this.ordenar.length;
      this.randomPhrase = this.ordenar[this.index];

      this.answer.reset();
      this.respuestaEnviada = false;
      this.correcciones = [];
    }
  }

  guardarRespuesta() {
    let respuesta = this.answer.controls['ordenar'].value;
    this.checkRespuesta(respuesta);
    this.respuestaEnviada = true;
  }

  async checkRespuesta(oracion: string){
    try{
      oracion = oracion.charAt(0).toUpperCase() + oracion.slice(1);
      this.correcciones = await this.gramaticaService.getCorreccion(oracion);
    }
    catch(error){
      console.log(error);
    }
  }

}
