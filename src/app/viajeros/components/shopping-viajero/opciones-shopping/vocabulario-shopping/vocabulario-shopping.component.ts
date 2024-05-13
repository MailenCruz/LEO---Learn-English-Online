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
  
  constructor(private viajeroService:ViajeroService ){
  }

  ngOnInit(){
    window.scrollTo(0, 0);
      this.viajeroService.getDataShopping_vocabulario().subscribe(
        {
          next: (voc) => {
            this.vocabularioShopping = voc;
          },
          error: (err) => {
            console.log(err);
          }
        }
      );
      //console.log("VOCABULARIO SHOPPING: ");
      //console.log(this.vocabularioShopping);
    
  }


  
}
