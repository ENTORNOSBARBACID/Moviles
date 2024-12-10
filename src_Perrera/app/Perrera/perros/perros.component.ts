import { Component } from '@angular/core';
import { IAnimal } from '../IAnimal';
import { IPerreria } from '../IAnimal';
import { ContenidoService } from '../../Servicio/contenido.service';

@Component({
  selector: 'app-perros',
  standalone: false,
  templateUrl: './perros.component.html',
  styleUrl: './perros.component.css',
})
export class PerrosComponent {
  lista: IPerreria[] = [];
  constructor(private data: ContenidoService) {
    this.data.getAnimales().subscribe((a) => {
      a.perreria.forEach((p) => {
        this.lista.push(p);
      });
    });
  }
}
