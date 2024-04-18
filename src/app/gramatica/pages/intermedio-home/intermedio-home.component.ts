import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/sesion/services/users.service';

@Component({
  selector: 'intermedio-home',
  templateUrl: './intermedio-home.component.html',
  styleUrls: ['./intermedio-home.component.css']
})
export class IntermedioHomeComponent {
  constructor(private userService:UsersService, public router:Router){

  }

  isLogged(){
    let res = this.userService.currentUser;
    return res? true:false;
  }
}
