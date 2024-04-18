import { NgModule } from '@angular/core';
import { GramaticaRoutingModule } from './gramatica-routing.module';
import { EleccionNivelComponent } from './components/eleccion-nivel/eleccion-nivel.component';
import { NavGramaticaComponent } from './components/nav-gramatica/nav-gramatica.component';

import { NivelAvanzadoGramaticaComponent } from './components/nivel-avanzado-gramatica/nivel-avanzado-gramatica.component';
import { CompletarEjercicioAvComponent } from './components/nivel-avanzado-gramatica/completar-ejercicio-av/completar-ejercicio-av.component';
import { ReescribirEjercicioAvComponent } from './components/nivel-avanzado-gramatica/reescribir-ejercicio-av/reescribir-ejercicio-av.component';
import { OrdenarEjercicioAvComponent } from './components/nivel-avanzado-gramatica/ordenar-ejercicio-av/ordenar-ejercicio-av.component';

import { NivelBasicoGramaticaComponent } from './components/nivel-basico-gramatica/nivel-basico-gramatica.component';
import { CompletarEjercicioComponent } from './components/nivel-basico-gramatica/completar-ejercicio/completar-ejercicio.component';
import { ReescribirEjercicioComponent } from './components/nivel-basico-gramatica/reescribir-ejercicio/reescribir-ejercicio.component';
import { OrdenarEjercicioComponent } from './components/nivel-basico-gramatica/ordenar-ejercicio/ordenar-ejercicio.component';

import { NivelIntermedioGramaticaComponent } from './components/nivel-intermedio-gramatica/nivel-intermedio-gramatica.component';
import { CompletarEjercicioIntComponent } from './components/nivel-intermedio-gramatica/completar-ejercicio-int/completar-ejercicio-int.component';
import { ReescribirEjercicioIntComponent } from './components/nivel-intermedio-gramatica/reescribir-ejercicio-int/reescribir-ejercicio-int.component';
import { OrdenarEjercicioIntComponent } from './components/nivel-intermedio-gramatica/ordenar-ejercicio-int/ordenar-ejercicio-int.component';
import { AvanzadoHomeComponent } from './pages/avanzado-home/avanzado-home.component';
import { BasicoHomeComponent } from './pages/basico-home/basico-home.component';
import { GramaticaHomePageComponent } from './pages/gramatica-home-page/gramatica-home-page.component';
import { IntermedioHomeComponent } from './pages/intermedio-home/intermedio-home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        GramaticaHomePageComponent,
        EleccionNivelComponent,
        NavGramaticaComponent,

        IntermedioHomeComponent,
        NivelIntermedioGramaticaComponent,
        CompletarEjercicioIntComponent,
        OrdenarEjercicioIntComponent,
        ReescribirEjercicioIntComponent,

        BasicoHomeComponent,
        NivelBasicoGramaticaComponent,
        CompletarEjercicioComponent,
        OrdenarEjercicioComponent,
        ReescribirEjercicioComponent,
        
        AvanzadoHomeComponent,
        NivelAvanzadoGramaticaComponent,
        CompletarEjercicioAvComponent,
        OrdenarEjercicioAvComponent,
        ReescribirEjercicioAvComponent
    ],
    exports: [
        GramaticaRoutingModule
    ],
    imports: [
        ReactiveFormsModule
    ]
  })
  export class GramaticaModule { }
  