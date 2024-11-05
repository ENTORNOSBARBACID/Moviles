import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NombresComponent } from './nombres/nombres.component';
import { RouterLink, RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [InicioComponent, NombresComponent, DetallesComponent],
  imports: [
    CommonModule, RouterLink, RouterModule
  ],
  exports: [InicioComponent, NombresComponent, DetallesComponent],
})
export class HeroesModule {}
