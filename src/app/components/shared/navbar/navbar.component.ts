import { Component } from '@angular/core';
import { UsersService } from 'src/app/sesion/services/users.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  username!:string;
  constructor(private userService:UsersService){}

  
}
