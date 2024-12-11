import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'cartelera',
        loadComponent: () => import('./components/cartelera/cartelera.component').then(m => m.CarteleraComponent)
    },
    {
        path: 'registro',
        loadComponent: () => import('./components/registro/registro.component').then(m => m.RegistroComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {   path: 'formulario',
        loadComponent: () => import('./components/formulario/formulario.component').then(m => m.FormularioComponent)
    },
    {
        path: 'ficha',
        loadComponent: () => import('./components/ficha/ficha.component').then(m => m.FichaComponent)
    },
    {
        path: 'seleccionsillas',
        loadComponent: () => import('./components/seleccionsillas/seleccionsillas.component').then(m => m.SeleccionsillasComponent)
    }

];
