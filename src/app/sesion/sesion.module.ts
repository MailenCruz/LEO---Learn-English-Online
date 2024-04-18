import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SesionRoutingModule } from "./sesion-routing.module";
import { LogInComponent } from "./log-in/log-in.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { NavbarLogueadoComponent } from "./navbar-logueado/navbar-logueado.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LogInPageComponent } from "./pages/log-in-page/log-in-page.component";
import { MyProfilePageComponent } from "./pages/my-profile-page/my-profile-page.component";
import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";

@NgModule({
    declarations: [
        LogInComponent,
        LogInPageComponent,

        MyProfileComponent,
        MyProfilePageComponent,

        SignUpComponent,
        SignUpPageComponent,
        
        NavbarLogueadoComponent
    ],
    exports: [
        SesionRoutingModule
    ],
    imports: [
        ReactiveFormsModule
    ]
  })
  export class SesionModule { }
  