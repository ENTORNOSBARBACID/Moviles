import { Injectable } from '@angular/core';
import { Iheroes } from '../heroes/Iheroes';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  lista:Iheroes[]=[];

  constructor(){
    this.lista=[
      {
        image:"https://cdn.iconscout.com/icon/free/png-256/free-spiderman-marvel-superheroe-salvador-de-la-tierra-vengador-28702.png?f=webp",
        nombre:"Spider-man",
        historia:"De alguna manera, la picadura de una araña le otorgó al adolescente Peter Parker sus habilidades arácnidas y, en lugar de usarlas para su propio beneficio, decidió ayudar a otros con ellas. El niño, un huérfano que vive con su tía, May Parker, decidió usar una máscara mientras luchaba contra el crimen para no cargarla con sus acciones. Parker, que se hacía llamar Spider-Man y lucía un par de dispositivos lanza-telarañas que había construido, terminó en videos de Internet que atrajeron la atención de Tony Stark. El multimillonario industrial dedujo la identidad secreta de Spider-Man y se acercó a Parker en su casa y la de May en Queens, Nueva York, con una solicitud de ayuda del héroe en una próxima confrontación con el Capitán América y un grupo de otros Vengadores rebeldes y asociados. Al principio, Parker dudó en admitir siquiera su carrera secreta como Spider-Man, pero la emoción de la aventura y la charla de responsabilidad de Stark lo atrajeron y aceptó la invitación, así como un nuevo traje de alta tecnología y lanza-telarañas.",
        com:"https://i.etsystatic.com/43347475/r/il/f80a81/4882398954/il_570xN.4882398954_r0k6.jpg",
        id:1,
      },
      {
        image:"https://cdn.pixabay.com/photo/2018/03/26/19/42/logo-3263787_640.png",
        nombre:"Deadpool",
        historia:"En 2016, Deadpool presentó al público a Wade Wilson (Reynolds) , un ex agente de las Fuerzas Especiales convertido en mercenario. Después de que le diagnosticaran un cáncer terminal, Wade se somete a un procedimiento experimental dirigido por Francis Freeman, también conocido como Ajax (Ed Skrein), destinado a curarlo. En cambio, lo desfigura horriblemente al tiempo que le otorga habilidades curativas sobrehumanas y un retorcido sentido del humor. Al asumir el manto de Deadpool, Wade rastrea a Freeman y lucha contra él en un portaaviones fuera de servicio en el clímax de la película. Con la ayuda de Colossus (Stefan Kapičić) y Negasonic Teenage Warhead (Brianna Hildebrand) de los X-Men, Deadpool finalmente derrota a Ajax y se reúne con su novia Vanessa (Morena Baccarin) para vivir felices para siempre y aceptar su nuevo papel como antihéroe (¡esperemos que nada salga terriblemente mal!).",
        com:"https://i.pinimg.com/736x/b2/c1/05/b2c105a1a2bd41288caa14114349c364.jpg",
        id:2,
      },
      {
        image:"https://cdn.pixabay.com/photo/2018/03/11/09/44/logo-3216310_1280.png",
        nombre:"Capitan america",
        historia:"Steve Rogers nació durante la Depresión y creció, convirtiéndose en un joven débil en una familia pobre. Su padre murió cuando él era un niño; su madre, durante la adolescencia de Steve. Horrorizado ante un noticiario que mostraba a los nazis en Europa, Rogers intentó alistarse en el ejército. En cambio, debido a su fragilidad y su malestar, fue rechazado. Oyendo la súplica fervorosa del chico para que lo aceptaran, el General Chester Phillips del Ejército de USA ofreció a Rogers la oportunidad de formar parte de un experimento especial llamado Operación Renacimiento. Rogers aceptó y fue llevado a un laboratorio secreto en Washington D.C., donde fue presentado al Dr. Abraham Erskine (nombre clave: Profesor Reinstein), el creador de la fórmula del Supersoldado.  Después de semanas de pruebas, a Rogers se le administró el suero del Supersoldado. Dándole parte del compuesto de modo intravenoso y otra parte oralmente, Rogers fue bombardeado por 'vita-rayos', una combinación especial de longitudes de onda exóticas (en 1941) de radiación diseñadas para estabilizar y acelerar el efecto del suero en su cuerpo. Steve Rogers salió de la cámara de los vita-rayos con un cuerpo tan perfecto como puede ser sin dejar de ser humano. Un espía nazi que había observado el experimento asesinó al Dr. Erskine minutos después de su conclusión. Erskine murió sin transcribir totalmente la fórmula del Supersoldado a papel, convirtiendo a Steve Rogers en el único beneficiario de su genio. Entonces, Rogers fue sometido a un programa intensivo de entrenamiento físico y táctico, enseñándole gimnasia, combate cuerpo a cuerpo y estrategia militar. Tres meses después, se le dio su primera misión, detener al agente nazi llamado Cráneo Rojo. Para ayudarle a convertirse en una contrapartida de Cráneo Rojo, a Rogers se le dio el traje rojo, blanco y azul del Capitán América.",
        com:"https://i.pinimg.com/474x/ed/4a/17/ed4a17ce2f2f40ac8460882550f5204b.jpg",
        id:3,
      },
      {
        image:"https://img.icons8.com/?size=512&id=12268&format=png",
        nombre:"Iron-man",
        historia:"Anthony Stark, hijo del industrial Howard Stark, demostró su aptitud mecánica y su genio inventivo a muy temprana edad, metiéndose en un programa de ingeniería eléctrica en el Instituto de Tecnología de Massachusetts a los quince años. Cuando cumplió veintiuno, heredó el negocio de su padre, Industrias Stark, y, en pocos años, lo convirtió en un complejo industrial multimillonario cuyos principales contratos era para proporcionar armamento y municiones al gobierno norteamericano. Enviado a Vietnam para supervisar un campo de pruebas de una de sus armas transistorizadas, Stark cayó en una trampa para bobos y obtuvo un pieza de metralla en su pecho. En una semana, se le comunicó que se abriría camino hacia el corazón y que él moriría. Tomado cautivo por un líder comunista llamado Wong-Chu, él ofreció un trato a Stark; si construía un arma poderosa al comunista, le operarían para salvar su vida. Stark aceptó, esperando ganar tiempo y acceso a las herramientas. Encerrado en un pequeño laboratorio con otro prisionero, el renombrado físico oriental Profesor Ho Yinsen, Stark diseñó y construyó, con la ayuda de Yinsen, un uniforme transistorizado de armadura de hierro con potencia eléctrica, equipado con armamento ofensivo pesado. La armadura contenía un aparato similar a un marcapasos que permitía al corazón de Stark seguir latiendo después de que la metralla entrase en él. Poniéndose el uniforme, Stark lo conectó a su fuente de poder, un generador eléctrico. Su captor, Wong-Chu, sintió que algo iba mal y fue a investigar. El Profesor Yinsen se sacrificó para dar a Stark el tiempo que necesitaba para cargar completamente su armadura. Como Iron Man el Hombre de Hierro (Yo lo llamo Iron Man, pero Hombre de Hierro es sinónimo en castellano), Stark vengó la muerte de Yinsen y esparció las tropas de guerrilla de Wong-Chu. Stark escapó de la jungla con la ayuda del piloto americano de helicópteros Teniente James Rhodes, y volvió a América vestido con su nueva armadura.",
        com:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOa1SzENwobp5_1-Z6R-l8zwWuKlCSW3esWw&s",
        id:4,
      },  {
        image:"https://img.icons8.com/?size=100&id=78456&format=png&color=000000",
        nombre:"Groot",
        historia:"Groot es un Flora colossus que se convirtió en un criminal al igual que su amigo Rocket. Juntos, viajaron ganando recompensas hasta que conocieron a los Guardianes de la Galaxia, con quienes se alió para detener a Ronan de destruir Xandar. Sin embargo, durante la batalla, Groot sacrificó su propia vida para salvar a sus nuevos amigos, pero una parte de su cuerpo fue plantada por Rocket, haciéndolo renacer. A medida que un nuevo Groot empezaba a crecer lentamente, desarrolló un vínculo cercano con los Guardianes y viajó con ellos para tener aventuras. Pronto, los Guardianes de la Galaxia fueron contratados por los Soberanos para derrotar a un Abilisko, no obstante, luego fueron atacados por los mismos Soberanos debido a que Rocket los traicionó, hasta que fueron rescatados por Ego. Luego, Groot, Rocket y Yondu Udonta fueron capturados por los Devastadores de Taserface, sin embargo, Groot consiguió liberar a sus aliados para vencer a Taserface y se unió al equipo una vez más para ayudarlos a destruir a Ego de conquistar el universo. Más adelante, Groot vivió varias aventuras en solitario hasta que entró en la adolescencia y se volvió adicto al videojuego Defender.",
        com:"https://i.pinimg.com/originals/cb/ea/89/cbea89c79baa3db20c3dcf54931cb07f.png",
        id:5,
      },
      {
        image:"https://img.icons8.com/?size=100&id=118482&format=png&color=000000",
        nombre:"Thanos",
        historia:"Thanos fue un señor de la guerra y genocida de Titán, cuyo objetivo principal era traer estabilidad al universo, ya que creía que su enorme población inevitablemente agotaría todo el suministro de recursos disponibles y eso condenaría a las especies a morir. Para cumplir dicha misión, Thanos se dedicó a buscar las Gemas del Infinito, ya que sus capacidades le ayudarían a matar directa y aleatoriamente a la mitad de la vida en el universo. Esto lo llevó a forjar convenios con los villanos Loki y Ronan en sus respectivas campañas contra la Tierra y Xandar, pero terminó perdiendo gran parte de sus recursos y la lealtad de sus hijas Gamora y Nebula. Finalmente, Thanos perdió la paciencia con sus subordinados y optó por buscar las Gemas personalmente, iniciando la Guerra del Infinito. En su viaje, tanto él como su Orden Negra invadieron Nidavellir, Xandar, la Tierra y Knowhere e incluso asesinaron a Loki, junto con la mitad de los sobrevivientes Asgardianos, y hasta a su hija Gamora para obtener la Gema del Alma en Vormir. Esto hizo que los Vengadores, los Maestros de las Artes Místicas, los Guardianes de la Galaxia y la nación de Wakanda le hicieran frente, pero a pesar de sus esfuerzos combinados y la ira de Thor, Thanos finalmente triunfó sobre sus enemigos una vez que completó el Guantelete del Infinito y llevó a cabo el Chasquido. Él después se trasladó a Titán II para vivir en paz y destruyó las Gemas del Infinito. Finalmente, Thanos fue emboscado por los Vengadores sobrevivientes, solo para ser decapitado por Thor.",
        com:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/333eb203-1269-4a75-923b-bc8266d2a767/d6dtomy-3eb622d3-4606-40c1-9809-d6939c5609c7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMzM2ViMjAzLTEyNjktNGE3NS05MjNiLWJjODI2NmQyYTc2N1wvZDZkdG9teS0zZWI2MjJkMy00NjA2LTQwYzEtOTgwOS1kNjkzOWM1NjA5YzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._rg_TwMaYnRDgDX7fEIk4nPyyCI-U99oTAlE3OTHzWg",
        id:6,
      },
      {
        image:"https://img.icons8.com/?size=100&id=78457&format=png&color=000000",
        nombre:"Wolverine",
        historia:"Wolverine (llamado Lobezno en España) y cuyo nombre real es James Howlett; es uno de los personaje más importantes e influyentes del universo cinematográfico X-Men. Wolverine fue el tercer mutante conocido en nacer, después de su medio hermano Dientes de Sable y siendo el primero Apocalipsis. Logan es el líder de los X-Men que perdió su memoria por culpa del programa Arma X y desde entonces ha tratado de recuperarla integrándose al grupo de los X-Men dirigido por el Profesor Charles Xavier para proteger a la humanidad de los mutantes malignos.",
        com:"https://i.pinimg.com/736x/39/d7/d9/39d7d92afe7480bd5ac6a9b6ff337b01.jpg",
        id:7,
      },
      {
        image:"https://img.icons8.com/?size=100&id=5g7tbaEuqwcx&format=png&color=000000",
        nombre:"Thor",
        historia:"Thor es el hijo de Odín, señor de los dioses de Asgard, y de Jord, que también es conocida como Gea, la más anciana diosa de la Tierra. Odín quería ser padre de un hijo cuyo poder derivase de la Tierra y de Asgard, así que se apareó con Jord. Odín creó una cueva en Noruega donde Jord dio a luz a Thor. Meses después de que el niño Thor fuese destetado, Odín se lo llevó a Asgard para criarlo. Desde entonces, la esposa de Odín, la diosa Frigga, actuó como la madre de Thor. No fue hasta tiempos recientes que Thor descubrió que su madre era Jord.Un ojo que Odín se cortó una vez creció hasta alcanzar gran tamaño, adquirió sentencia e informó a Thor de que otro Thor había existido antes del nacimiento del Thor actual. Este Thor previo también era hijo de Odín, pero tenía el cabello rojo, que no rubio. Se dice que el Thor anterior mató a la Serpiente de Midgard, y que había muerto por el veneno del agonizante monstruo, en el Ragnarok, la destrucción de la versión previa de Asgard. El propio Odín fue asesinado, pero apareció un nuevo Odín en el lugar de varios dioses que sobrevivieron al Ragnarok, y fue este nuevo Odín quien llegó a ser padre de la versión actual de Thor.Posiblemente, estas versiones anteriores de Odín y Thor era encarnaciones físicas más jóvenes de los actuales dioses. En cambio, este relato del origen de Thor contado por el ojo de Odín bien podría ser totalmente falso.El joven Thor fue criado con Loki, que había sido adoptado por Odín después de que el padre de Loki, el gigante del hielo Laufey, hubiese muerto en combate. Desde su niñez, Loki estaba celoso de Thor, y su odio creció al pasar los años hasta un deseo de destruirle. Esta enemistad persiste.Cuando Thor tenía ocho años, Odín lo mandó a Nidalvellir, la tierra de los enanos, para ordenar a los enanos Brokk y Eitri que creasen tres tesoros para el gobernante de Asgard. Entre los tres tesoros que Brokk y Eitri crearon estaba el martillo de uru Mjolnir (aunque Loki saboteó la creación del martillo para que su mango fuese demasiado corto). Odín otorgó varios encantamientos al martillo, incluyendo uno que hacía imposible levantarlo a cualquiera salvo a quien fuera realmente digno de él. Odín entonces declaró que estaba reservando el uso de Mjolnir para Thor, que lo recibiría el día en que sus grandes actos de valor desinteresado le probasen ser digno de él.",
        com:"https://i.pinimg.com/564x/31/27/26/312726460b465d2fa4072c4bec84e644.jpg",
        id:8,
      }
    ]
  }

  public getInfo(): Iheroes[]{
    return this.lista;
  }

}
