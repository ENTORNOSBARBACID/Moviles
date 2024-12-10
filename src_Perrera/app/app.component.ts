import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalesModule } from './Perrera/animales.module';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimalesModule, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Ejemplo_1';
}
