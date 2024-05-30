import { Component } from '@angular/core';
import { Alojamiento } from '../../interfaces/alojamiento';
import { ViajeroService } from '../../services/viajero.service';


@Component({
  selector: 'app-alojamiento-viajero',
  templateUrl: './alojamiento-viajero.component.html',
  styleUrls: ['./alojamiento-viajero.component.css']
})
export class AlojamientoViajeroComponent {

  alojamientoDatos: Alojamiento | undefined;

  constructor(private viajeroService: ViajeroService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    
    this.viajeroService.getDataAlojamiento().subscribe(
      {
        next: (data) => {
          this.alojamientoDatos = data;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
    //console.log(this.alojamientoDatos);
  }
}
