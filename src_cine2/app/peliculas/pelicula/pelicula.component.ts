import { Component, OnInit } from '@angular/core';
import { Icine } from '../Icine';
import { ContenidoService } from '../../servicios/contenido.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pelicula',
  standalone: false,
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css',
})
export class PeliculaComponent {
  lista: Icine[] = [];

  constructor(private data: ContenidoService) {
    this.lista = this.data.getPeliculas();
  }
}
