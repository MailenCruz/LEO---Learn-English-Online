import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { GramaticaHomePageComponent } from './pages/gramatica-pages/gramatica-home-page/gramatica-home-page.component';

import { TraductorHomePageComponent } from './pages/traductor-pages/traductor-home-page/traductor-home-page.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';
import { BienvenidaComponent } from './components/home/bienvenida/bienvenida.component';
import { CategoriasComponent } from './components/home/categorias/categorias.component';

import { TraductorComponent } from './components/shared/traductor/traductor.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { NavGramaticaComponent } from './components/gramatica/nav-gramatica/nav-gramatica.component';
import { EleccionNivelComponent } from './components/gramatica/eleccion-nivel/eleccion-nivel.component';

import { BasicoHomeComponent } from './pages/gramatica-pages/basico-home/basico-home.component';
import { NivelBasicoGramaticaComponent } from './components/gramatica/nivel-basico-gramatica/nivel-basico-gramatica.component';
import { CompletarEjercicioComponent } from './components/gramatica/nivel-basico-gramatica/completar-ejercicio/completar-ejercicio.component';
import { OrdenarEjercicioComponent } from './components/gramatica/nivel-basico-gramatica/ordenar-ejercicio/ordenar-ejercicio.component';
import { ReescribirEjercicioComponent } from './components/gramatica/nivel-basico-gramatica/reescribir-ejercicio/reescribir-ejercicio.component';

import { IntermedioHomeComponent } from './pages/gramatica-pages/intermedio-home/intermedio-home.component';
import { NivelIntermedioGramaticaComponent } from './components/gramatica/nivel-intermedio-gramatica/nivel-intermedio-gramatica.component';
import { ReescribirEjercicioIntComponent } from './components/gramatica/nivel-intermedio-gramatica/reescribir-ejercicio-int/reescribir-ejercicio-int.component';
import { CompletarEjercicioIntComponent } from './components/gramatica/nivel-intermedio-gramatica/completar-ejercicio-int/completar-ejercicio-int.component';
import { OrdenarEjercicioIntComponent } from './components/gramatica/nivel-intermedio-gramatica/ordenar-ejercicio-int/ordenar-ejercicio-int.component';

import { AvanzadoHomeComponent } from './pages/gramatica-pages/avanzado-home/avanzado-home.component';
import { NivelAvanzadoGramaticaComponent } from './components/gramatica/nivel-avanzado-gramatica/nivel-avanzado-gramatica.component';
import { ReescribirEjercicioAvComponent } from './components/gramatica/nivel-avanzado-gramatica/reescribir-ejercicio-av/reescribir-ejercicio-av.component';
import { CompletarEjercicioAvComponent } from './components/gramatica/nivel-avanzado-gramatica/completar-ejercicio-av/completar-ejercicio-av.component';
import { OrdenarEjercicioAvComponent } from './components/gramatica/nivel-avanzado-gramatica/ordenar-ejercicio-av/ordenar-ejercicio-av.component';

import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { NavbarLogueadoComponent } from './components/shared/navbar-logueado/navbar-logueado.component';
import { HomeNoLogComponent } from './pages/home-no-log/home-no-log.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViajerosModule } from './viajeros/viajeros.module';
import { JuegosModule } from './juegos/juegos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GramaticaHomePageComponent,
    TraductorHomePageComponent,

    NavbarComponent,
    ContactanosPageComponent,
    BienvenidaComponent,
    CategoriasComponent,
    
    NavGramaticaComponent,
    EleccionNivelComponent,
    CompletarEjercicioComponent,
    ReescribirEjercicioComponent,
    OrdenarEjercicioComponent,

    TraductorComponent,
    FooterComponent,
    
    BasicoHomeComponent,
    NivelBasicoGramaticaComponent,
    CompletarEjercicioComponent,
    ReescribirEjercicioComponent,
    OrdenarEjercicioComponent,
    
    IntermedioHomeComponent,
    NivelIntermedioGramaticaComponent,
    CompletarEjercicioIntComponent,
    ReescribirEjercicioIntComponent,
    OrdenarEjercicioIntComponent,

    AvanzadoHomeComponent,
    NivelAvanzadoGramaticaComponent,
    CompletarEjercicioAvComponent,
    ReescribirEjercicioAvComponent,
    OrdenarEjercicioAvComponent,
    SignUpPageComponent,
    SignUpComponent,
    LogInComponent,
    LogInPageComponent,
    NavbarLogueadoComponent,
    HomeNoLogComponent,
    MyProfilePageComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    JuegosModule,
    ViajerosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }




