import { Component } from '@angular/core';
import { TraductorService } from 'src/app/services/traductor.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent {

  constructor(private tradService:TraductorService){}

  palabra!:string;
  traduccion!:string;
  idioma:string = "es-en";


  visible:boolean = false;

  mostrar(){
    this.visible = true;
  }

  ocultar(){
    this.visible = false;
  }

  alternar(){
    this.visible = !this.visible;
  }

  alternarIdioma(){
    if(this.idioma === "es-en"){
      this.idioma = "en-es";
    } else if(this.idioma === "en-es"){
      this.idioma = "es-en";
    }
  }

  async traducir(){
    if(this.idioma === "en-es"){
      this.traduccion = await this.tradService.getTraduccionENES(this.palabra);
    }else if(this.idioma === "es-en"){
      this.traduccion = await this.tradService.getTraduccionESEN(this.palabra);
    }
    
  }
}