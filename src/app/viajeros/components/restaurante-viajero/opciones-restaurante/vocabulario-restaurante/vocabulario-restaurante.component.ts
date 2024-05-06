import { Component } from '@angular/core';
import { Vocabulario } from 'src/app/viajeros/interfaces/vocabulario';
import { ViajeroService } from 'src/app/viajeros/services/viajero.service';


@Component({
  selector: 'app-vocabulario-restaurante',
  templateUrl: './vocabulario-restaurante.component.html',
  styleUrls: ['./vocabulario-restaurante.component.css']
})
export class VocabularioRestauranteComponent {

  vocabularioRestaurante: Vocabulario | undefined;

  constructor(private viajeroService: ViajeroService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.viajeroService.getDataRestaurante_vocabulario().subscribe(
      {
        next: (voc) => {
          this.vocabularioRestaurante = voc;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
    //console.log("VOCABULARIO RESTAURANTE: ");
    //console.log(this.vocabularioRestaurante);

  }

}
