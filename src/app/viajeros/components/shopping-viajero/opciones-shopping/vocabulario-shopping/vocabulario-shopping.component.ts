import { Component } from '@angular/core';
import { Vocabulario } from 'src/app/viajeros/interfaces/vocabulario';
import { ViajeroService } from 'src/app/viajeros/services/viajero.service';


@Component({
  selector: 'app-vocabulario-shopping',
  templateUrl: './vocabulario-shopping.component.html',
  styleUrls: ['./vocabulario-shopping.component.css']
})
export class VocabularioShoppingComponent {

  vocabularioShopping: Vocabulario|undefined;
  
  constructor(private viajeroService:ViajeroService ){}

  async ngOnInit(){
    try{
      this.vocabularioShopping = await this.viajeroService.getDataShopping_vocabulario();
      console.log("VOCABULARIO SHOPPING: ");
      console.log(this.vocabularioShopping);
    }
    catch(error){
      console.log(error);
    }
  }
}
