import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'navbar-logueado',
  templateUrl: './navbar-logueado.component.html',
  styleUrls: ['./navbar-logueado.component.css']
})
export class NavbarLogueadoComponent implements OnInit{
  constructor(private usersService: UsersService, private router: Router){

  }

ngOnInit(): void {
}

  get getUser():User | undefined{
    return this.usersService.currentUser;
    
  }
   getUserId():number{
    let res=  this.usersService.currentUser;
    if(!res){
      return -1;
    }
    else{
      return res.id;
    }
  }

 

  onLogOut(){
    this.usersService.logout();
    this.router.navigate(['/home-general'])
  }

}
