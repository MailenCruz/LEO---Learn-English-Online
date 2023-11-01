import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GramaticaHomePageComponent } from './pages/gramatica-pages/gramatica-home-page/gramatica-home-page.component';
import { JuegosHomePageComponent } from './pages/juegos-pages/juegos-home-page/juegos-home-page.component';
import { TraductorHomePageComponent } from './pages/traductor-pages/traductor-home-page/traductor-home-page.component';
import { ViajeroHomePageComponent } from './pages/viajero-pages/viajero-home-page/viajero-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GramaticaHomePageComponent,
    JuegosHomePageComponent,
    TraductorHomePageComponent,
    ViajeroHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
