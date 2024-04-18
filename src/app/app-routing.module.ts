import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GramaticaHomePageComponent } from './pages/gramatica-pages/gramatica-home-page/gramatica-home-page.component';

import { NivelBasicoGramaticaComponent } from './components/gramatica/nivel-basico-gramatica/nivel-basico-gramatica.component';
import { NivelIntermedioGramaticaComponent } from './components/gramatica/nivel-intermedio-gramatica/nivel-intermedio-gramatica.component';
import { NivelAvanzadoGramaticaComponent } from './components/gramatica/nivel-avanzado-gramatica/nivel-avanzado-gramatica.component';
import { CompletarEjercicioComponent } from './components/gramatica/nivel-basico-gramatica/completar-ejercicio/completar-ejercicio.component';
import { OrdenarEjercicioComponent } from './components/gramatica/nivel-basico-gramatica/ordenar-ejercicio/ordenar-ejercicio.component';
import { ReescribirEjercicioComponent } from './components/gramatica/nivel-basico-gramatica/reescribir-ejercicio/reescribir-ejercicio.component';

import { BasicoHomeComponent } from './pages/gramatica-pages/basico-home/basico-home.component';
import { IntermedioHomeComponent } from './pages/gramatica-pages/intermedio-home/intermedio-home.component';
import { AvanzadoHomeComponent } from './pages/gramatica-pages/avanzado-home/avanzado-home.component';
import { ReescribirEjercicioIntComponent } from './components/gramatica/nivel-intermedio-gramatica/reescribir-ejercicio-int/reescribir-ejercicio-int.component';
import { CompletarEjercicioIntComponent } from './components/gramatica/nivel-intermedio-gramatica/completar-ejercicio-int/completar-ejercicio-int.component';
import { OrdenarEjercicioIntComponent } from './components/gramatica/nivel-intermedio-gramatica/ordenar-ejercicio-int/ordenar-ejercicio-int.component';
import { CompletarEjercicioAvComponent } from './components/gramatica/nivel-avanzado-gramatica/completar-ejercicio-av/completar-ejercicio-av.component';
import { OrdenarEjercicioAvComponent } from './components/gramatica/nivel-avanzado-gramatica/ordenar-ejercicio-av/ordenar-ejercicio-av.component';
import { ReescribirEjercicioAvComponent } from './components/gramatica/nivel-avanzado-gramatica/reescribir-ejercicio-av/reescribir-ejercicio-av.component';

import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { HomeNoLogComponent } from './pages/home-no-log/home-no-log.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'home-general', component: HomeNoLogComponent},
  {path: 'contactanos', component: ContactanosPageComponent},
  {path: 'registrate', component: SignUpPageComponent},
  {path: 'ingresa', component: LogInPageComponent},
  {path: 'my-profile/:id', component: MyProfilePageComponent},

  {path:'gramatica-home', component:GramaticaHomePageComponent},

  {path:'nivelBasico-gramatica', component:NivelBasicoGramaticaComponent},
  {path:'basico-home', component:BasicoHomeComponent},
  {path:'reescribir-ejercicio', component:ReescribirEjercicioComponent},
  {path:'ordenar-ejercicio', component:OrdenarEjercicioComponent},
  {path:'completar-ejercicio', component:CompletarEjercicioComponent},

  {path:'nivelIntermedio-gramatica', component:NivelIntermedioGramaticaComponent},
  {path:'intermedio-home',component:IntermedioHomeComponent},
  {path:'reescribir-ejercicio-int', component:ReescribirEjercicioIntComponent},
  {path:'ordenar-ejercicio-int', component:OrdenarEjercicioIntComponent},
  {path:'completar-ejercicio-int', component:CompletarEjercicioIntComponent},

  {path:'nivelAvanzado-gramatica', component:NivelAvanzadoGramaticaComponent},
  {path:'avanzado-home', component:AvanzadoHomeComponent},
  {path:'reescribir-ejercicio-av', component:ReescribirEjercicioAvComponent},
  {path:'ordenar-ejercicio-av', component:OrdenarEjercicioAvComponent},
  {path:'completar-ejercicio-av', component:CompletarEjercicioAvComponent},

  //reemplaza imports de juegos
  {path:'juegos',
    loadChildren:()=> import('./juegos/juegos.module').then(module=>module.JuegosModule)
  },

  //reemplaza imports de viajeros
  {path:'viajeros',
    loadChildren:()=> import('./viajeros/viajeros.module').then(module=>module.ViajerosModule)
  },

  {path: '**', redirectTo: 'home-general'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
