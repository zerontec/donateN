import { Injectable } from '@angular/core';
import {InfoPagina} from '../interfaces/info-pagina';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
info: InfoPagina = {};
cargada = false;
infoHome: any[] = [];


  constructor( private http: HttpClient) {

    this.cargaInfo();
   }


  private cargaInfo(){

    this.http.get('assets/data/data-pagina.json')
  .subscribe ((resp: InfoPagina) => {
  //this.cargada = true
  this.info = resp;
  console.log(resp);
  
  });
   
  
  }
  
}

