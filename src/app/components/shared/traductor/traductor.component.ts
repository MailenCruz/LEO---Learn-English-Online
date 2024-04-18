import { Component, OnInit } from '@angular/core';
import { TraductorService } from 'src/app/services/traductor.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit{

  constructor(private tradService:TraductorService, private formBuilder:FormBuilder){}

  palabra:string = '';
  traduccion:string = '';
  idioma:string = "es-en";
  forms!:FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.forms = this.formBuilder.group({
      palabra:['',[Validators.required]]
    })
  }

  getForm(){
    this.palabra = this.forms.value['palabra'];
    console.log(this.palabra);
    this.traducir();

  }

  clean(){
    this.traduccion ='';
    this.initForm();
  }
  


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
    let aux = this.palabra
    this.palabra = this.traduccion;
    this.traduccion = aux;
  }

  async traducir(){
    /* console.log(`${this.palabra}:palabra`); */
    if(this.idioma === "en-es"){
       this.traduccion= await this.tradService.getTraduccionENES(this.palabra);
       this.corregir();
    }else if(this.idioma === "es-en"){
      this.traduccion = await this.tradService.getTraduccionESEN(this.palabra);
      this.corregir();
    }
  }

  corregir(){
    if(this.palabra == 'house'){
      this.traduccion = 'casa';
    }
  }

}