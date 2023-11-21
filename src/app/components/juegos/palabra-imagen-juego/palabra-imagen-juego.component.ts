import { Component, ElementRef, Renderer2 } from '@angular/core';
import { palabrasJuego } from 'src/app/interfaces/palabrasJuego';

@Component({
  selector: 'app-palabra-imagen-juego',
  templateUrl: './palabra-imagen-juego.component.html',
  styleUrls: ['./palabra-imagen-juego.component.css']
})

export class PalabraImagenJuegoComponent {

  tarjetasDestapadas: number = 0;
  tarjeta1: HTMLElement | undefined;
  tarjeta2: HTMLElement | undefined;
  primerResultado: number | null = null;
  segundoResultado: number | null = null;
  movimientos: number = 0;
  aciertos: number = 0;
  ganador: boolean = false;



  imagenes: palabrasJuego[] = [
    { id: 0, nombre: '../../../../assets/img-juego/img-palabra/imagenes/0.png' },
    { id: 0, nombre: '../../../../assets/img-juego/img-palabra/palabras/0.png' },

    { id: 1, nombre: '../../../../assets/img-juego/img-palabra/imagenes/1.png' },
    { id: 1, nombre: '../../../../assets/img-juego/img-palabra/palabras/1.png' },

    { id: 2, nombre: '../../../../assets/img-juego/img-palabra/imagenes/2.png' },
    { id: 2, nombre: '../../../../assets/img-juego/img-palabra/palabras/2.png' },

    { id: 3, nombre: '../../../../assets/img-juego/img-palabra/imagenes/3.png' },
    { id: 3, nombre: '../../../../assets/img-juego/img-palabra/palabras/3.png' },

    { id: 4, nombre: '../../../../assets/img-juego/img-palabra/imagenes/4.png' },
    { id: 4, nombre: '../../../../assets/img-juego/img-palabra/palabras/4.png' },

    { id: 5, nombre: '../../../../assets/img-juego/img-palabra/imagenes/5.png' },
    { id: 5, nombre: '../../../../assets/img-juego/img-palabra/palabras/5.png' },

    { id: 6, nombre: '../../../../assets/img-juego/img-palabra/imagenes/6.png' },
    { id: 6, nombre: '../../../../assets/img-juego/img-palabra/palabras/6.png' },

    { id: 7, nombre: '../../../../assets/img-juego/img-palabra/imagenes/7.png' },
    { id: 7, nombre: '../../../../assets/img-juego/img-palabra/palabras/7.png' },
  ];

  estadoClickeado: boolean[] = Array(this.imagenes.length).fill(false);

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.imagenes.sort(() => Math.random() - 0.5);
    console.log(this.imagenes);
  }

  destapar(id: number): void {

    this.tarjetasDestapadas++;

    if (this.tarjetasDestapadas === 1) {
      const element = document.getElementById(id.toString());
      console.log("------------------------------------");
      console.log(element);
      if (element) {
        this.tarjeta1 = element;
        this.primerResultado = this.imagenes[id].id;
        this.renderer.setProperty(element, 'src', this.imagenes[id].nombre);
        this.renderer.setProperty(element, 'disabled', true);

      }
    } else if (this.tarjetasDestapadas === 2) {
      const element = document.getElementById(id.toString());
      if (element) {
        this.tarjeta2 = element;
        this.segundoResultado = this.imagenes[id].id;
        this.renderer.setProperty(element, 'src', this.imagenes[id].nombre);
        this.renderer.setProperty(element, 'disabled', true);

      }
      this.movimientos++;

      if (this.primerResultado === this.segundoResultado) {
        this.tarjetasDestapadas = 0;
        this.aciertos++;
        this.renderer.setStyle(this.tarjeta1, "background-color", "#53A75D");
        this.renderer.setStyle(this.tarjeta2, "background-color", "#53A75D");
        if (this.aciertos === 8) {

          this.ganador = true;

        }


      }
      else {
        setTimeout(() => {
          if (this.tarjeta1 && this.tarjeta2) {

            this.renderer.setStyle(this.tarjeta1, "background-color", "#D65C5C");
            this.renderer.setStyle(this.tarjeta2, "background-color", "#D65C5C");
          }
        }, 1);
        setTimeout(() => {
          if (this.tarjeta1 && this.tarjeta2) {

            this.renderer.setProperty(this.tarjeta1, 'src', '');
            this.renderer.removeStyle(this.tarjeta1, 'background-color');
            this.renderer.setProperty(this.tarjeta2, 'src', '');
            this.renderer.removeStyle(this.tarjeta2, 'background-color');

            this.renderer.setProperty(this.tarjeta1, 'disabled', false);
            this.renderer.setProperty(this.tarjeta2, 'disabled', false);

            this.tarjetasDestapadas = 0;
          }
        }, 1000);
      }
    }
  }

  bloquearTarjetas() {
    for (let index = 0; index <= 15; index++) {
      const element = document.getElementById(index.toString());
      if (element) {
        this.renderer.setProperty(element, 'src', this.imagenes[index].nombre);
        this.renderer.setProperty(element, 'disabled', true);
      }

    }
  }

/*   recargarPagina(): void {
    // Puedes usar la función location.reload() para recargar la página.
    location.reload();
  } */



  cambiarEstado(index: number) {

    this.estadoClickeado[index] = true;

    setTimeout(() => {
      this.estadoClickeado[index] = false;
    }, 1500);
  }


}
