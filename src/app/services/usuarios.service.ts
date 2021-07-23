import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private httpClient : HttpClient) { }

  obtenerUsuarios (): Observable<any>{
    return this.httpClient.get('http://localhost:8888/usuarios',{});
  }

  obtenerPlaylistsUsuario (usuario:any): Observable<any>{
    return this.httpClient.get(`http://localhost:8888/usuarios/${usuario}/playlists`,{});
  }
  
  guardarCancionPlaylist(data:any): Observable<any>{
    console.log('data en servicio usuario', data);
    return this.httpClient.post(
      `http://localhost:8888/usuarios/${data.idUsuario}/playlists/${data.idPlaylist}/canciones`,
      {
        nombreCancion:data.cancion.nombreCancion,
        artista:data.nombreArtista,
        album:data.nombreAlbum
      }
    );
  }

  guardarPlaylist(nombrePlaylist:any, idUsuario:any) :Observable<any>{
    console.log('guardar playlist', {nombrePlaylistGuardar: nombrePlaylist,idUsuarioGuardar: idUsuario});
    return this.httpClient.post(
      `http://localhost:8888/usuarios/${idUsuario}/playlists`,
      {
        tituloPlaylist: nombrePlaylist
      }
    );
  }
}
