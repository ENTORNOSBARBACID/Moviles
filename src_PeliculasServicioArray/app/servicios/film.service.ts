import { Injectable } from '@angular/core';
import { IAVisual } from '../componentes/IAVisual';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private l_multimedia:IAVisual[]=[];

  constructor() {
    this.l_multimedia = [
      {
        id:1, 
        titulo: 'El Padrino', 
        director: 'Francis Ford Coppola', 
        plataforma:null,
        anio: 1972, 
        imagen: 'elPadrino.jpg', 
        sinopsis:"Don Vito Corleone es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York en los años 40. El hombre tiene cuatro hijos: Connie, Sonny, Fredo y Michael, que no quiere saber nada de los negocios sucios de su padre. Cuando otro capo, Sollozzo, intenta asesinar a Corleone, empieza una cruenta lucha entre los distintos clanes.",
        puntuacion: 9,
        temporadas:0
      },
      {
        id:2, 
        titulo: 'El Señor de los Anillos: La Comunidad del Anillo',
        director: 'Peter Jackson', 
        plataforma: 'Prime',
        anio: 2001, 
        imagen: 'elSeñorDeLosAnillos.jpg', 
        sinopsis:"En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes Anillos del Poder y creó uno con el poder de esclavizar a toda la Tierra Media. Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único con la misión de destruirlo. Acompañado de sus amigos, Frodo emprende un viaje hacia Mordor, el único lugar donde el anillo puede ser destruido. Sin embargo, Sauron ordena la persecución del grupo para recuperar el anillo y acabar con la Tierra Media.", 
        puntuacion: 8,
        temporadas:0 
      },
      {
        id:3, 
        titulo: 'Forrest Gump', 
        director: 'Robert Zemeckis', 
        plataforma:null,
        anio: 1994, 
        imagen: 'forrestGump.jpg', 
        sinopsis:"Sentado en un banco en Savannah, Georgia, Forrest Gump espera al autobús. Mientras éste tarda en llegar, el joven cuenta su vida a las personas que se sientan a esperar con él. Aunque sufre un pequeño retraso mental, esto no le impide hacer cosas maravillosas. Sin entender del todo lo que sucede a su alrededor, Forrest toma partido en los eventos más importantes de la historia de los Estados Unidos.", 
        puntuacion: 8,
      temporadas:0
     },
     {
      id:4, 
      titulo: 'Vikingos',
      director:'Aaaa Aaaaa',
      plataforma:"Netflix", 
      anio:2000,
      imagen: 'vikingos.png', 
      sinopsis:"El programa retrata a Ragnar como un granjero que ha conseguido construir barcos revolucionarios con instrumentos de navegación también revolucionarios. Con ellas puede hacer exitosas incursiones en Inglaterra, alcanzar la fama y convertirse en un rey escandinavo, con la ayuda de su familia y sus guerreros.",
      puntuacion:9,
      temporadas:6
    },
    {
      id:5, 
      titulo: 'Breaking Bad', 
      director: 'Bbbb Bbbb',
      plataforma:"Netflix", 
      anio:2014,
      imagen: 'breaking-bad.jpg', 
      sinopsis:"Un profesor de química con cáncer terminal se asocia con un exalumno suyo para fabricar y vender metanfetamina a fin de que su familia no pase apuros económicos. Ve todo lo que quieras. Breaking Bad: obtuvo 16 premios Emmy, incluyendo cuatro al mejor actor en una serie dramática para Bryan Cranston.",
      puntuacion:10,
      temporadas:5,
    },
    {
      id:6, 
      titulo: 'Peaky Blinders', 
      director:'Cccc Cccc',
      plataforma:"Netflix", 
      anio:2012,
      imagen: 'peaky-blinders.jpg', 
      sinopsis:"Birmingham, 1939. Thomas Shelby es el violento líder de una conocida banda; un jefe del crimen organizado dispuesto a llegar a lo más alto sin importar el precio. Ve todo lo que quieras. Ganó un BAFTA a mejor serie dramática; Cillian Murphy y Charlie Murphy los IFTA a mejor actor y mejor actriz de reparto.",
      puntuacion:8,
      temporadas:5,
    },
    ];

  }
    public getAll():IAVisual[]{
      return this.l_multimedia;   
   }

   public getPeliculas(): IAVisual[]{
    /*let auxiliar:IAVisual[]=[];
    this.l_multimedia.forEach( item=>{if (item.temporadas==0) auxiliar.push(item);  });
    return auxiliar;*/
    
    return this.l_multimedia.filter(item=>item.temporadas==0);
   }

   public getSeries():IAVisual[]{
    return this.l_multimedia.filter(item=>item.temporadas!=0);
   }

   public getPelicula(id:number):IAVisual {
    let pelicula:IAVisual={};   
    this.l_multimedia.forEach(item=>{if (item.id==id) pelicula=item;})
    return pelicula;
    //return this.l_multimedia.find(item=>item.id==id);
   }

   public getSerie(id:number):IAVisual | undefined{
    return this.l_multimedia.find(item=>item.id==id);
   }

}
