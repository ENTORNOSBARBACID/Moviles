import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeliculasModule } from './peliculas/peliculas.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PeliculasModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo1';
}
