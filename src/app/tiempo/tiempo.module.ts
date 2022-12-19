import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { InformacionDetalladaComponent } from './informacion-detallada/informacion-detallada.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    InformacionDetalladaComponent,
    BusquedaComponent,
    ResultadosComponent,
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TiempoModule { }
