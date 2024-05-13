import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientoViajeroComponent } from './components/alojamiento-viajero/alojamiento-viajero.component';
import { MultipleChoicePreguntasAlojamientoComponent } from './components/alojamiento-viajero/opciones-alojamiento/multiple-choice-preguntas-alojamiento/mc-preguntas-a.component';
import { MultipleChoiceVocaburarioAlojamientoComponent } from './components/alojamiento-viajero/opciones-alojamiento/multiple-choice-vocaburario-alojamiento/mc-vocaburario.component';
import { VocabularioAlojamientoComponent } from './components/alojamiento-viajero/opciones-alojamiento/vocabulario-alojamiento/vocabulario-alojamiento.component';
import { MultipleChoicePreguntasRestauranteComponent } from './components/restaurante-viajero/opciones-restaurante/multiple-choice-preguntas-restaurante/mc-preguntas-r.component';
import { MultipleChoiceVocabularioRestauranteComponent } from './components/restaurante-viajero/opciones-restaurante/multiple-choice-vocabulario-restaurante/mc-vocabulario-r.component';
import { VocabularioRestauranteComponent } from './components/restaurante-viajero/opciones-restaurante/vocabulario-restaurante/vocabulario-restaurante.component';
import { RestauranteViajeroComponent } from './components/restaurante-viajero/restaurante-viajero.component';
import { MultipleChoicePreguntasShoppingComponent } from './components/shopping-viajero/opciones-shopping/multiple-choice-preguntas-shopping/mc-preguntas-s.component';
import { MultipleChoiceVocabularioShoppingComponent } from './components/shopping-viajero/opciones-shopping/multiple-choice-vocabulario-shopping/mc-vocabulario-s.component';
import { VocabularioShoppingComponent } from './components/shopping-viajero/opciones-shopping/vocabulario-shopping/vocabulario-shopping.component';
import { ShoppingViajeroComponent } from './components/shopping-viajero/shopping-viajero.component';
import { AlojamientoHomePageComponent } from './pages/alojamiento-home-page/alojamiento-home-page.component';
import { RestauranteHomePageComponent } from './pages/restaurante-home/restaurante-home.component';
import { ShoppingHomePageComponent } from './pages/shopping-home-page/shopping-home-page.component';
import { ViajeroHomePageComponent } from './pages/viajero-home-page/viajero-home-page.component';
import { AuthGuard } from '../guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'viajeros-home', component: ViajeroHomePageComponent },

      { path: 'shopping', component: ShoppingViajeroComponent },
      { path: 'restaurant', component: RestauranteViajeroComponent },
      { path: 'alojamiento', component: AlojamientoViajeroComponent },

      { path: 'shopping-home', component: ShoppingHomePageComponent },
      { path: 'restaurante-home', component: RestauranteHomePageComponent },
      { path: 'alojamiento-home', component: AlojamientoHomePageComponent },

      { path: 'vocabulario-shopping', component: VocabularioShoppingComponent },
      { path: 'multipleChoice-vocabulario-shopping', component: MultipleChoiceVocabularioShoppingComponent },
      { path: 'multipleChoice-preguntas-shopping', component: MultipleChoicePreguntasShoppingComponent },

      { path: 'vocabulario-restaurante', component: VocabularioRestauranteComponent },
      { path: 'multipleChoice-vocabulario-restaurante', component: MultipleChoiceVocabularioRestauranteComponent },
      { path: 'multipleChoice-preguntas-restaurante', component: MultipleChoicePreguntasRestauranteComponent },

      { path: 'vocabulario-alojamiento', component: VocabularioAlojamientoComponent },
      { path: 'multipleChoice-vocabulario-alojamiento', component: MultipleChoiceVocaburarioAlojamientoComponent },
      { path: 'multipleChoice-preguntas-alojamiento', component: MultipleChoicePreguntasAlojamientoComponent },

      { path: '**', redirectTo: 'home-general' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajeroRoutingModule { }
