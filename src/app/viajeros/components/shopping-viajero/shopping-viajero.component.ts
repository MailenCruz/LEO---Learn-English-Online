import { Component } from '@angular/core';
import { Shopping } from 'src/app/viajeros/interfaces/shopping';
import { ViajeroService } from 'src/app/viajeros/services/viajero.service';

@Component({
  selector: 'app-shopping-viajero',
  templateUrl: './shopping-viajero.component.html',
  styleUrls: ['./shopping-viajero.component.css']
})
export class ShoppingViajeroComponent {

  shoppingDatos: Shopping | undefined;

  constructor(private viajeroService: ViajeroService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.viajeroService.getDataShopping().subscribe(
      {
        next: (data) => {
          this.shoppingDatos = data;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
    
  }
}
