import { Component } from '@angular/core';
import { IAVisual } from '../IAVisual';
import { FilmService } from '../../servicios/film.service';

@Component({
  selector: 'app-inicio',
  standalone: false,  
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  todo:IAVisual[]=[];

  constructor(private data:FilmService){
    this.todo=this.data.getAll();

  }

}
