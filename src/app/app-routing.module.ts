import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {HeroesComponent} from './pages/heroes/heroes.component';
import {DetailsComponent} from './pages/details/details.component';
import {UbicationsComponent} from './pages/ubications/ubications.component';
import {ContacComponent} from './pages/contac/contac.component';
import {DesboComponent } from './pages/desbo/desbo.component';
import {NoFoundPagesComponent} from './pages/no-found-pages/no-found-pages.component';
import { GuardGuard } from './guard/guard.guard';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'detalle/:id', component: DetailsComponent, canActivate: [GuardGuard]},
    {path: 'ubication', component: UbicationsComponent},
    {path: 'contact', component: ContacComponent},
    {path: 'panel', component: DesboComponent, canActivate: [GuardGuard]},
    {path: '**', component: NoFoundPagesComponent}];

@NgModule({
    imports: [
      CommonModule, RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
  })
  export class AppRoutingModule {}