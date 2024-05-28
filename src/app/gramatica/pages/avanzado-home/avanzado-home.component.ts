import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'avanzado-home',
  templateUrl: './avanzado-home.component.html',
  styleUrls: ['./avanzado-home.component.css']
})
export class AvanzadoHomeComponent {
  constructor(private userService:UsersService, public router:Router){

  }

  isLogged(){
    let res = this.userService.currentUser();
    return res? true:false;
  }
}
