import { Component } from '@angular/core';
import { Ejercicio } from 'src/app/viajeros/interfaces/ejercicio';
import { ViajeroService } from 'src/app/viajeros/services/viajero.service';

@Component({
  selector: 'app-multiple-choice-vocabulario-shopping',
  templateUrl: './mc-vocabulario-s.component.html',
  styleUrls: ['./mc-vocabulario-s.component.css']
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

  ngOnInit() {
    window.scrollTo(0, 0);
    this.viajeroService.getDataShopping_ejercicios().subscribe(
      {
        next: (voc) => {
          if(voc){
            this.ejerciciosShopping = voc;
          }
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
    //console.log("EJERCICIOS SHOPPING: ");
    //console.log(this.ejerciciosShopping);
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
      this.mostrarBoton = false;
    }
  }


}
