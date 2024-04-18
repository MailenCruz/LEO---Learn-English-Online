import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletarEjercicioAvComponent } from './components/nivel-avanzado-gramatica/completar-ejercicio-av/completar-ejercicio-av.component';
import { NivelAvanzadoGramaticaComponent } from './components/nivel-avanzado-gramatica/nivel-avanzado-gramatica.component';
import { OrdenarEjercicioAvComponent } from './components/nivel-avanzado-gramatica/ordenar-ejercicio-av/ordenar-ejercicio-av.component';
import { ReescribirEjercicioAvComponent } from './components/nivel-avanzado-gramatica/reescribir-ejercicio-av/reescribir-ejercicio-av.component';
import { CompletarEjercicioComponent } from './components/nivel-basico-gramatica/completar-ejercicio/completar-ejercicio.component';
import { NivelBasicoGramaticaComponent } from './components/nivel-basico-gramatica/nivel-basico-gramatica.component';
import { OrdenarEjercicioComponent } from './components/nivel-basico-gramatica/ordenar-ejercicio/ordenar-ejercicio.component';
import { ReescribirEjercicioComponent } from './components/nivel-basico-gramatica/reescribir-ejercicio/reescribir-ejercicio.component';
import { CompletarEjercicioIntComponent } from './components/nivel-intermedio-gramatica/completar-ejercicio-int/completar-ejercicio-int.component';
import { NivelIntermedioGramaticaComponent } from './components/nivel-intermedio-gramatica/nivel-intermedio-gramatica.component';
import { OrdenarEjercicioIntComponent } from './components/nivel-intermedio-gramatica/ordenar-ejercicio-int/ordenar-ejercicio-int.component';
import { ReescribirEjercicioIntComponent } from './components/nivel-intermedio-gramatica/reescribir-ejercicio-int/reescribir-ejercicio-int.component';
import { AvanzadoHomeComponent } from './pages/avanzado-home/avanzado-home.component';
import { BasicoHomeComponent } from './pages/basico-home/basico-home.component';
import { GramaticaHomePageComponent } from './pages/gramatica-home-page/gramatica-home-page.component';
import { IntermedioHomeComponent } from './pages/intermedio-home/intermedio-home.component';

const routes: Routes = [
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
  {path:'completar-ejercicio-av', component:CompletarEjercicioAvComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GramaticaRoutingModule { }