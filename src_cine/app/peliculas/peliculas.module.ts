import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { MenuComponent } from './menu/menu.component';
import { SerieComponent } from './serie/serie.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterLink } from '@angular/router';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [PeliculaComponent, MenuComponent, SerieComponent, InicioComponent, InfoComponent],
  imports: [
    CommonModule, RouterLink
  ],
  exports:[PeliculaComponent, MenuComponent, SerieComponent, InicioComponent, InfoComponent]
})
export class PeliculasModule { }
