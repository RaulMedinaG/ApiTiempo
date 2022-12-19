import { Component, OnInit } from '@angular/core';
import { TiempoService } from '../servicios/tiempo.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  constructor(private tiempoService:TiempoService) { }

  ngOnInit(): void {
  }

  get favoritos():any{
    return JSON.parse(localStorage.getItem("Favoritos")||"");
  }

  // fecha(date:Date):string{
  //   let fecha = new Date(date);
  //   return fecha.toDateString();
  // }

  borrarTodo(){
    if(confirm("¿Estás seguro de que quieres borrarlo todo?")){
      this.tiempoService.borrarTodos();
    }
  }

  quitarFavs(video:any){
    this.tiempoService.quitar(video);
  }

  get getCiudades2():any{
    return this.tiempoService.ciudades2;
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

  propbabilidadLluvia(numero:number){
    return((numero*100).toFixed(0));
  }

}
