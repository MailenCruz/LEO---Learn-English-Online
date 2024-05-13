import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environments } from 'src/environments/environments.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = "http://localhost:3000/users";

  //url: string = environments.urlUsers;
  private user?: User;

  constructor(private router: Router, private http: HttpClient) { }

  /*get currentUser(): User | undefined {
    if (!this.user) return undefined
    return { ...this.user };
  }*/

  get currentUser(): User | undefined {
    if (!this.user) return undefined
    //structuredClone(this.user)
    return { ...this.user };
  }

  /*async postUser(user: User): Promise<User> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    return await response.json();
  }*/

  postUser(user: User): Observable<User> {
    return this.http.post<User>(
      this.url,
      user,
      {
        headers:
        {
          'Content-type': 'application/json'
        }
      }
    )
  }

  /*async putUser(user: User) {
    try {
      this.user = user;
      await fetch(`${this.url}/${user?.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(user),
          headers: { 'Content-Type': 'application/json' }
        }
      )
    } catch (error) {
      console.log(error)
    }
  }*/

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

  /*async getUser(id: number) {
    try {
      const res = await fetch(`${this.url}/${id}`,
        {
          method: 'GET',
        }
      )
      const user = res.json();
      return user;
    } catch (error) {
      console.log(error)
    }
  }*/

  getUser(id: number): Observable<User | undefined> {
    return this.http.get<User>(`${this.url}/${id}`).pipe(
      catchError(error => {throw undefined})
    );
  }

  /*async getUsers(): Promise<User[]> {
    const response = await fetch(this.url);
    return await response.json();
  }*/

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  /*async verificarUserAndPass(user: string, pass: string) {
    const users = await this.getUsers();
    const currentUser = users.find(u => u.password === pass && u.username === user);

    if (currentUser) {
      this.user = currentUser;

      localStorage.setItem('token', currentUser.id.toString())
      this.router.navigate(['/home'])
      return 'exito'

    } else {

      return ('El nombre de usuario o la contraseña es incorrecta');
    }
  }*/

  verificarUserAndPass(user: string, pass: string) {
    this.getUsers().subscribe(users => {
      users.find(u => {
        if (u.password === pass && u.username === user) {
          this.user = u;
          localStorage.setItem('token', u.id.toString())
          this.router.navigate(['/home'])
        }
      });
    });
  } 
  
  /*async verificarEmail(email: string) {
    const users = await this.getUsers();
    const currentUser = users.find(u => u.email === email);
    console.log('1');
    console.log(currentUser);
    if (currentUser) {
      return 'Ya hay un usuario registrado con este email'
    } else {
      
      return 'exito';
    }
  }*/
  
  verificarEmail(email: string): Observable<string> {
    return this.getUsers()
    .pipe(
      map(users => {
        const user = users.find(u => u.email === email);
        return user ? 'Ya hay un usuario registrado con este email' : 'exito';
      })
    );
  }

  /*async verificarUser(user: string) {
    const users = await this.getUsers();
    const currentUser = users.find(u => u.username === user);
    console.log('1');
    console.log(currentUser);
    if (currentUser) {
      console.log('Ya hay un usuario registrado con este nombre de usuario');
      return 'Ya hay un usuario registrado con este nombre de usuario'
    } else {

      return 'exito';
    }
  }*/

  verificarUser(username: string): Observable<string> {
    return this.getUsers()
    .pipe(
      map(users => {
        const user = users.find(u => u.username === username);
        return user ? 'Ya hay un usuario registrado con este nombre de usuario' : 'exito';
      })
    );
  }

  /*async checkStatusAutenticacion(): Promise<boolean> {
    const token = localStorage.getItem('token')
    if (!token) {
      return false
    }
    const response = await fetch(`${this.url}/${token}`);
    const user = await response.json();
    if (user) {
      this.user = user;
    }
    return !!user;
  }*/

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

  /*logout() {
    this.user = undefined;
    localStorage.clear()
  }*/

  logout() {
    this.user = undefined;
    localStorage.clear()
  }

}