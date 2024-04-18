import { Component } from '@angular/core';
import { Ejercicio } from 'src/app/viajeros/interfaces/ejercicio';
import { ViajeroService } from 'src/app/viajeros/services/viajero.service';


@Component({
  selector: 'app-multiple-choice-vocaburario-alojamiento',
  templateUrl: './mc-vocaburario.component.html',
  styleUrls: ['./mc-vocaburario.component.css']
})
export class MultipleChoiceVocaburarioAlojamientoComponent {
  ejerciciosAlojamiento: Ejercicio[]=[];
  oracionActual: number = 0;
  respuestaSeleccionada: string = '';
  respuestaCorrecta: string = '';
  intentos: number = 0;
  mostrarCuestionario: boolean = true;

  mostrarBoton: boolean = false;
  
  constructor(private viajeroService:ViajeroService ){}

  async ngOnInit(){
    try{
      this.ejerciciosAlojamiento = await this.viajeroService.getDataAlojamiento_ejercicios();
      console.log("EJERCICIOS ALOJAMIENTO: ");
      console.log(this.ejerciciosAlojamiento);
    }
    catch(error){
      console.log(error);
    }
  }

  verificarRespuesta() {
    this.intentos++;
    if (this.respuestaSeleccionada === this.ejerciciosAlojamiento[this.oracionActual].respuestaCorrecta) {
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
    if (this.oracionActual >= this.ejerciciosAlojamiento.length) {
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
