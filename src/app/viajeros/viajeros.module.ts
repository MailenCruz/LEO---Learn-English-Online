import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajeroRoutingModule } from './viajero-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AlojamientoViajeroComponent } from './components/alojamiento-viajero/alojamiento-viajero.component';
import { MultipleChoicePreguntasAlojamientoComponent } from './components/alojamiento-viajero/opciones-alojamiento/multiple-choice-preguntas-alojamiento/mc-preguntas.component';
import { MultipleChoiceVocaburarioAlojamientoComponent } from './components/alojamiento-viajero/opciones-alojamiento/multiple-choice-vocaburario-alojamiento/mc-vocaburario.component';
import { VocabularioAlojamientoComponent } from './components/alojamiento-viajero/opciones-alojamiento/vocabulario-alojamiento/vocabulario-alojamiento.component';
import { EleccionTematicaComponent } from './components/eleccion-tematica/eleccion-tematica.component';
import { NavViajeroComponent } from './components/nav-viajero/nav-viajero.component';
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

@NgModule({
  declarations: [    
    NavViajeroComponent,

    EleccionTematicaComponent,

    ShoppingViajeroComponent,
    RestauranteViajeroComponent,
    AlojamientoViajeroComponent,
    
    VocabularioShoppingComponent,
    MultipleChoicePreguntasShoppingComponent,
    MultipleChoiceVocabularioShoppingComponent,

    VocabularioAlojamientoComponent,
    MultipleChoicePreguntasAlojamientoComponent,
    MultipleChoiceVocaburarioAlojamientoComponent,
    
    VocabularioRestauranteComponent,
    MultipleChoicePreguntasRestauranteComponent,
    MultipleChoiceVocabularioRestauranteComponent,
    
    ViajeroHomePageComponent,
    AlojamientoHomePageComponent,
    ShoppingHomePageComponent,
    RestauranteHomePageComponent

  ],
  exports:[
    ViajeroRoutingModule
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class ViajerosModule { }
