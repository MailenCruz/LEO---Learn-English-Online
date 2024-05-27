import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'navbar-logueado',
  templateUrl: './navbar-logueado.component.html',
  styleUrls: ['./navbar-logueado.component.css']
})
export class NavbarLogueadoComponent implements OnInit {
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  getUser(): User | undefined {
    const res = this.usersService.currentUser();
    if(res){
      return res;
    }
    else{
      return undefined;
    }
  }
  
  getUserId(): string {
    const res = this.usersService.currentUser();
    if (res === undefined) {
      //console.log("-1");
      return "-1";
    } else {
      //console.log(res.id);
      return res.id;
    }
  }
  
  onLogOut() {
    this.usersService.logout();
    this.router.navigate(['/home-general'])
  }

}
