import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosHomePageComponent } from './pages/juegos-pages/juegos-home-page/juegos-home-page.component';
import { ViajeroHomePageComponent } from './pages/viajero-pages/viajero-home-page/viajero-home-page.component';
import { GramaticaHomePageComponent } from './pages/gramatica-pages/gramatica-home-page/gramatica-home-page.component';
import { PalabraImagenJuegoComponent } from './components/juegos/palabra-imagen-juego/palabra-imagen-juego.component';
import { PalabraPalabraJuegoComponent } from './components/juegos/palabra-palabra-juego/palabra-palabra-juego.component';
import { NombreColorColorJuegoComponent } from './components/juegos/nombre-color-color-juego/nombre-color-color-juego.component';
import { ShoppingViajeroComponent } from './components/viajero/shopping-viajero/shopping-viajero.component';
import { RestauranteViajeroComponent } from './components/viajero/restaurante-viajero/restaurante-viajero.component';
import { AlojamientoViajeroComponent } from './components/viajero/alojamiento-viajero/alojamiento-viajero.component';
import { NivelBasicoGramaticaComponent } from './components/gramatica/nivel-basico-gramatica/nivel-basico-gramatica.component';
import { NivelIntermedioGramaticaComponent } from './components/gramatica/nivel-intermedio-gramatica/nivel-intermedio-gramatica.component';
import { NivelAvanzadoGramaticaComponent } from './components/gramatica/nivel-avanzado-gramatica/nivel-avanzado-gramatica.component';
import { CompletarEjercicioComponent } from './components/gramatica/nivel-basico-gramatica/completar-ejercicio/completar-ejercicio.component';
import { OrdenarEjercicioComponent } from './components/gramatica/nivel-basico-gramatica/ordenar-ejercicio/ordenar-ejercicio.component';
import { ReescribirEjercicioComponent } from './components/gramatica/nivel-basico-gramatica/reescribir-ejercicio/reescribir-ejercicio.component';
import { VocabularioShoppingComponent } from './components/viajero/shopping-viajero/opciones-shopping/vocabulario-shopping/vocabulario-shopping.component';
import { MultipleChoiceVocabularioShoppingComponent } from './components/viajero/shopping-viajero/opciones-shopping/multiple-choice-vocabulario-shopping/multiple-choice-vocabulario-shopping.component';
import { MultipleChoicePreguntasShoppingComponent } from './components/viajero/shopping-viajero/opciones-shopping/multiple-choice-preguntas-shopping/multiple-choice-preguntas-shopping.component';
import { VocabularioRestauranteComponent } from './components/viajero/restaurante-viajero/opciones-restaurante/vocabulario-restaurante/vocabulario-restaurante.component';
import { MultipleChoiceVocabularioRestauranteComponent } from './components/viajero/restaurante-viajero/opciones-restaurante/multiple-choice-vocabulario-restaurante/multiple-choice-vocabulario-restaurante.component';
import { MultipleChoicePreguntasRestauranteComponent } from './components/viajero/restaurante-viajero/opciones-restaurante/multiple-choice-preguntas-restaurante/multiple-choice-preguntas-restaurante.component';
import { VocabularioAlojamientoComponent } from './components/viajero/alojamiento-viajero/opciones-alojamiento/vocabulario-alojamiento/vocabulario-alojamiento.component';
import { MultipleChoiceVocaburarioAlojamientoComponent } from './components/viajero/alojamiento-viajero/opciones-alojamiento/multiple-choice-vocaburario-alojamiento/multiple-choice-vocaburario-alojamiento.component';
import { MultipleChoicePreguntasAlojamientoComponent } from './components/viajero/alojamiento-viajero/opciones-alojamiento/multiple-choice-preguntas-alojamiento/multiple-choice-preguntas-alojamiento.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'contactanos', component: ContactanosPageComponent},

  {path:'juegos-home', component: JuegosHomePageComponent},
  {path:'palabra-imagen-juego', component:PalabraImagenJuegoComponent},
  {path:'palabra-palabra-juego', component:PalabraPalabraJuegoComponent},
  {path:'nombreColor-color-juego', component:NombreColorColorJuegoComponent},

  {path:'viajeros-home', component:ViajeroHomePageComponent},
  {path:'shopping-viajeros', component:ShoppingViajeroComponent},
  {path:'vocabulario-shopping', component:VocabularioShoppingComponent},
  {path:'multipleChoice-vocabulario-shopping', component:MultipleChoiceVocabularioShoppingComponent},
  {path:'multipleChoice-preguntas-shopping', component:MultipleChoicePreguntasShoppingComponent},


  {path:'restaurante-viajeros', component:RestauranteViajeroComponent},
  {path:'vocabulario-restaurante', component:VocabularioRestauranteComponent},
  {path:'multipleChoice-vocabulario-restaurante', component:MultipleChoiceVocabularioRestauranteComponent},
  {path:'multipleChoice-preguntas-restaurante', component:MultipleChoicePreguntasRestauranteComponent},

  {path:'alojamiento-viajeros', component:AlojamientoViajeroComponent},
  {path:'vocabulario-alojamiento', component:VocabularioAlojamientoComponent},
  {path:'multipleChoice-vocabulario-alojamiento', component:MultipleChoiceVocaburarioAlojamientoComponent},
  {path:'multipleChoice-preguntas-alojamiento', component:MultipleChoicePreguntasAlojamientoComponent},



  {path:'gramatica-home', component:GramaticaHomePageComponent},

  {path:'nivelBasico-gramatica', component:NivelBasicoGramaticaComponent},
  {path:'reescribir-ejercicio', component:ReescribirEjercicioComponent},
  {path:'ordenar-ejercicio', component:OrdenarEjercicioComponent},
  {path:'completar-ejercicio', component:CompletarEjercicioComponent},

  {path:'nivelIntermedio-gramatica', component:NivelIntermedioGramaticaComponent},
  {path:'nivelAvanzado-gramatica', component:NivelAvanzadoGramaticaComponent},
  
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
