import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { NavViajeroComponent } from './components/viajero/nav-viajero/nav-viajero.component';
<<<<<<< HEAD
import { EleccionTematicaComponent } from './components/viajero/eleccion-tematica/eleccion-tematica.component';
import { NavGramaticaComponent } from './components/gramatica/nav-gramatica/nav-gramatica.component';
import { EleccionNivelComponent } from './components/gramatica/eleccion-nivel/eleccion-nivel.component';
=======
import { TraductorComponent } from './components/shared/traductor/traductor.component';
>>>>>>> f164a2c3b8c46cdaa12fa7924697b9c8af1a1f89

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
    NavViajeroComponent,
<<<<<<< HEAD
    EleccionTematicaComponent,
    NavGramaticaComponent,
    EleccionNivelComponent
    ],
=======
    TraductorComponent
  ],
>>>>>>> f164a2c3b8c46cdaa12fa7924697b9c8af1a1f89
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
