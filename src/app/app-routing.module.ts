import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './tiempo/favoritos/favoritos.component';
import { InformacionDetalladaComponent } from './tiempo/informacion-detallada/informacion-detallada.component';
import { PaginaPrincipalComponent } from './tiempo/pagina-principal/pagina-principal.component';

const routes: Routes = [
  {
    path:"",
    component:PaginaPrincipalComponent
  },{
    path:"informacionDetallada",
    component:InformacionDetalladaComponent
  },{
    path: 'favoritos',
    component: FavoritosComponent
  },{
    path:"informacionDetallada/:name",
    component:InformacionDetalladaComponent
  },{
    path:"**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
