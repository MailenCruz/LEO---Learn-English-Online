import { Component } from '@angular/core';
import { ViajeroService } from '../../services/viajero.service';
import { Restaurante } from '../../interfaces/restaurante';

@Component({
  selector: 'app-restaurante-viajero',
  templateUrl: './restaurante-viajero.component.html',
  styleUrls: ['./restaurante-viajero.component.css']
})
export class RestauranteViajeroComponent {

  restauranteDatos:Restaurante|undefined;

  constructor(private viajeroService: ViajeroService){}

  async ngOnInit(){
    try{
      this.restauranteDatos = await this.viajeroService.getDataRestaurante();
      //console.log(this.restauranteDatos);
    }
    catch(error){
      console.log(error);
    }
  }

}
