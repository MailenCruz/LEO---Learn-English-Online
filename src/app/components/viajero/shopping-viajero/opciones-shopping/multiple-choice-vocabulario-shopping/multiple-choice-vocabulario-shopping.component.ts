import { Component } from '@angular/core';
import { Ejercicio } from 'src/app/interfaces/interfaces-viajero/ejercicio';
import { ViajeroService } from 'src/app/services/viajero.service';

@Component({
  selector: 'app-multiple-choice-vocabulario-shopping',
  templateUrl: './multiple-choice-vocabulario-shopping.component.html',
  styleUrls: ['./multiple-choice-vocabulario-shopping.component.css']
})
export class MultipleChoiceVocabularioShoppingComponent {
 
  ejerciciosShopping: Ejercicio[] = [];
  oracionActual: number = 0;
  respuestaSeleccionada: string = '';
  respuestaCorrecta: string = '';
  intentos: number = 0;
  mostrarCuestionario: boolean = true;

  mostrarBoton: boolean = false;

  constructor(private viajeroService: ViajeroService) { }

  async ngOnInit() {
    try {
      this.ejerciciosShopping = await this.viajeroService.getDataShopping_ejercicios();
      console.log("EJERCICIOS SHOPPING: ");
      console.log(this.ejerciciosShopping);
    }
    catch (error) {
      console.log(error);
    }
  }

  verificarRespuesta() {
    this.intentos++;
    if (this.respuestaSeleccionada === this.ejerciciosShopping[this.oracionActual].respuestaCorrecta) {
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
    if (this.oracionActual >= this.ejerciciosShopping.length) {
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
