import { Routes } from '@angular/router';
import { SerieComponent } from './peliculas/serie/serie.component';
import { PeliculaComponent } from './peliculas/pelicula/pelicula.component';
import { InicioComponent } from './peliculas/inicio/inicio.component';
import { InfoComponent } from './peliculas/info/info.component';

export const routes: Routes = [
    
    {path:'serie',component:SerieComponent},
    {path:'peliculas',component:PeliculaComponent},
    {path:'informacion/:id',component:InfoComponent},
    {path:'',component:InicioComponent},
];
