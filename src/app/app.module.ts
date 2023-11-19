import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { GramaticaHomePageComponent } from './pages/gramatica-pages/gramatica-home-page/gramatica-home-page.component';
import { JuegosHomePageComponent } from './pages/juegos-pages/juegos-home-page/juegos-home-page.component';
import { TraductorHomePageComponent } from './pages/traductor-pages/traductor-home-page/traductor-home-page.component';
import { ViajeroHomePageComponent } from './pages/viajero-pages/viajero-home-page/viajero-home-page.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';
import { BienvenidaComponent } from './components/home/bienvenida/bienvenida.component';
import { CategoriasComponent } from './components/home/categorias/categorias.component';

import { NavJuegosComponent } from './components/juegos/nav-juegos/nav-juegos.component';
import { EleccionJuegosComponent } from './components/juegos/eleccion-juegos/eleccion-juegos.component';
import { PalabraPalabraJuegoComponent } from './components/juegos/palabra-palabra-juego/palabra-palabra-juego.component';
import { PalabraImagenJuegoComponent } from './components/juegos/palabra-imagen-juego/palabra-imagen-juego.component';
import { NombreColorColorJuegoComponent } from './components/juegos/nombre-color-color-juego/nombre-color-color-juego.component';

import { NavViajeroComponent } from './components/viajero/nav-viajero/nav-viajero.component';
import { EleccionTematicaComponent } from './components/viajero/eleccion-tematica/eleccion-tematica.component';
import { ShoppingViajeroComponent } from './components/viajero/shopping-viajero/shopping-viajero.component';
import { RestauranteViajeroComponent } from './components/viajero/restaurante-viajero/restaurante-viajero.component';
import { AlojamientoViajeroComponent } from './components/viajero/alojamiento-viajero/alojamiento-viajero.component';

import { NavGramaticaComponent } from './components/gramatica/nav-gramatica/nav-gramatica.component';
import { EleccionNivelComponent } from './components/gramatica/eleccion-nivel/eleccion-nivel.component';
import { NivelBasicoGramaticaComponent } from './components/gramatica/nivel-basico-gramatica/nivel-basico-gramatica.component';
import { CompletarEjercicioComponent } from './components/gramatica/nivel-basico-gramatica/completar-ejercicio/completar-ejercicio.component';
import { OrdenarEjercicioComponent } from './components/gramatica/nivel-basico-gramatica/ordenar-ejercicio/ordenar-ejercicio.component';
import { ReescribirEjercicioComponent } from './components/gramatica/nivel-basico-gramatica/reescribir-ejercicio/reescribir-ejercicio.component';

import { NivelIntermedioGramaticaComponent } from './components/gramatica/nivel-intermedio-gramatica/nivel-intermedio-gramatica.component';
import { NivelAvanzadoGramaticaComponent } from './components/gramatica/nivel-avanzado-gramatica/nivel-avanzado-gramatica.component';

import { TraductorComponent } from './components/shared/traductor/traductor.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { VocabularioShoppingComponent } from './components/viajero/shopping-viajero/opciones-shopping/vocabulario-shopping/vocabulario-shopping.component';
import { MultipleChoicePreguntasShoppingComponent } from './components/viajero/shopping-viajero/opciones-shopping/multiple-choice-preguntas-shopping/multiple-choice-preguntas-shopping.component';
import { MultipleChoiceVocabularioShoppingComponent } from './components/viajero/shopping-viajero/opciones-shopping/multiple-choice-vocabulario-shopping/multiple-choice-vocabulario-shopping.component';

import { VocabularioAlojamientoComponent } from './components/viajero/alojamiento-viajero/opciones-alojamiento/vocabulario-alojamiento/vocabulario-alojamiento.component';
import { MultipleChoiceVocaburarioAlojamientoComponent } from './components/viajero/alojamiento-viajero/opciones-alojamiento/multiple-choice-vocaburario-alojamiento/multiple-choice-vocaburario-alojamiento.component';
import { MultipleChoicePreguntasAlojamientoComponent } from './components/viajero/alojamiento-viajero/opciones-alojamiento/multiple-choice-preguntas-alojamiento/multiple-choice-preguntas-alojamiento.component';

import { VocabularioRestauranteComponent } from './components/viajero/restaurante-viajero/opciones-restaurante/vocabulario-restaurante/vocabulario-restaurante.component';
import { MultipleChoicePreguntasRestauranteComponent } from './components/viajero/restaurante-viajero/opciones-restaurante/multiple-choice-preguntas-restaurante/multiple-choice-preguntas-restaurante.component';
import { MultipleChoiceVocabularioRestauranteComponent } from './components/viajero/restaurante-viajero/opciones-restaurante/multiple-choice-vocabulario-restaurante/multiple-choice-vocabulario-restaurante.component';
import { ShoppingHomePageComponent } from './pages/viajero-pages/shopping-home-page/shopping-home-page.component';
import { RestauranteHomePageComponent } from './pages/viajero-pages/restaurante-home/restaurante-home.component';
import { AlojamientoHomePageComponent } from './pages/viajero-pages/alojamiento-home-page/alojamiento-home-page.component';
import { BasicoHomeComponent } from './pages/gramatica-pages/basico-home/basico-home.component';
import { IntermedioHomeComponent } from './pages/gramatica-pages/intermedio-home/intermedio-home.component';
import { AvanzadoHomeComponent } from './pages/gramatica-pages/avanzado-home/avanzado-home.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { NavbarLogueadoComponent } from './components/shared/navbar-logueado/navbar-logueado.component';
import { HomeNoLogComponent } from './pages/home-no-log/home-no-log.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GramaticaHomePageComponent,
    JuegosHomePageComponent,
    TraductorHomePageComponent,
    ViajeroHomePageComponent,

    NavbarComponent,
    ContactanosPageComponent,
    BienvenidaComponent,
    CategoriasComponent,

    NavJuegosComponent,
    EleccionJuegosComponent,
    PalabraImagenJuegoComponent,
    PalabraPalabraJuegoComponent,
    NombreColorColorJuegoComponent,

    NavViajeroComponent,
    EleccionTematicaComponent,
    ShoppingViajeroComponent,
    RestauranteViajeroComponent,
    AlojamientoViajeroComponent,

    NavGramaticaComponent,
    EleccionNivelComponent,
    NivelBasicoGramaticaComponent,
    CompletarEjercicioComponent,
    ReescribirEjercicioComponent,
    OrdenarEjercicioComponent,

    NivelIntermedioGramaticaComponent,
    NivelAvanzadoGramaticaComponent,

    TraductorComponent,
    FooterComponent,

    VocabularioShoppingComponent,
    MultipleChoicePreguntasShoppingComponent,
    MultipleChoiceVocabularioShoppingComponent,

    VocabularioAlojamientoComponent,
    MultipleChoicePreguntasAlojamientoComponent,
    MultipleChoiceVocaburarioAlojamientoComponent,
   
    VocabularioRestauranteComponent,
    MultipleChoicePreguntasRestauranteComponent,
    MultipleChoiceVocabularioRestauranteComponent,
    ShoppingHomePageComponent,
    RestauranteHomePageComponent,
    AlojamientoHomePageComponent,
    BasicoHomeComponent,
    IntermedioHomeComponent,
    AvanzadoHomeComponent,
    SignUpPageComponent,
    SignUpComponent,
    LogInComponent,
    LogInPageComponent,
    NavbarLogueadoComponent,
    HomeNoLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


