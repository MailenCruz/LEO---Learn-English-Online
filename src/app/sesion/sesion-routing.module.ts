import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LogInPageComponent } from "./pages/log-in-page/log-in-page.component";
import { MyProfilePageComponent } from "./pages/my-profile-page/my-profile-page.component";
import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";

const routes: Routes = [
  { path: 'registrate', component: SignUpPageComponent },
  { path: 'ingresa', component: LogInPageComponent },
  { path: 'my-profile/:id', component: MyProfilePageComponent }
];

@NgModule({
  imports:
    [RouterModule.forChild(routes)],
  exports:
    [RouterModule]
})
export class SesionRoutingModule { }