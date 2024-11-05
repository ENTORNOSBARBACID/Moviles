import { Routes } from '@angular/router';
import { InicioComponent } from './heroes/inicio/inicio.component';
import { NombresComponent } from './heroes/nombres/nombres.component';
import { DetallesComponent } from './heroes/detalles/detalles.component';

export const routes: Routes = [

    {path:'nombres', component:NombresComponent},
    {path:'detalles/:nombre', component:DetallesComponent},
    {path:'',component:InicioComponent}
];
