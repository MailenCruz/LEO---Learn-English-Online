import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  form!: FormGroup;
  errorMail!: string;
  errorUser!: string;
  user!: User | undefined;

  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.camposFormulario();
  }

  initForm() {
    this.form = this.formBuilder.group({
      editUsername: ['', [Validators.required, Validators.minLength(3)]],
      editEmail: ['', [Validators.required, Validators.email]]
    })
  }

  /*async camposFormulario() {
    this.route.params.subscribe(async params => {
      const userId = +params['id'];
      if (!isNaN(userId)) {
        this.user = await this.getUser(userId);
        if (this.user) {
          this.form = this.formBuilder.group({
            editUsername: [this.user.username],
            editEmail: [this.user.email],
            editId: [this.user.id],
          });
        } else {
          console.log('error')
        }
      } else {
        console.log('ID de user no válido');
      }
    })
  }*/

  camposFormulario(){
    this.route.params.subscribe(params => {
      const userId = +params['id'];

      if(!isNaN(userId)){
        this.getUser(userId).subscribe(
          user => {
            this.user = user;
          }
        )

        if (this.user) {
          this.form = this.formBuilder.group({
            editUsername: [this.user.username],
            editEmail: [this.user.email],
            editId: [this.user.id],
        });
        } else {
          console.log('error')
        }
      }
    })
  }

  /*async getUser(id: number): Promise<User | undefined> {
    try {
      const us = await this.userService.getUser(id);
      return us;
    } catch (error) {
      console.error('Error al obtener el cliente:', error);
      return undefined;
    }
  }*/
  
  getUser(userId: number): Observable < User | undefined > {
      return this.userService.getUser(userId).pipe(
        map(user => {
          if (user) {
            return user;
          } else {
            console.error('Usuario no encontrado');
            return undefined;
          }
        }),
        catchError(error => {
          console.error('Error al obtener el usuario:', error);
          return of(undefined);
        })
      );
    }

  /*editarUser() {
    this.user!.username = this.form.get('editUsername')!.value;
    this.user!.email = this.form.get('editEmail')!.value;
    this.user!.id = this.form.get('editId')!.value;

    if (this.user) {
      this.verificarModificacionEmail(this.user.email, this.user.id);
      this.verificarModificacionUser(this.user.username, this.user.id);

      if (this.errorMail && this.errorUser) {
        this.userService.putUser(this.user);
        this.router.navigate(['/home']);
      } else {
        return;
      }
    }
  }*/

  editarUser() {
      this.user!.username = this.form.get('editUsername')!.value;
      this.user!.email = this.form.get('editEmail')!.value;
      this.user!.id = this.form.get('editId')!.value;

      if(this.user) {
      this.verificarModificacionEmail(this.user.email, this.user.id);
      this.verificarModificacionUser(this.user.username, this.user.id);

      if (this.errorMail && this.errorUser) {
        this.userService.putUser(this.user);
        this.router.navigate(['/home']);
      } else {
        return;
      }
    }
  }

  /*async verificarModificacionEmail(email: string, id: number) {
    let res = await this.userService.getUser(id);
    if (res.email == email) {
      this.errorMail = 'exito'
      return;
    }
    this.verificarEmail(email);
  }*/

  verificarModificacionEmail(email: string, id: number) {
    let res = this.userService.getUser(id).subscribe(
      user => {
        if (user) {
          if (user.email == email) {
            this.errorMail = 'exito'
            return;
          }
          this.verificarEmail(email);
        }
      }
    )
  }

  /*async verificarModificacionUser(user: string, id: number) {
    let res = await this.userService.getUser(id);
    if (res.username == user) {
      this.errorUser = 'exito';
      return;
    }
    this.verificarUser(user);
  }*/

  verificarModificacionUser(user: string, id: number) {
    let res = this.userService.getUser(id).subscribe(
      us => {
        if(us){
          if (us.username == user) {
            this.errorMail = 'exito'
            return;
          }
        }
        this.verificarUser(user);
      }
    )
  }

  /*async verificarEmail(email: string) {
    this.errorMail = await this.userService.verificarEmail(email);
    if (this.errorMail == 'exito') {
      return true;
    } else {
      return false;
    }
  }*/

  verificarEmail(email: string) {
    this.userService.verificarEmail(email).subscribe(
      (mensaje) => {
        this.errorMail = mensaje;
      }
    );
  }

  /*async verificarUser(username: string) {
    this.errorUser = await this.userService.verificarUser(username);
    if (this.errorUser == 'exito') {
      return true;
    } else {
      return false;
    }
  }*/

  verificarUser(username: string) {
    this.userService.verificarUser(username).subscribe(
      (mensaje) => {
        this.errorUser = mensaje;
      }
    );
  }

}

