import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GramaticaHomePageComponent } from './pages/gramatica-pages/gramatica-home-page/gramatica-home-page.component';
import { JuegosHomePageComponent } from './pages/juegos-pages/juegos-home-page/juegos-home-page.component';
import { TraductorHomePageComponent } from './pages/traductor-pages/traductor-home-page/traductor-home-page.component';
import { ViajeroHomePageComponent } from './pages/viajero-pages/viajero-home-page/viajero-home-page.component';
import { ListarEjercicioComponent } from './components/gramatica/listar-ejercicio/listar-ejercicio.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';
import { BienvenidaComponent } from './components/home/bienvenida/bienvenida.component';
import { CategoriasComponent } from './components/home/categorias/categorias.component';
import { NavJuegosComponent } from './components/juegos/nav-juegos/nav-juegos.component';
import { EleccionJuegosComponent } from './components/juegos/eleccion-juegos/eleccion-juegos.component';
import { NavViajeroComponent } from './components/viajero/nav-viajero/nav-viajero.component';
import { TraductorComponent } from './components/shared/traductor/traductor.component';
import { PalabraImagenJuegoComponent } from './components/juegos/palabra-imagen-juego/palabra-imagen-juego.component';
import { NombreColorColorJuegoComponent } from './components/juegos/nombre-color-color-juego/nombre-color-color-juego.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NivelBasicoGramaticaComponent } from './components/gramatica/nivel-basico-gramatica/nivel-basico-gramatica.component';
import { NivelIntermedioGramaticaComponent } from './components/gramatica/nivel-intermedio-gramatica/nivel-intermedio-gramatica.component';
import { NivelAvanzadoGramaticaComponent } from './components/gramatica/nivel-avanzado-gramatica/nivel-avanzado-gramatica.component';
import { ShoppingViajeroComponent } from './components/viajero/shopping-viajero/shopping-viajero.component';
import { RestauranteViajeroComponent } from './components/viajero/restaurante-viajero/restaurante-viajero.component';
import { AlojamientoViajeroComponent } from './components/viajero/alojamiento-viajero/alojamiento-viajero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GramaticaHomePageComponent,
    JuegosHomePageComponent,
    TraductorHomePageComponent,
    ViajeroHomePageComponent,
    ListarEjercicioComponent,
    NavbarComponent,
    ContactanosPageComponent,
    BienvenidaComponent,
    CategoriasComponent,
    NavJuegosComponent,
    EleccionJuegosComponent,
    NavViajeroComponent,
    TraductorComponent,
    PalabraImagenJuegoComponent,
    NombreColorColorJuegoComponent,
    NivelBasicoGramaticaComponent,
    NivelIntermedioGramaticaComponent,
    NivelAvanzadoGramaticaComponent,
    ShoppingViajeroComponent,
    RestauranteViajeroComponent,
    AlojamientoViajeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
