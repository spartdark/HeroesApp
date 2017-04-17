import { RouterModule, Routes } from '@angular/router';
//importa las rutas que se necesitan
import  {HomeComponent} from "./components/home/home.component";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);


//Es importate el nombre Routes
//ng2-routes ---> generar el archivo rutas
