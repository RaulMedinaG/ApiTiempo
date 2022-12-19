import { Component, OnInit } from '@angular/core';
import { TiempoService } from '../servicios/tiempo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion-detallada',
  templateUrl: './informacion-detallada.component.html',
  styleUrls: ['./informacion-detallada.component.css']
})
export class InformacionDetalladaComponent {

  constructor(private tiempoService:TiempoService, private activeRouting:ActivatedRoute) { }

  ciudad!:any;

  ngOnInit(): void {
    this.activeRouting.params.subscribe(({name})=>{
        this.tiempoService.getPeticionDos(name).subscribe((bien)=>{
          this.ciudad=bien.list;
          console.log(bien);
        });
    })
  }

  // busquedaDetallada(texto:string){

  //   this.tiempoService.getPeticionDos(texto).subscribe((respuesta:any)=>{
  //     this.tiempoService.error2=false;
  //     this.tiempoService.ciudades2=respuesta;
  //     console.log(respuesta);
  //     },(reject:any)=>{
  //       this.tiempoService.error2=true;
  //       this.tiempoService.ciudades2=null;
  //     });
  // }

  get getCiudades2():any{
    return this.tiempoService.ciudades2;
  }

  get error2():any{
    return this.tiempoService.error2;
  }

  convertirTemp(temperatura:Number | any){
    return(temperatura-273).toFixed(0);
  }

  mayus(palabra:string){
    return(palabra.substring(0,1).toLocaleUpperCase() + palabra.substring(1));
  }

  cogerDia(fecha:string){
    return(fecha.substring(8,10));
  }

  cogerHora(hora:string){
    return(hora.substring(11,16));
  }

  propbabilidadLluvia(numero:number){
    return((numero*100).toFixed(0));
  }

  aniadirFavs(ubicacion:any){
    if(this.tiempoService.getFavoritos().includes(ubicacion)){
      alert("Esta ubicacion ya está en favoritos");
    } else {
      this.tiempoService.favoritos.push(ubicacion);
      localStorage.setItem("Favoritos",JSON.stringify(this.tiempoService.favoritos));
    }
  }

}