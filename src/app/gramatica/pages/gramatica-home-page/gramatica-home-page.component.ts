import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'gramatica-home-page',
  templateUrl: './gramatica-home-page.component.html',
  styleUrls: ['./gramatica-home-page.component.css']
})
export class GramaticaHomePageComponent {
  constructor(private userService:UsersService, public router:Router){

  }

  isLogged(){
    let res = this.userService.currentUser;
    return res? true:false;
  }
}
