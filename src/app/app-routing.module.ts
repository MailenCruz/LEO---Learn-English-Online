import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosHomePageComponent } from './pages/juegos-pages/juegos-home-page/juegos-home-page.component';
import { ViajeroHomePageComponent } from './pages/viajero-pages/viajero-home-page/viajero-home-page.component';
import { GramaticaHomePageComponent } from './pages/gramatica-pages/gramatica-home-page/gramatica-home-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'contactanos', component: ContactanosPageComponent},
  {path:'juegos-home', component: JuegosHomePageComponent},
  {path:'viajeros-home', component:ViajeroHomePageComponent},
  {path:'gramatica-home',component:GramaticaHomePageComponent},
  {path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
