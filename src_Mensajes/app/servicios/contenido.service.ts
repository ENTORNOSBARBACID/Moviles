import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IMensaje } from '../mensajes/IMensaje';

@Injectable({
  providedIn: 'root',
})
export class ContenidoService {
  constructor(private http: HttpClient) {}

  public getMensaje(): Observable<IMensaje[]> {
    return this.http.get<IMensaje[]>('/data/Mensajes.json');
  }
}
