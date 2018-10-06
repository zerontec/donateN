import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Route } from '@angular/compiler/src/core';
//import {FlashMessagesService} from 'angular2-flash-messages';
//public flashMesaje: FlashMessagesService


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor( public authServices: AuthService, public router: Router,
    ) { }

  ngOnInit() {
  }

//login con email 

onSubmitLogin() {
  this.authServices.loginEmail(this.email, this.password)
  .then((res) => {
    //this.flashMesaje.show('Usuarios logueado Correctamente', {cssClass: 'alert-success', timeout:4000})
      this.router.navigate(['/panel']);
    }).catch((err) => {
      //this.flashMesaje.show(err.message, {cssClass: 'alert-danger', timeout:4000})
      console.log(err);
      this.router.navigate(['/login']);
    });
  
  
  
  
  }
  
  
  //loguearse con google
  
  onClickGoogleLogin() {
    this.authServices.loginGoogle()
    
    .then((res) => {
    //this.flashMesaje.show('Usuarios logueado Correctamente', {cssClass: 'alert-success', timeout:4000})
    this.router.navigate(['/panel']);
    
  
    }).catch((err) => {
      //this.flashMesaje.show(err.message, {cssClass: 'alert-danger', timeout:4000})
      console.log(err);
      this.router.navigate(['/login']);
    });
  
    }
  
    onClickFacebookLogin(){
      this.authServices.loginFacebook()
      .then((res) => {
         //this.flashMesaje.show('Usuarios logueado Correctamente', {cssClass: 'alert-success', timeout:4000})
        this.router.navigate(['/heroes']);
      })
      
      .catch((err) => {
        //this.flashMesaje.show(err.message, {cssClass: 'alert-danger', timeout:4000})
        console.log(err);
        this.router.navigate(['/login']);
      });
      }


}
