import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { Observable, catchError, filter, map, of, switchMap, tap } from 'rxjs';
import { environments } from 'src/environments/environments.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = environments.urlUsers;
  private user?: User;

  constructor(private router: Router, private http: HttpClient) { }

  currentUser(): User | undefined {
    if (!this.user) return undefined;
    return { ...this.user };
  }

  generarID(): Observable<string> {
    const min = 1000000000;
    const max = 9999999999;
  
    const generateRandomID = (): number => Math.floor(Math.random() * (max - min + 1)) + min;
  
    let idNumerico: number;
  
    const tryGenerateID = (): Observable<string> => {
      idNumerico = generateRandomID();

      return this.getUser(idNumerico.toString()).pipe(
        catchError(error => {
          return of(null);
        }),
        switchMap(user => {
          if (!user) { 
            return of(idNumerico.toString()); // si no hay usuario con este id
          } else { 
            console.log("El ID ya está en uso"); // si hay un usuario con este id generamos otro
            return tryGenerateID();
          }
        })
      );
    };
  
    return tryGenerateID().pipe(
      filter(id => id !== null)
    );
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(
      this.url,
      user,
      {
        headers:
        {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  putUser(user: User): Observable<any> {
    const userUrl = `${this.url}/${user.id}`;
    return this.http.put(
      userUrl,
      user,
      {
        headers:
        {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  getUser(id: string): Observable<User | undefined> {
    return this.http.get<User>(`${this.url}/${id}`).pipe(
      catchError(error => {
        return of(undefined);
      })
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  verificarUserAndPass(user: string, pass: string): Observable<User> {
    return this.getUsers().pipe(
      map(users => {
        const buscado = users.find(u => u.username === user && u.password === pass);
        if (buscado) {
          this.user = buscado;
          return buscado;
        } else {
          throw new Error('Usuario o contraseña incorrectos');
        }
      })
    );
  }

  verificarEmail(email: string): Observable<string> {
    return this.getUsers()
      .pipe(
        map(users => {
          const user = users.find(u => u.email === email);
          return user ? 'Ya hay un usuario registrado con este email' : 'exito';
        })
      );
  }

  verificarUser(username: string): Observable<string> {
    return this.getUsers()
      .pipe(
        map(users => {
          const user = users.find(u => u.username === username);
          return user ? 'Ya hay un usuario registrado con este nombre de usuario' : 'exito';
        })
      );
  }

  checkStatusAutentication(): Observable<boolean> {
    const token = localStorage.getItem('token')

    if (!token) {
      return of(false)
    }
    return this.http.get<User>(`${this.url}/${token}`)
      .pipe(
        tap(u => this.user = u),
        map(u => !!u),
        catchError(err => of(false))
      )
  }

  logout() {
    this.user = undefined;
    localStorage.clear()
  }

}