import { Injectable, inject } from '@angular/core';
import { UsersService } from '../sesion/services/users.service';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, take, tap } from 'rxjs';



/* @Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  canActivate(): Observable<boolean> | boolean | UrlTree {
    return this.authService.estoyAutenticado().pipe(
      take(1),
      tap((isLoggedIn) => !isLoggedIn ? this.router.navigate(['/login']): true)
    )
  }
}
 */