import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-alojamiento-home-page',
  templateUrl: './alojamiento-home-page.component.html',
  styleUrls: ['./alojamiento-home-page.component.css']
})
export class AlojamientoHomePageComponent {
  constructor(private userService:UsersService, public router:Router){

  }
  isLogged(){
    let res = this.userService.currentUser;
    return res? true:false;
  }
}
