import { Component, OnInit } from '@angular/core';
import { Icine } from '../Icine';
import { ContenidoService } from '../../servicios/contenido.service';

@Component({
  selector: 'app-pelicula',
  standalone: false,
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css',
})
export class PeliculaComponent {
  lista: Icine[] = [];

  constructor(private data: ContenidoService) {
    this.data.getPeliculas().subscribe((listaPelicula) => {
      listaPelicula.forEach((s) => {
        this.lista.push(s);
      });
    });
  }
}
