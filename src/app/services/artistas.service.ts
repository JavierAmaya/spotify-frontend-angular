import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  constructor( private httpClient: HttpClient) { }

  obtenerArtistas(){

    this.httpClient.get('http://localhost:8888/artistas',{})
    .subscribe(res => {
      //console.log(res);
      return res;
    });
    console.log('Obtener listado de Artistas del Servidor');
  }
}
