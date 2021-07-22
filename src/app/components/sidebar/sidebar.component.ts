import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faMusic, faPlay} from '@fortawesome/free-solid-svg-icons';
import { ArtistasService } from 'src/app/services/artistas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() onVerArtista = new EventEmitter();
  @Output() onVerPlaylist = new EventEmitter();

  artistas:any = [];
  playlists:any = [];

  constructor( private artistasService:ArtistasService , private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.artistasService.obtenerArtistas().subscribe(
      res => {
        this.artistas = res;
        console.log('Artistas', this.artistas);
      },
      error => {
        console.log(error);
      }
    );
  }

  faMusic = faMusic;
  faPlay = faPlay;

  regionVisible: string = "";

  verArtista(artista:any){
    //this.regionVisible = 'artistas';
    this.onVerArtista.emit({idArtista:artista._id, nombreArtista: artista.nombreArtista});
  }

  verPlaylist(playlist:any){
    //this.regionVisible = 'playlist';
    this.onVerPlaylist.emit(playlist);
    console.log(playlist._id);
  }

  obtenerPlaylists(usuario:any){
    console.log('obtener las playlist del usuario:', usuario);
    this.usuariosService.obtenerPlaylistsUsuario(usuario)
    .subscribe(
      res => {
        console.log('Playlists:', res);
        this.playlists = res.playlists;
      },
      error => { console.log(error)}
    );
  }

}
