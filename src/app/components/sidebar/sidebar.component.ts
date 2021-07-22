import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faMusic, faPlay} from '@fortawesome/free-solid-svg-icons';
import { ArtistasService } from 'src/app/services/artistas.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() onVerArtista = new EventEmitter();
  @Output() onVerPlaylist = new EventEmitter();

  artistas:any = [];

  constructor( private artistasService:ArtistasService) { }

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
    this.onVerArtista.emit(artista._id);
  }

  verPlaylist(idPlaylist:any){
    //this.regionVisible = 'playlist';
    this.onVerPlaylist.emit(idPlaylist);
    console.log(idPlaylist);
  }

}
