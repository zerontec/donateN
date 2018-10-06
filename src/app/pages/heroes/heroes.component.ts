import { Component, OnInit } from '@angular/core';
//import {AuthService} from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService} from '../../services/heroes.service';
import { HeroesData } from '../../interfaces/heroes-interfaces';
import {observable} from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroesData[];

  idUsuarioLogeado: string;

  constructor(/*private auth: AuthService,*/  private heroeServicio: HeroesService) { }

  ngOnInit() {
    this.todosHeroes();
  }

  todosHeroes(){
    this.heroeServicio.getAllHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
