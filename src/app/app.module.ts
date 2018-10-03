import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContacComponent } from './pages/contac/contac.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UbicationsComponent } from './pages/ubications/ubications.component';
import { NoFoundPagesComponent } from './pages/no-found-pages/no-found-pages.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DesboComponent } from './pages/desbo/desbo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContacComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent,
    UbicationsComponent,
    NoFoundPagesComponent,
    HeroesComponent,
    DesboComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
