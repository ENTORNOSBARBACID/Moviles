import { Component, OnInit } from '@angular/core';
import { Icine } from '../Icine';
import { Iserie } from '../Iserie';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],  // Cambié styleUrl por styleUrls, que es lo correcto
})
export class InfoComponent implements OnInit {
  serie: Iserie[] = [];
  cine: Icine[] = [];
  id: string="";

  constructor(private router: ActivatedRoute) {   // Un solo constructor que recibe 'ActivatedRoute'

    // Inicialización de series
    this.serie = [
      {
        image: "https://static.posters.cz/image/750/posters/rick-morty-portal-i40514.jpg",
        titulo: "Pedro y Samuel",
        temporadas: 7,
        sinopsis: "asdasdas",
        plataforma: "HBO max",
        id: "1",
      },
      {
        image: "https://m.media-amazon.com/images/I/81eY+Q2pOGL.jpg",
        titulo: "Cosas raras",
        temporadas: 4,
        sinopsis: "asdasdas",
        plataforma: "Netflix",
        id: "2"
      },
      {
        image: "https://m.media-amazon.com/images/I/81xETRmcFwL._AC_UF894,1000_QL80_.jpg",
        titulo: "Suerte",
        temporadas: 1,
        sinopsis: "asdasdas",
        plataforma: "Disney +",
        id: "3"
      },
      {
        image: "https://www.formulatv.com/images/series/posters/000/33/dest_1.jpg",
        titulo: "La familia de Pinilla",
        temporadas: 32,
        sinopsis: "asdasdas",
        plataforma: "Disney +",
        id: "4"
      },
      {
        image: "https://es.web.img2.acsta.net/pictures/20/03/19/11/40/1818277.jpg",
        titulo: "Enzo",
        temporadas: 7,
        sinopsis: "asdasdas",
        plataforma: "Netflix",
        id: "5"
      },
      {
        image: "https://pics.filmaffinity.com/african_folktales_reimagined-850256368-mmed.jpg",
        titulo: "Juegos del hambre",
        temporadas: 2,
        sinopsis: "asdasdas",
        plataforma: "Netflix",
        id: "6"
      },
      {
        image: "https://m.media-amazon.com/images/M/MV5BMWU2ZWE4NTktMTM4Ni00OTVkLTk3ZDAtMTc2YjY1NmZmYTlkXkEyXkFqcGc@._V1_.jpg",
        titulo: "Carcel contra mujeriegos",
        temporadas: 3,
        sinopsis: "asdasdas",
        plataforma: "Netflix",
        id: "7"
      },
      {
        image: "https://es.web.img2.acsta.net/pictures/20/12/18/12/22/3538912.jpg",
        titulo: "Un sueño humedo de Pinilla",
        temporadas: 13,
        sinopsis: "asdasdas",
        plataforma: "MiTele+",
        id: "8"
      },
    ];

    // Inicialización de películas (cine)
    this.cine = [
      {
        titulo: "Juegos Troneros",
        director: "Alberto Barbacell",
        ano: 2005,
        image: "https://pics.filmaffinity.com/game_of_thrones-293142110-mmed.jpg",
        sinopsis: "Guerra entre familias, engaños, muerte.",
        puntuacion: 9.9,
        id: "9"
      },
      {
        titulo: "Lluvia albondiguera",
        director: "Sergio Luis Me La Come",
        ano: 2001,
        image: "https://m.media-amazon.com/images/I/712KhZLeslL._AC_UF894,1000_QL80_.jpg",
        sinopsis: "Un cientifico loco diseña una maquila que hace llover comida, y les da vida",
        puntuacion: 6.7,
        id: "10"
      },
      {
        titulo: "El ser mas bobolotron",
        director: "Eduardo Pinilla",
        ano: 2005,
        image: "https://musicart.xboxlive.com/7/be545100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        sinopsis: "Eduardo Antonio Pinilla es una persona muy especial, a su modo",
        puntuacion: 8.5,
        id: "11"
      },
      {
        titulo: "Superespeciales",
        director: "Enzo Ruiz",
        ano: 2005,
        image: "https://es.web.img2.acsta.net/pictures/19/03/26/17/22/0896830.jpg",
        sinopsis: "Eduardo Antonio Pinilla es una persona muy especial, a su modo",
        puntuacion: 8.5,
        id: "12"
      },
      {
        titulo: "Emo girl en busca de aventuras",
        director: "Samuel Linux",
        ano: 2005,
        image: "https://es.web.img2.acsta.net/pictures/19/04/17/09/37/4990262.jpg",
        sinopsis: "Eduardo Antonio Pinilla es una persona muy especial, a su modo",
        puntuacion: 8.5,
        id: "13"
      },
      {
        titulo: "Fumo desde pequeño",
        director: "Alex Brawl",
        ano: 2005,
        image: "https://es.web.img3.acsta.net/pictures/18/12/10/17/35/1733722.jpg",
        sinopsis: "Eduardo Antonio Pinilla es una persona muy especial, a su modo",
        puntuacion: 8.5,
        id: "14"
      },
      {
        titulo: "El descendiente de einstein",
        director: "Jared Filipinos",
        ano: 2005,
        image: "https://pics.filmaffinity.com/El_editor_de_libros-246950844-large.jpg",
        sinopsis: "Eduardo Antonio Pinilla es una persona muy especial, a su modo",
        puntuacion: 8.5,
        id: "15"
      },
      {
        titulo: "A dos metros del cielo",
        director: "Pedriscoleras",
        ano: 2005,
        image: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/1996/5/w1280/uWRPzmCMalOW8DuYsysn0c486jz.jpg",
        sinopsis: "Eduardo Antonio Pinilla es una persona muy especial, a su modo",
        puntuacion: 8.5,
        id: "16"
      }
    ];
  }

  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id") || '';  // Obtenemos el id de la URL, si no está, se asigna un string vacío
    });
  }
}

