import { Component, NgModule } from '@angular/core';
import { ContenidoService } from '../servicios/contenido.service';
import { IMensaje } from './IMensaje';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css',
})
export class MensajesComponent {
  mensajes: IMensaje[] = [];
  constructor(private data: ContenidoService) {
    this.data.getMensaje().subscribe((listaMensaje) => {
      listaMensaje.forEach((s) => {
        this.mensajes.push(s);
      });
    });
  }
}
