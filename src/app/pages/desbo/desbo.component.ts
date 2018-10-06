import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HeroesService } from '../../services/heroes.service';
import {HeroesData} from '../../interfaces/heroes-interfaces';
import {Router} from '@angular/router';
import { AuthService} from '../../services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-desbo',
  templateUrl: './desbo.component.html',
  styleUrls: ['./desbo.component.css']
})
export class DesboComponent implements OnInit {
  heroes: HeroesData = {

    id: '',
    nombre: '',
    email: '',
    tipoSangre: '',
    ciudad: '',
    telefono: 0 ,
    mensaje:  '',
    fechaPublicacion: '',
    userId: '',
    userNombre: '',

  };

  constructor(private heroesServices: HeroesService,
    private authServices: AuthService,
    private  route: Router) { }

  ngOnInit() {
  }

  onGuardarheroe({value}: {value: HeroesData}){
    value.fechaPublicacion = (new Date()).getTime();
    this.authServices.getAuth().subscribe( user => {
      value.userId = user.uid;
      value.userNombre = user.displayName;
      this.heroesServices.addnewHeroe(value);
  
    });
  
    this.route.navigate(['/heroes']);
  
  
  }



}
