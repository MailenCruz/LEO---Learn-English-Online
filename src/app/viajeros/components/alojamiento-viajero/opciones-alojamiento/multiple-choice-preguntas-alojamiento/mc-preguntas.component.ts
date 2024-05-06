import { Component } from '@angular/core';
import { Pregunta } from 'src/app/viajeros/interfaces/pregunta';
import { ViajeroService } from 'src/app/viajeros/services/viajero.service';

@Component({
  selector: 'app-multiple-choice-preguntas-alojamiento',
  templateUrl: './mc-preguntas.component.html',
  styleUrls: ['./mc-preguntas.component.css']
})
export class MultipleChoicePreguntasAlojamientoComponent {

  preguntasAlojamiento: Pregunta[] = [];

  oracionActual: number = 0;
  respuestaSeleccionada: string = '';
  respuestaCorrecta: string = '';
  intentos: number = 0;
  mostrarCuestionario: boolean = true;

  mostrarBoton: boolean = false;

  constructor(private viajeroService: ViajeroService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.viajeroService.getDataAlojamiento_preguntas().subscribe(
      {
        next: (preg) => {
          if(preg){
            this.preguntasAlojamiento = preg;
          }
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
    //console.log("PREGUNTAS ALOJAMIENTO: ");
    //console.log(this.preguntasAlojamiento);
  }

  verificarRespuesta() {
    this.intentos++;
    if (this.respuestaSeleccionada === this.preguntasAlojamiento[this.oracionActual].respuestaCorrecta) {
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
    if (this.oracionActual >= this.preguntasAlojamiento.length) {
      // Si no hay más preguntas, ocultar el cuestionario
      this.mostrarCuestionario = false;
      console.log("¡Fin del cuestionario!");
    } else {
      // Si hay más preguntas, reiniciar el estado
      this.resetearEstado();
      this.mostrarBoton = false;
    }
  }
}
