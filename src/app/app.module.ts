import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { TraductorHomePageComponent } from './pages/traductor-pages/traductor-home-page/traductor-home-page.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';

import { BienvenidaComponent } from './components/home/bienvenida/bienvenida.component';
import { CategoriasComponent } from './components/home/categorias/categorias.component';

import { TraductorComponent } from './components/shared/traductor/traductor.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { HomeNoLogComponent } from './pages/home-no-log/home-no-log.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViajerosModule } from './viajeros/viajeros.module';
import { JuegosModule } from './juegos/juegos.module';
import { GramaticaModule } from './gramatica/gramatica.module';

import { LogInComponent } from './components/log-in/log-in.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

import { MyProfileComponent } from "./components/my-profile/my-profile.component";
import { NavbarLogueadoComponent } from "./components/navbar-logueado/navbar-logueado.component";

import { MyProfilePageComponent } from "./pages/my-profile-page/my-profile-page.component";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TraductorHomePageComponent,

    NavbarComponent,

    ContactanosPageComponent,
    BienvenidaComponent,
    CategoriasComponent,

    TraductorComponent,
    FooterComponent,

    HomeNoLogComponent,
    
    LogInComponent,
    LogInPageComponent,

    SignUpComponent,
    SignUpPageComponent,

    HomePageComponent,

    MyProfileComponent,
    MyProfilePageComponent,
    
    NavbarLogueadoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    
    JuegosModule,
    ViajerosModule,
    GramaticaModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }




