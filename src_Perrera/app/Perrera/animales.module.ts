import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatosComponent } from './gatos/gatos.component';
import { PerrosComponent } from './perros/perros.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [GatosComponent, PerrosComponent, InicioComponent],
  imports: [CommonModule],
  exports: [GatosComponent, PerrosComponent, InicioComponent],
})
export class AnimalesModule {}
