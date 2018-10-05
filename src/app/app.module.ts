import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modulos

import {AngularFireModule} from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

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

import { FooterComponent } from './pages/footer/footer.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { SliderComponent } from './pages/slider/slider.component';
import { environment } from '../environments/environment';

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
    DesboComponent,
    FooterComponent,
    NavBarComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
