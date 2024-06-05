import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'contactanos-page',
  templateUrl: './contactanos-page.component.html',
  styleUrls: ['./contactanos-page.component.css']
})
export class ContactanosPageComponent {

  constructor(private userService:UsersService, public router:Router,){}

  isLogged(){
    let res = this.userService.currentUser();
    return res? true:false;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
