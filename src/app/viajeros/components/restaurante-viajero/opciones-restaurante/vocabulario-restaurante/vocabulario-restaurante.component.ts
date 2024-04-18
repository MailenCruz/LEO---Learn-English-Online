import { Component } from '@angular/core';
import { Vocabulario } from 'src/app/viajeros/interfaces/vocabulario';
import { ViajeroService } from 'src/app/viajeros/services/viajero.service';


@Component({
  selector: 'app-vocabulario-restaurante',
  templateUrl: './vocabulario-restaurante.component.html',
  styleUrls: ['./vocabulario-restaurante.component.css']
})
export class VocabularioRestauranteComponent {

  vocabularioRestaurante: Vocabulario|undefined;

  constructor(private viajeroService:ViajeroService){}

  async ngOnInit(){
    try{
      this.vocabularioRestaurante = await this.viajeroService.getDataRestaurante_vocabulario();
      console.log("VOCABULARIO RESTAURANTE: ");
      console.log(this.vocabularioRestaurante);
    }
    catch(error){
      console.log(error);
    }
  }

}
