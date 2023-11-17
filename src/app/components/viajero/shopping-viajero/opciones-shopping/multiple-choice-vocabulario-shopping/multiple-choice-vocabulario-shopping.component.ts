import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-vocabulario-shopping',
  templateUrl: './multiple-choice-vocabulario-shopping.component.html',
  styleUrls: ['./multiple-choice-vocabulario-shopping.component.css']
})
export class MultipleChoiceVocabularioShoppingComponent {

  oraciones = [
    
    {
      oracion: "I'd like to pay with my ______, please.",
      respuestas: ["cash", "wallet", "credit card", "basket"],
      respuestaCorrecta: "credit card"
    },
    {
      oracion: "I need to _____ this handbag for a different color.",
      respuestas: [ "buy", "exchange", "return", "size"],
      respuestaCorrecta: "exchange"
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
