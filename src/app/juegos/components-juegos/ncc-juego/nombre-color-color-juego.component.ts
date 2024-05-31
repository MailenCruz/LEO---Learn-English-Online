import { Component, ElementRef, Renderer2 } from '@angular/core';
import { palabrasJuego } from '../../interfaces-juegos/palabrasJuego';


@Component({
  selector: 'app-nombre-color-color-juego',
  templateUrl: './nombre-color-color-juego.component.html',
  styleUrls: ['./nombre-color-color-juego.component.css']
})
export class NombreColorColorJuegoComponent {
  tarjetasDestapadas: number = 0;
  tarjeta1: HTMLElement | undefined;
  tarjeta2: HTMLElement | undefined;
  primerResultado: number | null = null;
  segundoResultado: number | null = null;
  id1: number = 0;
  id2: number = 0;
  movimientos: number = 0;
  aciertos: number = 0;
  ganador: boolean = false;

  imagenes: palabrasJuego[] = [
    {id:0,nombre:'../../../../assets/img-juego/colores-nombre/colores/0.png'},
    {id:0,nombre:'../../../../assets/img-juego/colores-nombre/nombres/0.png'},

    {id:1,nombre:'../../../../assets/img-juego/colores-nombre/colores/1.png'},
    {id:1,nombre:'../../../../assets/img-juego/colores-nombre/nombres/1.png'},

    {id:2,nombre:'../../../../assets/img-juego/colores-nombre/colores/2.png'},
    {id:2,nombre:'../../../../assets/img-juego/colores-nombre/nombres/2.png'},

    {id:3,nombre:'../../../../assets/img-juego/colores-nombre/colores/3.png'},
    {id:3,nombre:'../../../../assets/img-juego/colores-nombre/nombres/3.png'},

    {id:4,nombre:'../../../../assets/img-juego/colores-nombre/colores/4.png'},
    {id:4,nombre:'../../../../assets/img-juego/colores-nombre/nombres/4.png'},

    {id:5,nombre:'../../../../assets/img-juego/colores-nombre/colores/5.png'},
    {id:5,nombre:'../../../../assets/img-juego/colores-nombre/nombres/5.png'},

    {id:6,nombre:'../../../../assets/img-juego/colores-nombre/colores/6.png'},
    {id:6,nombre:'../../../../assets/img-juego/colores-nombre/nombres/6.png'},

    {id:7,nombre:'../../../../assets/img-juego/colores-nombre/colores/7.png'},
    {id:7,nombre:'../../../../assets/img-juego/colores-nombre/nombres/7.png'},
  ];

  estadoClickeado: boolean[] = Array(this.imagenes.length).fill(false);
  historialClickeado: boolean[] = Array(this.imagenes.length).fill(false); //se van guardando los que fueron clickeados

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.imagenes.sort(() => Math.random() - 0.5);
  }

  deshabilitarTarjetas(){
    for(let i = 0; i < this.imagenes.length; i++){
      if(i != this.primerResultado && i != this.segundoResultado){
        const element = document.getElementById(i.toString());
        this.renderer.setProperty(element, 'disabled', true);
        this.renderer.removeClass(element, 'clickeado');
      }
    }
  }
  
  habilitarTarjetas(){
    for(let i = 0; i < this.imagenes.length; i++){
      if(this.historialClickeado[i] === false){
        const element = document.getElementById(i.toString());
        this.renderer.setProperty(element, 'disabled', false);
        this.renderer.removeClass(element, 'clickeado');
      }
    }
  }

  destapar(id: number): void {

    this.tarjetasDestapadas++;

    if(this.tarjetasDestapadas >= 2){
      this.deshabilitarTarjetas();
    }

    if (this.tarjetasDestapadas === 1) {

      const element = document.getElementById(id.toString());
      this.id1 = id;

      if (element) {
        this.tarjeta1 = element;
        this.primerResultado = this.imagenes[id].id;
        this.renderer.setProperty(element, 'src', this.imagenes[id].nombre);
        this.renderer.setProperty(element, 'disabled', true);
      }

    } else if (this.tarjetasDestapadas === 2) {
      this.id2 = id;

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
        
        this.renderer.setStyle(this.tarjeta1, "background-color", "#53A75D"); //verde
        this.renderer.setStyle(this.tarjeta2, "background-color", "#53A75D");

        this.historialClickeado[this.id1] = true;
        this.historialClickeado[this.id2] = true;  //guardamos los que ya son correctos para que no se vuelvan a habilitar

        if (this.aciertos === 8) {
          this.ganador = true;
        }

        this.habilitarTarjetas();

      } else {
        //this.renderer.addClass(this.tarjeta1, 'incorrecto');
        //this.renderer.addClass(this.tarjeta2, 'incorrecto');

        setTimeout(() => {
          if (this.tarjeta1 && this.tarjeta2) {
            this.renderer.setStyle(this.tarjeta1, "background-color", "#D65C5C"); //rojo
            this.renderer.setStyle(this.tarjeta2, "background-color", "#D65C5C");
          }
        }, 1);

        setTimeout(() => {
          if (this.tarjeta1 && this.tarjeta2) {

            this.renderer.setProperty(this.tarjeta1, 'src', '');
            this.renderer.removeStyle(this.tarjeta1, 'background-color');

            this.renderer.setProperty(this.tarjeta2, 'src', '');
            this.renderer.removeStyle(this.tarjeta2, 'background-color');

            const tarj1 = document.getElementById(this.tarjeta1.id.toString());
            this.renderer.removeClass(tarj1, 'clickeado');

            const tarj2= document.getElementById(this.tarjeta2.id.toString());
            this.renderer.removeClass(tarj2, 'clickeado');

            this.renderer.setProperty(this.tarjeta1, 'disabled', false);
            this.renderer.setProperty(this.tarjeta2, 'disabled', false);

            this.tarjetasDestapadas = 0;
            this.habilitarTarjetas();
          }
        }, 1000);
      }
    }
  }

  cambiarEstado(index: number) {
    const element = document.getElementById(index.toString());
    this.renderer.addClass(element, 'clickeado');
    
    this.estadoClickeado[index] = true;

    setTimeout(() => {
      this.estadoClickeado[index] = false;
    }, 1500);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  recargarPagina(): void {
    location.reload();
  }


}