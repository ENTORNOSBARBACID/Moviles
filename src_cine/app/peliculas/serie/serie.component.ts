import { Component } from '@angular/core';
import { Iserie } from '../Iserie';
import { ContenidoService } from '../../servicios/contenido.service';


@Component({
  selector: 'app-serie',
  standalone: false,
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css',
  
})
export class SerieComponent {
cartel:Iserie[]=[]
constructor(private data:ContenidoService){
  this.cartel=this.data.getSeries()
}
}
