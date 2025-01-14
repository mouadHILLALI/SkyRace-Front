import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { animation } from '@angular/animations';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component : HomeComponent,
        data : {animation:"*"} ,
    },
    {
        path:'Auth',
        loadChildren : ()=> import("../app/features/auth/auth.module").then(m=>m.AuthModule),
        data : {animation:"*"}
    }
];
``