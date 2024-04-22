import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'juegos-home-page',
  templateUrl: './juegos-home-page.component.html',
  styleUrls: ['./juegos-home-page.component.css']
})
export class JuegosHomePageComponent {
  constructor(private userService: UsersService, public router: Router) {}

  isLogged() {
    let res = this.userService.currentUser;
    return res ? true : false;
  }
}
