import { Component } from '@angular/core';
import { Vocabulario } from 'src/app/viajeros/interfaces/vocabulario';
import { ViajeroService } from 'src/app/viajeros/services/viajero.service';


@Component({
  selector: 'app-vocabulario-alojamiento',
  templateUrl: './vocabulario-alojamiento.component.html',
  styleUrls: ['./vocabulario-alojamiento.component.css']
})
export class VocabularioAlojamientoComponent {

  vocabularioAlojamiento:Vocabulario|undefined;

  constructor(private viajeroService: ViajeroService){}

  async ngOnInit(){
    try{
      this.vocabularioAlojamiento = await this.viajeroService.getDataAlojamiento_vocabulario();
      console.log("VOCABULARIO ALOJAMIENTO:");
      console.log(this.vocabularioAlojamiento);
    }
    catch(error){
      console.log(error);
    }
  }
}
