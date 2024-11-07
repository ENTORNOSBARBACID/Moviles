import { Component, OnInit } from '@angular/core';
import { Icine } from '../Icine';
import { Iserie } from '../Iserie';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContenidoService } from '../../servicios/contenido.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],  // Cambié styleUrl por styleUrls, que es lo correcto
})
export class InfoComponent implements OnInit {
  serie: Iserie[] = [];
  cine: Icine[] = [];
  id: string="";

  constructor(private router: ActivatedRoute, private data: ContenidoService) {   // Un solo constructor que recibe 'ActivatedRoute'

    this.cine=this.data.getPeliculas()
    this.serie=this.data.getSeries()
    
  }

  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id") || '';  // Obtenemos el id de la URL, si no está, se asigna un string vacío
    });
  }
}

