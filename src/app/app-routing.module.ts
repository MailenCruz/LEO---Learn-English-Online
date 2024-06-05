import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNoLogComponent } from './pages/home-no-log/home-no-log.component';
import { LogInPageComponent } from "./pages/log-in-page/log-in-page.component";
import { MyProfilePageComponent } from "./pages/my-profile-page/my-profile-page.component";
import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";
import { LoginGuard } from './guards/login-guard';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: 'home-general', component: HomeNoLogComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'contactanos-page', component: ContactanosPageComponent },

  { path: 'registrate', component: SignUpPageComponent },
  { path: 'ingresa', component: LogInPageComponent, canActivate: [LoginGuard] },
  
  { path: 'my-profile/:id', component: MyProfilePageComponent, canActivate: [AuthGuard] },
  
  { path: '', component: HomeNoLogComponent },

  //reemplaza imports de juegos
  {
    path: 'juegos',
    loadChildren: () => import('./juegos/juegos.module').then(module => module.JuegosModule),
    canActivate: [AuthGuard]
  },

  //reemplaza imports de viajeros
  {
    path: 'viajeros',
    loadChildren: () => import('./viajeros/viajeros.module').then(module => module.ViajerosModule),
    canActivate: [AuthGuard]
  },

  //reemplaza imports de gramatica
  {
    path: 'gramaticas',
    loadChildren: () => import('./gramatica/gramatica.module').then(module => module.GramaticaModule),
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
