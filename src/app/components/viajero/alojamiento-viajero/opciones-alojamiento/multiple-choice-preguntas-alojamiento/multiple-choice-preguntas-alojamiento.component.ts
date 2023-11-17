import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-preguntas-alojamiento',
  templateUrl: './multiple-choice-preguntas-alojamiento.component.html',
  styleUrls: ['./multiple-choice-preguntas-alojamiento.component.css']
})
export class MultipleChoicePreguntasAlojamientoComponent {
  preguntas = [
    {
      oracion: "Where is the extra ____?",
      respuestas: ["Twin room","Pillow","Single room"],
      respuestaCorrecta: "Pillow"
    },
    {
      oracion: "Can I get a ____ to access my room?",
      respuestas: ["Key card","Confirmation number","Reservation"],
      respuestaCorrecta: "Key card"
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
