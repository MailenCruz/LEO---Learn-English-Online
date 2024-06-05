import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {

  constructor(private userService:UsersService, public router:Router,){}

  isLogged(){
    let res = this.userService.currentUser();
    return res? true:false;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
