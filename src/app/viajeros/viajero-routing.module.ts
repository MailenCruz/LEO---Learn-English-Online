import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViajeroHomePageComponent } from '../viajeros/pages/viajero-home-page/viajero-home-page.component';

import { ShoppingViajeroComponent } from './components/shopping-viajero/shopping-viajero.component';
import { RestauranteViajeroComponent } from './components/restaurante-viajero/restaurante-viajero.component';
import { AlojamientoViajeroComponent } from './components/alojamiento-viajero/alojamiento-viajero.component';

import { VocabularioShoppingComponent } from './components/shopping-viajero/opciones-shopping/vocabulario-shopping/vocabulario-shopping.component';
import { MultipleChoiceVocabularioShoppingComponent } from './components/shopping-viajero/opciones-shopping/multiple-choice-vocabulario-shopping/mc-vocabulario-s.component';
import { MultipleChoicePreguntasShoppingComponent } from './components/shopping-viajero/opciones-shopping/multiple-choice-preguntas-shopping/mc-preguntas-s.component';

import { VocabularioRestauranteComponent } from './components/restaurante-viajero/opciones-restaurante/vocabulario-restaurante/vocabulario-restaurante.component';
import { MultipleChoiceVocabularioRestauranteComponent } from './components/restaurante-viajero/opciones-restaurante/multiple-choice-vocabulario-restaurante/mc-vocabulario-r.component';
import { MultipleChoicePreguntasRestauranteComponent } from './components/restaurante-viajero/opciones-restaurante/multiple-choice-preguntas-restaurante/mc-preguntas-r.component';

import { VocabularioAlojamientoComponent } from './components/alojamiento-viajero/opciones-alojamiento/vocabulario-alojamiento/vocabulario-alojamiento.component';
import { MultipleChoiceVocaburarioAlojamientoComponent } from './components/alojamiento-viajero/opciones-alojamiento/multiple-choice-vocaburario-alojamiento/multiple-choice-vocaburario-alojamiento.component';
import { MultipleChoicePreguntasAlojamientoComponent } from './components/alojamiento-viajero/opciones-alojamiento/multiple-choice-preguntas-alojamiento/multiple-choice-preguntas-alojamiento.component';

import { ShoppingHomePageComponent } from '../viajeros/pages/shopping-home-page/shopping-home-page.component';
import { RestauranteHomePageComponent } from '../viajeros/pages/restaurante-home/restaurante-home.component';
import { AlojamientoHomePageComponent } from '../viajeros/pages/alojamiento-home-page/alojamiento-home-page.component';


const routes: Routes = [

  {path:'viajeros-home', component:ViajeroHomePageComponent},
  {path:'shopping-home', component:ShoppingHomePageComponent},
  {path:'vocabulario-shopping', component:VocabularioShoppingComponent},
  {path:'multipleChoice-vocabulario-shopping', component:MultipleChoiceVocabularioShoppingComponent},
  {path:'multipleChoice-preguntas-shopping', component:MultipleChoicePreguntasShoppingComponent},

  {path:'restaurante-home', component:RestauranteHomePageComponent},
  {path:'vocabulario-restaurante', component:VocabularioRestauranteComponent},
  {path:'multipleChoice-vocabulario-restaurante', component:MultipleChoiceVocabularioRestauranteComponent},
  {path:'multipleChoice-preguntas-restaurante', component:MultipleChoicePreguntasRestauranteComponent},

  {path:'alojamiento-home', component:AlojamientoHomePageComponent},
  {path:'vocabulario-alojamiento', component:VocabularioAlojamientoComponent},
  {path:'multipleChoice-vocabulario-alojamiento', component:MultipleChoiceVocaburarioAlojamientoComponent},
  {path:'multipleChoice-preguntas-alojamiento', component:MultipleChoicePreguntasAlojamientoComponent},

  {path: '**', redirectTo: 'home-general'}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ViajeroRoutingModule { }
