import { Component, OnInit } from '@angular/core';
import { Iheroes } from '../Iheroes';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InformacionService } from '../../servicios/informacion.service';

@Component({
  selector: 'app-detalles',
  standalone: false,
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit{
  lista:Iheroes[]=[];
  nombre:string="";
  constructor(private router: ActivatedRoute, private data:InformacionService){
    this.lista=this.data.getInfo()
  }
  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.nombre = params.get("nombre") || '';  // Obtenemos el id de la URL, si no está, se asigna un string vacío
    });
  }
}
