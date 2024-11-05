import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';



@NgModule({
  declarations: [InicioComponent, PeliculasComponent,SeriesComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[InicioComponent,PeliculasComponent,SeriesComponent]
})
export class FilmModule { }
