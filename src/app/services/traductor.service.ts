import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  urlEN_ES:string = "https://api.mymemory.translated.net/get?langpair=en|es&q=";
  urlES_EN:string = "https://api.mymemory.translated.net/get?langpair=es|en&q=";

  palabra:string = "";

  constructor() { }

  async getTraduccionENES(palabra:string){
    try{
      const resultado = await fetch(`${this.urlEN_ES}=${palabra}`);
      const traduccion = await resultado.json();
      const {responseData} = traduccion;
      const {translatedText} = responseData;
      return translatedText;
    }catch(error){
      console.log(error);
    }
  }

  async getTraduccionESEN(palabra:string){
    try{
      const resultado = await fetch(`${this.urlES_EN}=${palabra}`);
      const traduccion = await resultado.json();
      const {responseData} = traduccion;
      const {translatedText} = responseData;
      return translatedText;
    }catch(error){
      console.log(error);
    }
    
  }


}
