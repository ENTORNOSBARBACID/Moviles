import { Component } from '@angular/core';
import { Iheroes } from '../Iheroes';
import { InformacionService } from '../../servicios/informacion.service';

@Component({
  selector: 'app-nombres',
  standalone: false,
  templateUrl: './nombres.component.html',
  styleUrl: './nombres.component.css'
})
export class NombresComponent {
lista:Iheroes[]=[]

constructor(private data:InformacionService){
this.lista=this.data.getInfo()
}
}
