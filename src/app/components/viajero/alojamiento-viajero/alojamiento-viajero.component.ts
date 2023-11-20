import { Component } from '@angular/core';
import { Alojamiento } from 'src/app/interfaces/interfaces-viajero/alojamiento';
import { ViajeroService } from 'src/app/services/viajero.service';

@Component({
  selector: 'app-alojamiento-viajero',
  templateUrl: './alojamiento-viajero.component.html',
  styleUrls: ['./alojamiento-viajero.component.css']
})
export class AlojamientoViajeroComponent {

  alojamientoDatos:Alojamiento|undefined;

  constructor(private viajeroService:ViajeroService) {}

  async ngOnInit(){
    try{
      this.alojamientoDatos=await this.viajeroService.getDataAlojamiento();
      //console.log(this.alojamientoDatos);
    }
    catch(error){
      console.log(error);
    }
  }

}
