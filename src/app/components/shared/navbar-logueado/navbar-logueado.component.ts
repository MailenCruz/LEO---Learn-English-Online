import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar-logueado',
  templateUrl: './navbar-logueado.component.html',
  styleUrls: ['./navbar-logueado.component.css']
})
export class NavbarLogueadoComponent {
  constructor(private usersService: UsersService, private router: Router){

  }

  get getUser():User | undefined{
    return this.usersService.currentUser;
  }
  onLogOut(){
    this.usersService.logout();
    this.router.navigate(['/home-general'])
  }

}
