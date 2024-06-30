import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { Observable, forkJoin } from 'rxjs';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form!: FormGroup;
  errorMail!: string;
  errorUser!: string;
  checkUsername: boolean = false;
  checkEmail: boolean = false;
  checkPassword: boolean = false;
  showPassword: boolean = false;

  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.onFormChanges();
    window.scrollTo(0, 0);
  }

  initForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), this.validarFormatoUsername()]],
      password: ['', [Validators.required, Validators.minLength(6), this.validarFormatoPassword()]],
      email: ['', [Validators.required, this.validarFormatoEmail()]]
    })
  }  

  onFormChanges(): void {
    this.form.get('username')?.valueChanges.subscribe(() => {
      const control = this.form.get('username');
      if (control) {
        control.updateValueAndValidity();
        this.checkUsername = !control.hasError('invalidUsername') && !control.hasError('minlength') && !control.hasError('spacesAtEdges') && !control.hasError('invalidCharacters');
      }
    });

    this.form.get('email')?.valueChanges.subscribe(() => {
      this.checkEmail = !this.form.get('email')?.hasError('invalidEmailDomain');
    });

    this.form.get('password')?.valueChanges.subscribe(() => {
      const control = this.form.get('password');
      this.checkPassword = !(control?.hasError('noNumber') || control?.hasError('minlength'));
    });
  }

  ///FUNCIONES PARA CREAR NUESTROS VALIDATORS
  validarFormatoPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) {
        return null; // no se valida si el campo está vacío
      }
      const containsNumber = /\d/.test(value);
      if (containsNumber) {
        if (value.length >= 6) {
          this.checkPassword = true;
          return null;
        } else {
          return { 'minlength': true };
        }
      } else {
        return { 'noNumber': true };
      }
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

      if (valido) {
        this.checkEmail = true;
        return null;
      }
      else {
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


  guardarUser() {
    forkJoin({
      emailCheck: this.userService.verificarEmail(this.form.controls['email'].value),
      userCheck: this.userService.verificarUser(this.form.controls['username'].value)
    }).subscribe({
      next: ({ emailCheck, userCheck }) => {
        this.errorMail = emailCheck;
        this.errorUser = userCheck;

        if (this.errorMail === 'exito' && this.errorUser === 'exito' && this.checkEmail && this.checkPassword && this.checkUsername) {
          this.userService.generarID().subscribe({
            next: (id) => {
              const user: User = {
                username: this.form.value.username,
                email: this.form.value.email,
                password: this.form.value.password,
                id: id
              };

              this.userService.postUser(user).subscribe({
                next: () => {
                  this.router.navigate(['/ingresa']);
                },
                error: (err) => {
                  console.error(err);
                }
              });
            },
            error: (err) => {
              console.error(err);
            }
          });
        }
      },
      error: (err) => {
        console.error('Error en las verificaciones', err);
      }
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
