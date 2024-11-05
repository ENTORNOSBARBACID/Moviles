import { Component } from '@angular/core';
import { Icine } from '../Icine'

@Component({
  selector: 'app-pelicula',
  standalone: false,
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {

lista:Icine[]=[];

constructor(){
this.lista=[
{
  titulo:"Juegos Troneros",
  director:"Alberto Barbacell",
  ano:2005,
},
{
  titulo:"Lluvia albondiguera",
  director:"Sergio Luis Me La Come",
  ano:2001,
},
{
  titulo:"El ser mas bobolotron",
  director:"Eduardo Pinilla",
  ano:2005,
}
]
}
}
