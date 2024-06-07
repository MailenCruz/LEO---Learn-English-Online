import { Component, OnInit } from '@angular/core';
import { TraductorService } from 'src/app/services/traductor.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit{

  palabra:string = '';
  traduccion:string = '';
  idioma:string = "es-en";
  forms!:FormGroup;
  loading: boolean =false; // Variable para rastrear el estado de carga

  constructor(private tradService:TraductorService, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.forms = this.formBuilder.group({
      palabra:['',[Validators.required]]
    })
  }

  getForm(){
    if (this.forms.valid) {
      this.palabra = this.forms.value['palabra'];
      console.log(this.palabra);
      this.traducir();
    } else {
      this.forms.controls['palabra'].markAsTouched();
    }
  }

  clean(){
    this.traduccion ='';
    this.palabra='';
    this.initForm();
  }

  visible:boolean = false;

  mostrar(){
    this.clean();
    this.visible = true;
  }

  ocultar(){
    this.clean();
    this.visible = false;
  }

  alternar(){
    this.clean();
    this.visible = !this.visible;
  }

  alternarIdioma(){
    if(this.idioma === "es-en"){
      this.idioma = "en-es";
      this.clean();
    } else if(this.idioma === "en-es"){
      this.idioma = "es-en";
      this.clean();
    }
    let aux = this.palabra
    this.palabra = this.traduccion;
    this.traduccion = aux;
  }


  traducir() {
    this.loading = true; // Comienza la carga
    
    if (this.idioma === "en-es") {
      this.tradService.getTraduccionENES(this.palabra).subscribe(
        traduccion => {
          this.traduccion = traduccion || '';
          this.corregir();
          this.loading = false; // Finaliza la carga
        },
        error => {
          console.error('Error:', error);
          this.loading = false; // Finaliza la carga en caso de error
        }
      );
    } else if (this.idioma === "es-en") {
      this.tradService.getTraduccionESEN(this.palabra).subscribe(
        traduccion => {
          this.traduccion = traduccion || '';
          this.corregir();
          this.loading = false; // Finaliza la carga
        },
        error => {
          console.error('Error:', error);
          this.loading = false; // Finaliza la carga en caso de error
        }
      );
    }
  }

  corregir(){
    if(this.palabra == 'house'){
      this.traduccion = 'casa';
    }
    else if(this.palabra == 'traductor'){
      this.traduccion = 'translator';
    }
    else if(this.palabra == 'trabajo'){
      this.traduccion = 'job, work';
    }
    else if(this.palabra == 'espejo'){
      this.traduccion = 'mirror';
    }
    else if(this.palabra == 'mesa'){
      this.traduccion = 'table';
    }
    

    /* trabajo, mesa, espejo, traductor*/
  }

}