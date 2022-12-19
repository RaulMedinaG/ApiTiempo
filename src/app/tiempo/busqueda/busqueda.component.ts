import { Component,ElementRef, ViewChild } from '@angular/core';
import { TiempoService } from '../servicios/tiempo.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('texto') texto!:ElementRef<HTMLInputElement>;

  constructor(private tiempoService:TiempoService) { }

  busqueda(texto:string){

    this.tiempoService.getPeticion(texto).subscribe((respuesta:any)=>{
      this.tiempoService.error=false;
      this.tiempoService.ciudades=respuesta;
      console.log(respuesta);
      },(reject:any)=>{
        this.tiempoService.error=true;
        this.tiempoService.ciudades=null;
      });
  }

}