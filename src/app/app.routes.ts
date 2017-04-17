import { RouterModule, Routes } from '@angular/router';
//importa las rutas que se necesitan
import  {HomeComponent} from "./components/home/home.component";
import {HeroesComponent} from './components/heroes/heroes.component';
import {AboutComponent} from './components/about/about.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


//Es importate el nombre Routes
//ng2-routes ---> generar el archivo rutas
