import { Routes } from '@angular/router';
import { Cv } from './cvs/cv/cv';
import { TodoComponent } from './services/todo/todo';
import { ColorComponent } from './services/color/color';
import { LoginComponent } from './login/login';
export const routes: Routes = [
    {path:'cv',component:Cv},
    {path:'todo',component:TodoComponent},
    {path:'color',component:ColorComponent},
    {path:'login',component:LoginComponent},
    
];
