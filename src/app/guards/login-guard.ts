import { inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';

function checkAuthStatus(): boolean | Observable<boolean> {

  const authService = inject(UsersService);
  const router = inject(Router);

  return authService.checkStatusAutentication()
    .pipe(
      tap(estaAutenticado => {
        if (estaAutenticado) {
          router.navigate(['/home']); //si está logueado lo lleva al home logueado
        }
      }),
      map(estaAutenticado => !estaAutenticado)
    )
}

export const LoginGuard = () => {
  return checkAuthStatus()
}