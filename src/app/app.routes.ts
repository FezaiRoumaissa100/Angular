import { Routes } from '@angular/router';
import { Cv } from './cvs/cv/cv';
import { TodoComponent } from './services/todo/todo';
import { ColorComponent } from './services/color/color';
import { DetailComponent } from './cvs/detail/detail.component';
import { LoginComponent } from './login/login';
export const routes: Routes = [
    {path: '', redirectTo: 'cv', pathMatch: 'full' },
    {path:'cv',component:Cv},
    {path:'cv/:id',component:DetailComponent},
    {path:'todo',component:TodoComponent},
    {path:'color',component:ColorComponent},
    {path:'login',component:LoginComponent},
    
];
