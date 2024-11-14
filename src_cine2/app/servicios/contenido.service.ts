import { Injectable } from '@angular/core';
import { Icine } from '../peliculas/Icine';
import { Iserie } from '../peliculas/Iserie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ContenidoService {
  constructor(private http: HttpClient) {}

  public getPeliculas(): Observable<Icine[]> {
    return this.http.get<Icine[]>('/data/Peliculas.json');
  }

  public getSeries(): Observable<Iserie[]> {
    return this.http.get<Iserie[]>('/data/Series.json');
  }
}
