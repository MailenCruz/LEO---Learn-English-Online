import { Component } from '@angular/core';
import { Pregunta } from 'src/app/viajeros/interfaces/pregunta';
import { Shopping } from 'src/app/viajeros/interfaces/shopping';
import { ViajeroService } from 'src/app/viajeros/services/viajero.service';


@Component({
  selector: 'app-multiple-choice-preguntas-shopping',
  templateUrl: './mc-preguntas-s.component.html',
  styleUrls: ['./mc-preguntas-s.component.css']
})
export class MultipleChoicePreguntasShoppingComponent {

  preguntasShopping: Pregunta[] = [];

  oracionActual: number = 0;
  respuestaSeleccionada: string = '';
  respuestaCorrecta: string = '';
  intentos: number = 0;
  mostrarCuestionario: boolean = true;

  mostrarBoton: boolean = false;

  constructor(private viajeroService: ViajeroService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.viajeroService.getDataShopping_preguntas().subscribe(
      {
        next: (preg) => {
          if(preg){
            this.preguntasShopping = preg;
          }
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  verificarRespuesta() {
    this.intentos++;
    if (this.respuestaSeleccionada === this.preguntasShopping[this.oracionActual].respuestaCorrecta) {
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
    if (this.oracionActual >= this.preguntasShopping.length) {
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
