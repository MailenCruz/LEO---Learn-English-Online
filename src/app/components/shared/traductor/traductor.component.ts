import { Component } from '@angular/core';

@Component({
  selector: 'traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent {
  visible:boolean = false;

  mostrar(){
    this.visible = true;
  }

  ocultar(){
    this.visible = false;
  }

  alternar(){
    if(this.visible){
      this.ocultar();
    }else{
      this.mostrar();
    }
  }

}
