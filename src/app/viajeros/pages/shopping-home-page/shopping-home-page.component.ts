import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-shopping-home-page',
  templateUrl: './shopping-home-page.component.html',
  styleUrls: ['./shopping-home-page.component.css']
})
export class ShoppingHomePageComponent {
  constructor(private userService:UsersService, public router:Router){

  }

  isLogged(){
    let res = this.userService.currentUser;
    return res? true:false;
  }
}
