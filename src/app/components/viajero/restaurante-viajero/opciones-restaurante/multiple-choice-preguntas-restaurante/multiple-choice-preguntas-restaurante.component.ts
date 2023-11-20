import { Component } from '@angular/core';
import { Pregunta } from 'src/app/interfaces/interfaces-viajero/pregunta';
import { ViajeroService } from 'src/app/services/viajero.service';

@Component({
  selector: 'app-multiple-choice-preguntas-restaurante',
  templateUrl: './multiple-choice-preguntas-restaurante.component.html',
  styleUrls: ['./multiple-choice-preguntas-restaurante.component.css']
})
export class MultipleChoicePreguntasRestauranteComponent {

  preguntasRestaurante: Pregunta[]=[];
  oracionActual: number = 0;
  respuestaSeleccionada: string = '';
  respuestaCorrecta: string = '';
  intentos: number = 0;
  mostrarCuestionario: boolean = true;

  mostrarBoton: boolean = false;
  
  constructor(private viajeroService:ViajeroService ){}

  async ngOnInit(){
    try{
      this.preguntasRestaurante = await this.viajeroService.getDataRestaurante_preguntas();
      console.log("PREGUNTAS RESTAURANTE: ");
      console.log(this.preguntasRestaurante);
    }
    catch(error){
      console.log(error);
    }
  }

  verificarRespuesta() {
    this.intentos++;
    if (this.respuestaSeleccionada === this.preguntasRestaurante[this.oracionActual].respuestaCorrecta) {
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
    if (this.oracionActual >= this.preguntasRestaurante.length) {
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
