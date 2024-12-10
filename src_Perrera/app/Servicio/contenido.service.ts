import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IAnimal } from '../Perrera/IAnimal';

@Injectable({
  providedIn: 'root',
})
export class ContenidoService {
  constructor(private http: HttpClient) {}

  public getAnimales(): Observable<IAnimal> {
    return this.http.get<IAnimal>('data/Perrera.json');
  }
}
