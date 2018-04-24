import { RouterModule, Routes } from '@angular/router';
import {LoginComponent } from './components/login/login.component';
import {ErrorComponent} from './components/error/error.component';
import { AlumnoComponent } from './components/alumno/alumno.component';

const ROUTES: Routes = [    
    { path: 'login', component: LoginComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'alumno', component: AlumnoComponent },
    { path: '**', pathMatch:'full', redirectTo: 'login' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);