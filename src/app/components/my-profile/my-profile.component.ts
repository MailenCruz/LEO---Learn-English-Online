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

  checkUsername: boolean = false;
  checkEmail: boolean = false;
  checkPassword: boolean = false;

  showCurrentPassword: boolean = false;
  showNewPassword: boolean = false;

  currentPassword: string = '';


  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.camposFormulario();
    this.onFormChanges();
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

  onFormChanges(): void {
    this.form.get('editUsername')?.valueChanges.subscribe(() => {
        const control = this.form.get('editUsername');
        if (control) {
            control.updateValueAndValidity();
            this.checkUsername = !control.hasError('invalidUsername') && !control.hasError('minlength') && !control.hasError('spacesAtEdges') && !control.hasError('invalidCharacters');
        }
    });

    this.form.get('editEmail')?.valueChanges.subscribe(() => {
        this.checkEmail = !this.form.get('editEmail')?.hasError('invalidEmailDomain');
    });

    this.form.get('newPassword')?.valueChanges.subscribe(() => {
        const control = this.form.get('newPassword');
        if (control) {
            control.updateValueAndValidity();
            this.checkPassword = !control.hasError('noNumber') && !control.hasError('minlength') && !control.hasError('spacesAtEdges') && !control.hasError('invalidCharacters');
        }
    });
}


  ///FUNCIONES PARA CREAR NUESTROS VALIDATORS
  validarFormatoPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const trimmedPassword = value.trim();
      if (value !== trimmedPassword) {
        return { 'spacesAtEdges': true }; //espacios
      }

      const formatoCaracteres = /^[A-Za-z0-9]+$/;
      const validoCaracteres = formatoCaracteres.test(trimmedPassword);
      if (!validoCaracteres) {
        return { 'invalidCharacters': true }; //caracteres especiales
      }

      const containsNumber = /\d/.test(value);
      if (!containsNumber) {
        return { 'noNumber': true }; //contiene numero
      }

      if (trimmedPassword.length < 6) {
        return { 'minlength': true }; //longitud
      }

      this.checkPassword = true;
      return null;
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

      if(valido){
        this.checkEmail = true;
        return null;
      }
      else{
        this.checkEmail = false;
        return { 'invalidEmailDomain': true };
      }
    };
  }

  validarFormatoUsername(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let username = control.value;
      if (!username) {
        return null;
      }

      const trimmedUsername = username.trim();
      if (username !== trimmedUsername) {
        return { 'spacesAtEdges': true }; //espacios
      }

      const formatoCaracteres = /^[A-Za-z0-9]+$/;
      const validoCaracteres = formatoCaracteres.test(trimmedUsername);
      if (!validoCaracteres) {
        return { 'invalidCharacters': true }; //caracteres especiales
      }

      const formato = /^(?=.*[A-Za-z]{2,})([A-Za-z0-9]+)$/i;
      const valido = formato.test(trimmedUsername);
      if (!valido) {
        return { 'invalidUsername': true }; //dos letras antes de numeros
      }

      if (trimmedUsername.length < 3) {
        return { 'minlength': true }; //longitud
      }

      this.checkUsername = true;
      return null;
    }
  };
  
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
          if (newUsername && this.checkUsername) {
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
          if (newEmail && this.checkEmail) {
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
      } else if (this.checkPassword){
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

