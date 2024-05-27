import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  private formBuilder: FormBuilder = inject(FormBuilder)
  private auth: UsersService = inject(UsersService)
  private router: Router = inject(Router)
  valid!: string

  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  iniciarSession() {
    if (this.formulario.invalid) return;

    this.auth.verificarUserAndPass(
      this.formulario.controls['username'].value,
      this.formulario.controls['password'].value
    ).subscribe({
      next: user => {
        localStorage.setItem('token', user.id.toString());
        this.router.navigate(['/home']);
      },
      error: err => {
        this.valid = 'Usuario o contraseña incorrectos';
      }
    });
  }

}
