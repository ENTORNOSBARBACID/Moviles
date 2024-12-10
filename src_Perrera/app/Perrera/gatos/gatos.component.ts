import { Component } from '@angular/core';
import { IAnimal } from '../IAnimal';
import { IPerreria } from '../IAnimal';
import { ContenidoService } from '../../Servicio/contenido.service';

@Component({
  selector: 'app-gatos',
  standalone: false,
  templateUrl: './gatos.component.html',
  styleUrl: './gatos.component.css',
})
export class GatosComponent {
  lista: IPerreria[] = [];
  constructor(private data: ContenidoService) {
    this.data.getAnimales().subscribe((a) => {
      a.perreria.forEach((p) => {
        this.lista.push(p);
      });
    });
  }
}
