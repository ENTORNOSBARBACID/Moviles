import { Injectable } from '@angular/core';
import { Icine } from '../peliculas/Icine';
import { Iserie } from '../peliculas/Iserie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContenidoService {
  listaCine: Icine[] = [];
  listaSerie: Iserie[] = [];

  constructor(private http: HttpClient) {
    this.listaCine = [];
    this.listaSerie = [];
  }

  public getPeliculas(): Icine[] {
    this.http.get<Icine[]>('..Ejemplo1/data/Peliculas.json').subscribe((c) => {
      c.forEach((e) => this.listaCine.push(e));
    });
    return this.listaCine;
  }

  public getSeries(): Iserie[] {
    this.http.get<Iserie[]>('..Ejemplo1/data/Series.json').subscribe((c) => {
      c.forEach((e) => this.listaSerie.push(e));
    });
    return this.listaSerie;
  }
}
