import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-vocaburario-alojamiento',
  templateUrl: './multiple-choice-vocaburario-alojamiento.component.html',
  styleUrls: ['./multiple-choice-vocaburario-alojamiento.component.css']
})
export class MultipleChoiceVocaburarioAlojamientoComponent {
  oraciones = [
    {
      oracion: "The ____ left our luggage in the lobby.",
      respuestas: ["Bellboy","Receptionist","Receipt"],
      respuestaCorrecta: "Bellboy"
    },
    {
      oracion: "Sorry, I lost my ____ and now I can't enter the room.",
      respuestas: ["Passport","Receipt","Key card"],
      respuestaCorrecta: "Key card"
    },
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
