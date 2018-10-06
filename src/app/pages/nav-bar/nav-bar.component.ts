import { Component, OnInit } from '@angular/core';
import {InfoPaginaService} from '../../services/info-pagina.service';
import {AuthService} from '../../services/auth.service';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isLogin: boolean;
  public nombreuser: string;
  public emailUser: string;
  public fotoUser: string;


  constructor(public _servicio: InfoPaginaService, public authServices: AuthService) { }

  ngOnInit() {
this.authServices.getAuth().subscribe( auth => {
  if(auth){
this.isLogin =true;

this.nombreuser = auth.displayName;
this.emailUser = auth.email;
this.fotoUser = auth.photoURL;
  } else {
this.isLogin = false;

  }
});
  }
onClickLogout(){

  this.authServices.logout();



  }

}
