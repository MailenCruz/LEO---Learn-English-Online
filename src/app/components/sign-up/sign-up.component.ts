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
  showPassword: boolean = false;

  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    window.scrollTo(0, 0);
  }

  initForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), this.validarFormatoUsername()]],
      password: ['', [Validators.required, Validators.minLength(6), this.validarFormatoPassword()]],
      email: ['', [Validators.required, this.validarFormatoEmail()]]
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

  guardarUser() {
    forkJoin({
      emailCheck: this.userService.verificarEmail(this.form.controls['email'].value),
      userCheck: this.userService.verificarUser(this.form.controls['username'].value)
    }).subscribe({
      next: ({ emailCheck, userCheck }) => {
        this.errorMail = emailCheck;
        this.errorUser = userCheck;

        if (this.errorMail === 'exito' && this.errorUser === 'exito') {
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
