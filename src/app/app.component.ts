import { Component, ViewChild } from '@angular/core';
import { AlbumComponent } from './components/album/album.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify-angular';


  @ViewChild('sidebar') sidebarComponent!:SidebarComponent;
  @ViewChild('playlistComponent') playlistComponent!:PlaylistComponent;
  @ViewChild('album') albumComponent!:AlbumComponent;


  regionVisible: string = "";

  constructor (){}

  verArtista(artista:any){
    this.regionVisible = 'artistas';
    this.albumComponent.obtenerAlbum(artista);
  }

  verPlaylist(playlist:any){
    this.playlistComponent.verPlaylist(playlist);
    this.regionVisible = 'playlist';
    console.log(playlist);
  }

  seleccionarUsuario(usuario:any){
    console.log('usuarioSeleccionado (AppComponent)',usuario);
    this.sidebarComponent.obtenerPlaylists(usuario);
    this.albumComponent.idUsuarioSeleccionado = usuario;
  }

  recargarPlaylists(idUsuario:any){
    console.log('ejecuto recargar playlits', idUsuario)
    this.sidebarComponent.obtenerPlaylists(idUsuario);
  }

}
