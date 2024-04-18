import { Component } from '@angular/core';
import { Ejercicio } from 'src/app/viajeros/interfaces/ejercicio';
import { ViajeroService } from 'src/app/viajeros/services/viajero.service';


@Component({
  selector: 'app-multiple-choice-vocabulario-restaurante',
  templateUrl: './mc-vocabulario-r.component.html',
  styleUrls: ['./mc-vocabulario-r.component.css']
})
export class MultipleChoiceVocabularioRestauranteComponent {

  ejerciciosRestaurante: Ejercicio[]=[];
  oracionActual: number = 0;
  respuestaSeleccionada: string = '';
  respuestaCorrecta: string = '';
  intentos: number = 0;
  mostrarCuestionario: boolean = true;

  mostrarBoton: boolean = false;
  
  constructor(private viajeroService:ViajeroService){}

  async ngOnInit(){
    try{
      this.ejerciciosRestaurante = await this.viajeroService.getDataRestaurante_ejercicios();
      console.log("EJERCICIOS RESTAURANTE: ");
      console.log(this.ejerciciosRestaurante);
    }
    catch(error){
      console.log(error);
    }
  }

  verificarRespuesta() {
    this.intentos++;
    if (this.respuestaSeleccionada === this.ejerciciosRestaurante[this.oracionActual].respuestaCorrecta) {
      this.respuestaCorrecta = 'correcta';
      this.mostrarBoton = true;
    } else {
      this.respuestaCorrecta = 'incorrecta';
    };
  }

  resetearEstado() {
    this.respuestaSeleccionada = '';
    this.respuestaCorrecta = '';
  }

  siguientePregunta() {
    this.oracionActual++;
    if (this.oracionActual >= this.ejerciciosRestaurante.length) {
      // Si no hay más preguntas, ocultar el cuestionario
      this.mostrarCuestionario = false;
      console.log("¡Fin del cuestionario!");
    } else {
      // Si hay más preguntas, reiniciar el estado
      this.resetearEstado();
      this.mostrarBoton=false;
    }
  }
  
}
