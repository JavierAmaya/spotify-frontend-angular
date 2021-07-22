import { Component, ViewChild } from '@angular/core';
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

  regionVisible: string = "";

  constructor (){}

  verArtista(idArtista:any){
    this.regionVisible = 'artistas';
    console.log(idArtista);
  }

  verPlaylist(playlist:any){
    this.playlistComponent.verPlaylist(playlist);
    this.regionVisible = 'playlist';
    console.log(playlist);
  }

  seleccionarUsuario(usuario:any){
    console.log('usuarioSeleccionado (AppComponent)',usuario);
    this.sidebarComponent.obtenerPlaylists(usuario);
  }
}
