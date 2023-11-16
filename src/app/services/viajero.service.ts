import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViajeroService {

  private apiUrl = 'http://localhost:4000/viajero'; // Reemplaza con la URL de tu archivo JSON o el endpoint del servidor

  constructor() { }


}
