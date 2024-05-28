import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css']
})
export class MyProfilePageComponent {
  constructor(private userService:UsersService, public router:Router){

  }

  isLogged(){
    let res = this.userService.currentUser();
    return res? true:false;
  }
}
