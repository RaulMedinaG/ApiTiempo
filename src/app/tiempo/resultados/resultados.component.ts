import { Component } from '@angular/core';
import { TiempoService } from '../servicios/tiempo.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  constructor(private tiempoService:TiempoService) { }


  get error():any{
    return this.tiempoService.error;
  }

  get getCiudades():any{
    return this.tiempoService.ciudades;
  }

  convertirTemp(temperatura:Number | any){
    return(temperatura-273).toFixed(2);
  }

  mayus(palabra:string){
    return(palabra.substring(0,1).toLocaleUpperCase() + palabra.substring(1));
  }

}
