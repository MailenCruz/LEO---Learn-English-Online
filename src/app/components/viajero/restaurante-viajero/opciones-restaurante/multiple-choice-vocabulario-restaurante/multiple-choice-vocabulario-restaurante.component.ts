import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-vocabulario-restaurante',
  templateUrl: './multiple-choice-vocabulario-restaurante.component.html',
  styleUrls: ['./multiple-choice-vocabulario-restaurante.component.css']
})
export class MultipleChoiceVocabularioRestauranteComponent {

  oraciones = [
    {
      oracion: "The ____ is delicious.",
      respuestas: ["food","dish","dessert"],
      "respuestaCorrecta": "food"
    },
    {
      oracion: "I'd like the ______, please.",
      respuestas: ["chicken","salad","pasta"],
      respuestaCorrecta: "chicken"
    }
  ];

  oracionActual: number = 0;
  respuestaSeleccionada: string = '';
  respuestaCorrecta: string = '';
  intentos: number = 0;
  mostrarCuestionario: boolean = true;

  verificarRespuesta() {
    this.intentos++;
    this.respuestaCorrecta = this.respuestaSeleccionada === this.oraciones[this.oracionActual].respuestaCorrecta ? 'correcta' : 'incorrecta';
  }

  resetearEstado() {
    this.respuestaSeleccionada = '';
    this.respuestaCorrecta = '';
  }

  siguientePregunta() {
    this.oracionActual++;
    if (this.oracionActual >= this.oraciones.length) {
      // Si no hay más preguntas, ocultar el cuestionario
      this.mostrarCuestionario = false;
      console.log("¡Fin del cuestionario!");
    } else {
      // Si hay más preguntas, reiniciar el estado
      this.resetearEstado();
    }
  }
}
