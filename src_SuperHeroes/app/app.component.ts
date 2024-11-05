import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesModule } from './heroes/heroes.module';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesModule, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo_1';
}