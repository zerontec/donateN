import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
//import {FlashMessagesService} from 'angular2-flash-messages';
//, public flashMensaje: FlashMessagesService

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(public authServices: AuthService,
    public router: Router) { }

  ngOnInit() {
  }
  onSubmitAddUser() {

    this.authServices.registerUser(this.email, this.password)
    .then((res) => {
      //this.flashMensaje.show('Usuarios Creado Correctamente', {cssClass: 'alert-success', timeout:4000});
      this.router.navigate(['/heroes']);
      console.log('Bien ');
      console.log(res);

    })
    .catch((err) => {
      //this.flashMensaje.show(err.message, {cssClass: 'alert-danger', timeout:4000});
    });
  }

  //loguearse con google


onClickGoogleLogin() {
  this.authServices.loginGoogle()

  .then((res) => {
  //this.flashMensaje.show('Usuarios logueado Correctamente', {cssClass: 'alert-success', timeout:4000})
  this.router.navigate(['/heroes']);

  }).catch((err) => {
    //this.flashMensaje.show(err.message, {cssClass: 'alert-danger', timeout:4000})
    console.log(err);
    this.router.navigate(['/login']);
  });

  }

  onClickFacebookLogin() {
    this.authServices.loginFacebook()
    .then((res) => {
       //this.flashMensaje.show('Usuarios logueado Correctamente', {cssClass: 'alert-success', timeout:4000})
      this.router.navigate(['/heroes']);
    })
    .catch((err) => {
      //this.flashMensaje.show(err.message, {cssClass: 'alert-danger', timeout:4000})
      console.log(err);
      this.router.navigate(['/login']);
    });
    }




}
