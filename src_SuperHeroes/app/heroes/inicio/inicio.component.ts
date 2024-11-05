import { Component } from '@angular/core';
import { Iheroes } from '../Iheroes';
import { InformacionService } from '../../servicios/informacion.service';
@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  heroes:Iheroes[]=[]

  constructor(private data:InformacionService){
    this.heroes=this.data.getInfo()
  }
}
