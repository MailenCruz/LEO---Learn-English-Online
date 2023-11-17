import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-preguntas-restaurante',
  templateUrl: './multiple-choice-preguntas-restaurante.component.html',
  styleUrls: ['./multiple-choice-preguntas-restaurante.component.css']
})
export class MultipleChoicePreguntasRestauranteComponent {

  preguntas = [
    {
      oracion: "Where can I make a ____ for Friday?",
      respuestas: ["bill","reservation","table"],
      respuestaCorrecta: "reservation"
    },
    {
      oracion: "Can we see the ____, please?",
      respuestas: ["menu","list","specials"],
      respuestaCorrecta: "menu"
    }
  ];

  preguntaActual: number = 0;
  respuestaSeleccionada: string = '';
  respuestaCorrecta: string = '';
  intentos: number = 0;
  mostrarCuestionario: boolean = true;

  verificarRespuesta() {
    this.intentos++;
    this.respuestaCorrecta = this.respuestaSeleccionada === this.preguntas[this.preguntaActual].respuestaCorrecta ? 'correcta' : 'incorrecta';
  }

  resetearEstado() {
    this.respuestaSeleccionada = '';
    this.respuestaCorrecta = '';
  }

  siguientePregunta() {
    this.preguntaActual++;
    if (this.preguntaActual >= this.preguntas.length) {
      // Si no hay más preguntas, ocultar el cuestionario
      this.mostrarCuestionario = false;
      console.log("¡Fin del cuestionario!");
    } else {
      // Si hay más preguntas, reiniciar el estado
      this.resetearEstado();
    }
  }

}
