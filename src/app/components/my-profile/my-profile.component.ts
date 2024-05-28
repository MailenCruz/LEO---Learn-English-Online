import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';

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

  camposFormulario() {
    this.route.params.subscribe(params => {
      const userId = params['id'];

      this.getUser(userId).subscribe(
        user => {
          this.user = user;

          if (this.user) {
            this.form = this.formBuilder.group({
              editUsername: [this.user.username],
              editEmail: [this.user.email]
            });
          } else {
            console.error('Usuario no encontrado');
          }
        }
      )
    })
  }

  getUser(userId: string): Observable<User | undefined> {
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

  editarUser() {
    if (!this.user) return;
  
    const newUsername = this.form.get('editUsername')!.value;
    const newEmail = this.form.get('editEmail')!.value;
  
    if (newUsername !== this.user.username) {
      this.userService.verificarUser(newUsername).subscribe(result => {
        this.errorUser = result;
        if (this.errorUser === 'exito') {
          this.user!.username = newUsername;
          this.actualizarUsuario();
        }
      });
    }
  
    if (newEmail !== this.user.email) {
      this.userService.verificarEmail(newEmail).subscribe(result => {
        this.errorMail = result;
        if (this.errorMail === 'exito') {
          this.user!.email = newEmail;
          this.actualizarUsuario();
        }
      });
    }

  }
  
  private actualizarUsuario() {
    if (this.user) {
      this.userService.putUser(this.user).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
  
  





}

