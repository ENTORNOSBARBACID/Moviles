import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { PerrosComponent } from './Perrera/perros/perros.component';
import { GatosComponent } from './Perrera/gatos/gatos.component';
import { InicioComponent } from './Perrera/inicio/inicio.component';

export const routes: Routes = [
  { path: 'perros', component: PerrosComponent },
  { path: 'gatos', component: GatosComponent },
  { path: '', component: InicioComponent },
];
