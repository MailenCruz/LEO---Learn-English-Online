import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
  errorCurrentPassword!: string;
  errorNewPassword!: string;
  user!: User | undefined;

  showCurrentPassword: boolean = false;
  showNewPassword: boolean = false;

  currentPassword: string = '';


  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.camposFormulario();
    window.scrollTo(0, 0);
  }

  initForm() {
    this.form = this.formBuilder.group({
      editUsername: ['', [Validators.required, Validators.minLength(3), this.validarFormatoUsername()]],
      editEmail: ['', [Validators.required, this.validarFormatoEmail()]],
      currentPassword: [''],
      newPassword: ['', [Validators.minLength(6), this.validarFormatoPassword()]]
    })
  }

  ///FUNCIONES PARA CREAR NUESTROS VALIDATORS
  validarFormatoPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) {
        return null; // no se valida si el campo está vacío
      }
      const containsNumber = /\d/.test(value);
      return containsNumber ? null : { 'noNumber': true };
    };
  }

  validarFormatoEmail(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email = control.value;
      if (!email) {
        return null;
      }
      const formato = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      const valido = formato.test(email);
      return valido ? null : { 'invalidEmailDomain': true };
    };
  }

  validarFormatoUsername(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const username = control.value;
      if (!username) {
        return null;
      }
      const formato = /^[A-Za-z]{2,}[A-Za-z0-9]*$/;
      const valido = formato.test(username);
      return valido ? null : { 'invalidUsername': true };
    };
  }

  camposFormulario() {
    this.route.params.subscribe(params => {
      const userId = params['id'];

      this.getUser(userId).subscribe(
        user => {
          this.user = user;

          if (this.user) {
            this.form.patchValue({
              editUsername: this.user.username,
              editEmail: this.user.email
            });
            this.currentPassword = this.user.password;
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

  /*
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
  */
  editarUser() {
    if (!this.user) return;

    const newUsername = this.form.get('editUsername')!.value;
    const newEmail = this.form.get('editEmail')!.value;
    const auxCurrentPassword = this.form.get('currentPassword')!.value;
    const auxNewPassword = this.form.get('newPassword')!.value;

    const observables = [];


    if (newUsername !== this.user.username) {
      this.userService.verificarUser(newUsername).subscribe(result => {
        this.errorUser = result;
        if (this.errorUser === 'exito') {
          if (newUsername) {
            this.user!.username = newUsername;
          }
          this.actualizarUsuario();
        }
      })
    }

    if (newEmail !== this.user.email) {
      this.userService.verificarEmail(newEmail).subscribe(result => {
        this.errorMail = result;
        if (this.errorMail === 'exito') {
          if (newEmail) {
            this.user!.email = newEmail;
          }
          this.actualizarUsuario();
        }
      })
    }

    if (auxCurrentPassword && auxNewPassword) {
      if (auxCurrentPassword !== this.currentPassword) {
        this.errorCurrentPassword = 'La contraseña actual no coincide.';
      } else if (auxNewPassword === auxCurrentPassword) {
        this.errorCurrentPassword = 'La nueva contraseña es igual a la actual.';
      } else {
        this.user.password = auxNewPassword;
        this.actualizarUsuario();
      }
    }
  }

  toggleCurrentPasswordVisibility() {
    this.showCurrentPassword = !this.showCurrentPassword;
  }

  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
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

