import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Tiempo, Weather } from '../interfaces/tiempo';
import { Observable } from 'rxjs';
import { Forecast, List } from '../interfaces/forecast';

@Injectable({
  providedIn: 'root'
})

export class TiempoService {

  constructor(private httpClient:HttpClient) {
    if(localStorage.getItem("Favoritos")){
      this.favoritos = JSON.parse(localStorage.getItem("Favoritos")!);
    }
  }

  ciudades:any;
  ciudades2:any;
  error:boolean=false;
  error2:boolean=false;
  favoritos:List[]=[];

  private apiKey:string = "488a196b88080507e2aafbc3fafa20a3";
  private idioma:string = "es";

  getPeticion(cadena:string):Observable<Weather>{
    return this.httpClient.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${cadena}&lang=${this.idioma}&appid=${this.apiKey}`);
  }

  getPeticionDos(cadena:string):Observable<Forecast>{
    return this.httpClient.get<Forecast>(`https://api.openweathermap.org/data/2.5/forecast?q=${cadena}&lang=${this.idioma}&appid=${this.apiKey}`);
  }

  // informacionDetalladaName(name:string):Observable<Tiempo[]>{
  //   return  this.httpClient.get<Tiempo[]>(this.endpoint+"alpha/"+name);
  // }

  getFavoritos(){
    return this.favoritos;
  }

  addService(ubicacion:any){
    if(this.favoritos.includes(ubicacion)){
      alert("Esta ubicacion ya está en favoritos");
    } else {
      this.favoritos.push(ubicacion);
        localStorage.setItem("Favoritos",JSON.stringify(this.favoritos));
    }
  }

  quitar(ubicacion:any){
    this.favoritos.splice(this.getFavoritos().indexOf(ubicacion),1);
    localStorage.setItem("Favoritos",JSON.stringify(this.favoritos));
  }

  borrarTodos(){
    this.favoritos=[];
    localStorage.setItem("Favoritos",JSON.stringify(this.favoritos));
  }

}