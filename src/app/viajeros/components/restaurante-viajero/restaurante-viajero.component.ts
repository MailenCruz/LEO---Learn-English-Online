import { Component } from '@angular/core';
import { ViajeroService } from '../../services/viajero.service';
import { Restaurante } from '../../interfaces/restaurante';

@Component({
  selector: 'app-restaurante-viajero',
  templateUrl: './restaurante-viajero.component.html',
  styleUrls: ['./restaurante-viajero.component.css']
})
export class RestauranteViajeroComponent {

  restauranteDatos: Restaurante | undefined;

  constructor(private viajeroService: ViajeroService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.viajeroService.getDataRestaurante().subscribe(
      {
        next: (data) => {
          this.restauranteDatos = data;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
    //console.log(this.restauranteDatos);
  }
}
