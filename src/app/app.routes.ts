import { Routes } from "@angular/router/src/config";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";


export const ROUTES: Routes = [
    {path: '', component: HomeComponent}, // vazio => home
    {path: 'about', component: AboutComponent} 

]