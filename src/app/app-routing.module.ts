import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNoLogComponent } from './pages/home-no-log/home-no-log.component';
import { LogInPageComponent } from "./pages/log-in-page/log-in-page.component";
import { MyProfilePageComponent } from "./pages/my-profile-page/my-profile-page.component";
import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";

const routes: Routes = [
  { path: 'home-general', component: HomeNoLogComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'contactanos', component: ContactanosPageComponent },
  { path: 'registrate', component: SignUpPageComponent },
  { path: 'ingresa', component: LogInPageComponent },
  { path: 'my-profile/:id', component: MyProfilePageComponent },
  
  { path: '', component: HomeNoLogComponent },

  //reemplaza imports de juegos
  {
    path: 'juegos',
    loadChildren: () => import('./juegos/juegos.module').then(module => module.JuegosModule)
  },

  //reemplaza imports de viajeros
  {
    path: 'viajeros',
    loadChildren: () => import('./viajeros/viajeros.module').then(module => module.ViajerosModule)
  },

  //reemplaza imports de gramatica
  {
    path: 'gramaticas',
    loadChildren: () => import('./gramatica/gramatica.module').then(module => module.GramaticaModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
