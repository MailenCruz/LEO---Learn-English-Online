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
  correccion!: boolean

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
          this.traduccion = traduccion?.toLocaleLowerCase() || '';
          this.checkWordExists(this.palabra);
          this.handleTranslation();
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
          this.traduccion = traduccion?.toLocaleLowerCase() || '';
          this.checkWordExists(this.palabra);
          this.handleTranslation();
          this.loading = false; // Finaliza la carga
        },
        error => {
          console.error('Error:', error);
          this.loading = false; // Finaliza la carga en caso de error
        }
      );
    }
  }

  handleTranslation() {
    this.tradService.wordExists(this.palabra).subscribe(
      result => {
        this.correccion = result === 1;
        if (this.correccion) {
          this.corregir(this.palabra);
        }else{
          console.log("no necesita corregirse");
        }
      },
      error => {
        console.error('Error al verificar la palabra:', error);
      }
    );
  }
  checkWordExists(word: string): number {
    this.tradService.wordExists(word).subscribe(
      result => {
        if (result === 1) {
          //console.log(`La palabra "${word}" existe en las traducciones.`);
          this.correccion = true;
          console.log(this.correccion);
        } else {
          //console.log(`La palabra "${word}" no existe en las traducciones.`);
          this.correccion = false;
          console.log(this.correccion);
        }
      },
      error => {
        console.error('Error al verificar la palabra:', error);
      }
    );
    return -1;
  }

  

  corregir(word: string): void {
    this.tradService.getTraduccionCorregida(word).subscribe(
      result => {
        if (result) {
          //console.log(`La traducción de "${word}" es "${result}".`);
          this.traduccion = result.toLocaleLowerCase();
          console.log(result);

        } else {
          //console.log(`No se encontró traducción para la palabra "${word}".`);
          this.traduccion = result
        }
      },
      error => {
        console.error('Error al obtener la traducción:', error);
      }
    );
    
  }

/*
  corregir(){
    
    this.palabra = this.palabra.toLocaleLowerCase();
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
    else if(this.palabra == 'hi'){
      this.traduccion = 'hola';
    }
    else if(this.palabra == 'english'){
      this.traduccion = 'inglés';
    }
    else if(this.palabra == 'water'){
      this.traduccion = 'agua';
    }
    else if(this.palabra == 'lion'){
      this.traduccion = 'león';
    }
    else if(this.palabra == 'bed'){
      this.traduccion = 'cama';
    }
    else if(this.palabra == 'you win'){
      this.traduccion = 'ganaste';
    }
    else if(this.palabra == 'back'){
      this.traduccion = 'atrás';
    }
    else if(this.palabra == 'fuego'){
      this.traduccion = 'fire';
    }
    else if(this.palabra == 'sol'){
      this.traduccion = 'sun';
    }
    else if(this.palabra == 'nariz'){
      this.traduccion = 'nose';
    }
    else if(this.palabra == 'sun'){
      this.traduccion = 'sol';
    }
    else if(this.palabra == 'check'){
      this.traduccion = 'Revisar';
    }
    else if(this.palabra == 'choose'){
      this.traduccion = 'Elige';
    }
    else if(this.palabra == 'you'){
      this.traduccion = 'tú';
    }
    else if(this.palabra == 'spanish'){
      this.traduccion = 'español';
    }
    else if(this.palabra == 'speaking'){
      this.traduccion = 'hablando';
    }
    else if(this.palabra == 'i'){
      this.traduccion = 'yo';
    }
    else if(this.palabra == 'playing'){
      this.traduccion = 'play';
    }
    else if(this.palabra == 'i played hockey'){
      this.traduccion = 'jugué al Hockey';
    }
    else if(this.palabra == 'made'){
      this.traduccion = 'hecho';
    }
    else if(this.palabra == 'making'){
      this.traduccion = 'haciendo';
    }
    else if(this.palabra == 'how to play guitar'){
      this.traduccion = 'como tocar la guitarra';
    }
    else if(this.palabra == 'mum'){
      this.traduccion = 'mamá';
    }
    else if(this.palabra == 'is'){
      this.traduccion = 'es';
    }
    else if(this.palabra == 'spoke'){
      this.traduccion = 'habló';
    }
    else if(this.palabra == 'french'){
      this.traduccion = 'francés';
    }
    else if(this.palabra == 'trip'){
      this.traduccion = 'viaje';
    }
    else if(this.palabra == 'lived'){
      this.traduccion = 'vivido';
    }
    else if(this.palabra == 'book'){
      this.traduccion = 'libro';
    }
    else if(this.palabra == 'last'){
      this.traduccion = 'último';
    }
    else if(this.palabra == 'went'){
      this.traduccion = 'fue';
    }
    else if(this.palabra == 'do'){
      this.traduccion = 'hacer';
    }
    else if(this.palabra == 'did'){
      this.traduccion = 'hizo';
    }
    else if(this.palabra == 'her'){
      this.traduccion = 'su';
    }
    else if(this.palabra == 'near'){
      this.traduccion = 'cerca';
    }
    else if(this.palabra == 'goes'){
      this.traduccion = 'va';
    }
    else if(this.palabra == 'out'){
      this.traduccion = 'afuera';
    }
    else if(this.palabra == 'go'){
      this.traduccion = 'ir';
    }
    else if(this.palabra == 'my'){
      this.traduccion = 'mi';
    }
    else if(this.palabra == 'studying'){
      this.traduccion = 'estudiando';
    }
    else if(this.palabra == 'night'){
      this.traduccion = 'noche';
    }
    else if(this.palabra == 'playing'){
      this.traduccion = 'jugando';
    }
    else if(this.palabra == 'football'){
      this.traduccion = 'fútbol';
    }
    else if(this.palabra == 'reading'){
      this.traduccion = 'leyendo';
    }
    else if(this.palabra == 'at the cafe'){
      this.traduccion = 'en la cafetería';
    }
    else if(this.palabra == 'the cafe'){
      this.traduccion = 'la cafetería';
    }
    else if(this.palabra == 'cafe'){
      this.traduccion = 'cafetería';
    }
    else if(this.palabra == 'power'){
      this.traduccion = 'poder';
    }
    else if(this.palabra == 'working'){
      this.traduccion = 'trabajando';
    }
    else if(this.palabra == 'attending'){
      this.traduccion = 'asistiendo';
    }
    else if(this.palabra == 'finish'){
      this.traduccion = 'terminar';
    }
    else if(this.palabra == 'party'){
      this.traduccion = 'fiesta';
    }
    else if(this.palabra == 'play the piano'){
      this.traduccion = 'tocar el piano';
    }
    else if(this.palabra == 'future'){
      this.traduccion = 'futuro';
    }
    else if(this.palabra == 'for hours'){
      this.traduccion = 'por horas';
    }
    else if(this.palabra == 'cleaning'){
      this.traduccion = 'limpiando';
    }
    else if(this.palabra == 'the house'){
      this.traduccion = 'la casa';
    }
    else if(this.palabra == 'doing'){
      this.traduccion = 'haciendo';
    }
    else if(this.palabra == 'moment'){
      this.traduccion = 'momento';
    }
    else if(this.palabra == 'they were watching a movie yesterday'){
      this.traduccion = 'ellos estaban viendo una película ayer';
    }
    else if(this.palabra == 'listen'){
      this.traduccion = 'escuchar';
    }
    else if(this.palabra == 'listening'){
      this.traduccion = 'escuchando';
    }
    else if(this.palabra == 'listening music'){
      this.traduccion = 'escuchando música';
    }
    else if(this.palabra == 'while'){
      this.traduccion = 'mientras';
    }
    else if(this.palabra == 'attention'){
      this.traduccion = 'atención';
    }
    else if(this.palabra == 'write'){
      this.traduccion = 'escriibir';
    }
    else if(this.palabra == 'text'){
      this.traduccion = 'texto';
    }
    else if(this.palabra == 'they are playing'){
      this.traduccion = 'ellos están jugando';
    }
    else if(this.palabra == 'packing'){
      this.traduccion = 'empacando';
    }
    else if(this.palabra == 'packing for the picnic'){
      this.traduccion = 'empacando para el picnic';
    }
    else if(this.palabra == 'they are studying'){
      this.traduccion = 'están estudiando';
    }
    else if(this.palabra == 'buy a new car'){
      this.traduccion = 'comprar un auto nuevo';
    }
    else if(this.palabra == 'second'){
      this.traduccion = 'segundo';
    }
    else if(this.palabra == 'travel'){
      this.traduccion = 'viajar';
    }
    else if(this.palabra == 'traveled'){
      this.traduccion = 'viajado';
    }
    else if(this.palabra == 'we arrived'){
      this.traduccion = 'llegamos';
    }
    else if(this.palabra == 'came out'){
      this.traduccion = 'salió';
    }
    else if(this.palabra == 'won'){
      this.traduccion = 'ganado';
    }
    else if(this.palabra == 'team'){
      this.traduccion = 'equipo';
    }
    else if(this.palabra == 'championship'){
      this.traduccion = 'campeonato';
    }
    else if(this.palabra == 'them'){
      this.traduccion = 'ellos';
    }
    else if(this.palabra == 'next year'){
      this.traduccion = 'próximo año';
    }
    else if(this.palabra == 'finished construction'){
      this.traduccion = 'construcción finalizada';
    }
    else if(this.palabra == 'new bridge'){
      this.traduccion = 'nuevo puente';
    }
    else if(this.palabra == 'live in this house'){
      this.traduccion = 'vivir en esta casa';
    }
    else if(this.palabra == 'we will have lived'){
      this.traduccion = 'habremos vivido';
    }
    else if(this.palabra == 'she had lost'){
      this.traduccion = 'ella había perdido';
    }
    else if(this.palabra == 'key'){
      this.traduccion = 'llave';
    }
    else if(this.palabra == 'keys'){
      this.traduccion = 'llaves';
    }
    else if(this.palabra == 'if they had known'){
      this.traduccion = 'si hubieran sabido';
    }
    else if(this.palabra == 'a different route'){
      this.traduccion = 'una ruta diferente';
    }
    else if(this.palabra == 'applied'){
      this.traduccion = 'aplicado';
    }
    else if(this.palabra == 'japanese' || this.palabra == 'Japanese'){
      this.traduccion = 'japonés';
    }
    else if(this.palabra == 'more hours'){
      this.traduccion = 'más horas';
    }
    else if(this.palabra == 'cleaned'){
      this.traduccion = 'limpio';
    }
    else if(this.palabra == 'store'){
      this.traduccion = 'tienda';
    }
    else if(this.palabra == 'gift shop'){
      this.traduccion = 'tienda de regalos';
    }
    else if(this.palabra == 'hat'){
      this.traduccion = 'sombrero';
    }
    else if(this.palabra == 'umbrella'){
      this.traduccion = 'paraguas';
    }
    else if(this.palabra == 'cashier'){
      this.traduccion = 'caja';
    }
    else if(this.palabra == 'price'){
      this.traduccion = 'precio';
    }
    else if(this.palabra == 'shopping cart'){
      this.traduccion = 'carrito de compras';
    }
    else if(this.palabra == 'return'){
      this.traduccion = 'devolver';
    }
    else if(this.palabra == 'size'){
      this.traduccion = 'talla';
    }
    else if(this.palabra == 'clearance'){
      this.traduccion = 'liquidación';
    }
    else if(this.palabra == 'shopping hours'){
      this.traduccion = 'horario de compras';
    }
    else if(this.palabra == 'handbag'){
      this.traduccion = 'bolso de mano';
    }
    else if(this.palabra == 'love'){
      this.traduccion = 'amor';
    }
    else if(this.palabra == 'because'){
      this.traduccion = 'porque';
    }
    else if(this.palabra == 'nearby'){
      this.traduccion = 'cerca';
    }
    else if(this.palabra == 'carry'){
      this.traduccion = 'llevar';
    }
    else if(this.palabra == 'close'){
      this.traduccion = 'cerrar';
    }
    else if(this.palabra == 'dish'){
      this.traduccion = 'plato';
    }
    else if(this.palabra == 'main course'){
      this.traduccion = 'plato principal';
    }
    else if(this.palabra == 'soda'){
      this.traduccion = 'refresco';
    }
    else if(this.palabra == 'order'){
      this.traduccion = 'pedir';
    }
    else if(this.palabra == 'table'){
      this.traduccion = 'mesa';
    }
    else if(this.palabra == 'chair'){
      this.traduccion = 'silla';
    }
    else if(this.palabra == 'fork'){
      this.traduccion = 'tenedor';
    }
    else if(this.palabra == 'knife'){
      this.traduccion = 'cuchillo';
    }
    else if(this.palabra == 'plate'){
      this.traduccion = 'plato';
    }
    else if(this.palabra == 'glass'){
      this.traduccion = 'vaso';
    }
    else if(this.palabra == 'chopsticks'){
      this.traduccion = 'palillos chinos';
    }
    else if(this.palabra == 'tip'){
      this.traduccion = 'propina';
    }
    else if(this.palabra == 'I´d like the check'){
      this.traduccion = 'me gustaría ver la cuenta';
    }
    else if(this.palabra == 'make'){
      this.traduccion = 'hacer';
    }
    else if(this.palabra == 'booth'){
      this.traduccion = 'puesto';
    }
    else if(this.palabra == 'can I have the bill, please?'){
      this.traduccion = 'me traes la cuenta, por favor?';
    }
    else if(this.palabra == 'spicy'){
      this.traduccion = 'picante';
    }
    else if(this.palabra == 'twin room'){
      this.traduccion = 'habitación con dos camas individuales';
    }
    else if(this.palabra == 'reception'){
      this.traduccion = 'recepción';
    }
    else if(this.palabra == 'lobby'){
      this.traduccion = 'vestíbulo';
    }
    else if(this.palabra == 'pool'){
      this.traduccion = 'piscina';
    }
    else if(this.palabra == 'housekeeping'){
      this.traduccion = 'servicio de limpieza';
    }
    else if(this.palabra == 'check-in' || this.palabra == 'check in'){
      this.traduccion = 'registro de entrada';
    }
    else if(this.palabra == 'check-out' || this.palabra == 'check out'){
      this.traduccion = 'registro de salida';
    }
    else if(this.palabra == 'key card'){
      this.traduccion = 'tarjeta magnética';
    }
    else if(this.palabra == 'bellboy'){
      this.traduccion = 'botones';
    }
    else if(this.palabra == 'at night'){
      this.traduccion = 'en la noche';
    }
    else if(this.palabra == 'the receptionist'){
      this.traduccion = 'la/el recepcionista';
    }
    else if(this.palabra == 'i want to shower'){
      this.traduccion = 'quiero bañarme';
    }
    else if(this.palabra == 'for the staff'){
      this.traduccion = 'para el personal';
    }
    else if(this.palabra == 'leave'){
      this.traduccion = 'dejar';
    }
    else if(this.palabra == 'access'){
      this.traduccion = 'acceso';
    }
    else if(this.palabra == 'open'){
      this.traduccion = 'abierto';
    }
    else if(this.palabra == 'is there'){
      this.traduccion = 'hay';
    }
    else if(this.palabra == 'school'){
      this.traduccion = 'escuela';
    }
    else if(this.palabra == 'centro comercial'){
      this.traduccion = 'mall';
    }
    else if(this.palabra == 'perfume'){
      this.traduccion = 'perfume';
    }
    else if(this.palabra == 'caja'){
      this.traduccion = 'box / cashier';
    }
    else if(this.palabra == 'comprar'){
      this.traduccion = 'buy';
    }
    else if(this.palabra == 'pagar'){
      this.traduccion = 'pay';
    }
    else if(this.palabra == 'cambiar'){
      this.traduccion = 'change / exchange';
    }
    else if(this.palabra == 'vendedor' || this.palabra == 'vendedora'){
      this.traduccion = 'salesperson';
    }
    else if(this.palabra == 'probador'){
      this.traduccion = 'fitting room';
    }
    else if(this.palabra == 'talla'){
      this.traduccion = 'size';
    }
    else if(this.palabra == 'etiqueta de precio'){
      this.traduccion = 'price tag';
    }
    else if(this.palabra == 'liquidación'){
      this.traduccion = 'clearance';
    }
    else if(this.palabra == 'centro de compras'){
      this.traduccion = 'shopping centre';
    }
    else if(this.palabra == 'plato'){
      this.traduccion = 'plate / dish';
    }
    else if(this.palabra == 'bebida'){
      this.traduccion = 'beverage';
    }
    else if(this.palabra == 'refresco'){
      this.traduccion = 'soda';
    }
    else if(this.palabra == 'silla'){
      this.traduccion = 'chair';
    }
    else if(this.palabra == 'tenedor'){
      this.traduccion = 'fork';
    }
    else if(this.palabra == 'cuchillo'){
      this.traduccion = 'knife';
    }
    else if(this.palabra == 'cuchara'){
      this.traduccion = 'spoon';
    }
    else if(this.palabra == 'vaso'){
      this.traduccion = 'glass';
    }
    else if(this.palabra == 'palillos chinos'){
      this.traduccion = 'chopsticks';
    }
    else if(this.palabra == 'cuenta'){
      this.traduccion = 'account / bill / check';
    }
    else if(this.palabra == 'reserva'){
      this.traduccion = 'reservation';
    }
    else if(this.palabra == 'habitación doble'){
      this.traduccion = 'double room';
    }
    else if(this.palabra == 'habitación con dos camas dobles'){
      this.traduccion = 'twin room';
    }
    else if(this.palabra == 'cama'){
      this.traduccion = 'bed';
    }
    else if(this.palabra == 'almohada'){
      this.traduccion = 'pillow';
    }
    else if(this.palabra == 'baño'){
      this.traduccion = 'bathroom';
    }
    else if(this.palabra == 'restaurante'){
      this.traduccion = 'restaurant';
    }
    else if(this.palabra == 'servicio de limpieza'){
      this.traduccion = 'housekeeping';
    }
    else if(this.palabra == 'registro de entrada'){
      this.traduccion = 'check-in';
    }
    else if(this.palabra == 'registro de salida'){
      this.traduccion = 'check-out';
    }
    else if(this.palabra == 'tarjeta magnética'){
      this.traduccion = 'key card';
    }
    else if(this.palabra == 'botones'){
      this.traduccion = 'buttons / bellboy';
    }
    

   
  }
  */

}