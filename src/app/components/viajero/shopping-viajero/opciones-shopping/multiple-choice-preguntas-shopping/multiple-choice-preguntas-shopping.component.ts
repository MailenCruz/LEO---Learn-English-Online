import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-preguntas-shopping',
  templateUrl: './multiple-choice-preguntas-shopping.component.html',
  styleUrls: ['./multiple-choice-preguntas-shopping.component.css']
})
export class MultipleChoicePreguntasShoppingComponent {
  
  preguntas = [
    {
      oracion: "I'm looking for a gift for my mom. Where can I find a good _____?",
      respuestas: ["wallet","cashier","gift shop","basket"],
      respuestaCorrecta: "gift shop"
    },
    {
      oracion: "I need to try on these jeans. Is there a _____ nearby?",
      respuestas: ["clearance","fitting room","salesperson","jewelry"],
      respuestaCorrecta: "fitting room"
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
