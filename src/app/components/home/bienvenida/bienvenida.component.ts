import { Component } from '@angular/core';

@Component({
  selector: 'bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
