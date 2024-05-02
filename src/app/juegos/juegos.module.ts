import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { JuegosRoutingModule } from './juegos-routing.module';

import { EleccionJuegosComponent } from './components-juegos/eleccion-juegos/eleccion-juegos.component';
import { PalabraPalabraJuegoComponent } from './components-juegos/pp-juego/palabra-palabra-juego.component';
import { PalabraImagenJuegoComponent } from './components-juegos/pi-juego/palabra-imagen-juego.component';
import { NombreColorColorJuegoComponent } from './components-juegos/ncc-juego/nombre-color-color-juego.component';

import { NavJuegosComponent } from './components-juegos/nav-juegos/nav-juegos.component';
import { JuegosHomePageComponent } from './pages-juegos/juegos-home-page/juegos-home-page.component';

@NgModule({
  declarations: [
    JuegosHomePageComponent,
    
    NavJuegosComponent,
    EleccionJuegosComponent,
    PalabraImagenJuegoComponent,
    PalabraPalabraJuegoComponent,
    NombreColorColorJuegoComponent
  ],
  exports:[
    JuegosRoutingModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
