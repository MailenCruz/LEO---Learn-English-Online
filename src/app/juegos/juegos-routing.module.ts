import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { JuegosHomePageComponent } from './pages-juegos/juegos-home-page/juegos-home-page.component';

import { PalabraImagenJuegoComponent } from './components-juegos/pi-juego/palabra-imagen-juego.component';
import { PalabraPalabraJuegoComponent } from './components-juegos/pp-juego/palabra-palabra-juego.component';
import { NombreColorColorJuegoComponent } from './components-juegos/ncc-juego/nombre-color-color-juego.component';


const routes: Routes = [
  { path: 'juegos-home', component: JuegosHomePageComponent },

  { path: 'palabra-imagen-juego', component: PalabraImagenJuegoComponent },
  { path: 'palabra-palabra-juego', component: PalabraPalabraJuegoComponent },
  { path: 'nombreColor-color-juego', component: NombreColorColorJuegoComponent },

  { path: '**', redirectTo: 'home-general' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JuegosRoutingModule { }