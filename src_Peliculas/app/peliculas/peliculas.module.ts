import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './pelicula/pelicula.component';



@NgModule({
  declarations: [PeliculaComponent],
  imports: [
    CommonModule
  ],
  exports:[PeliculaComponent]
})
export class PeliculasModule { }
