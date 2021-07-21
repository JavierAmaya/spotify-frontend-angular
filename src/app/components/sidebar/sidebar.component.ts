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

  constructor( private artistasService:ArtistasService) { }

  ngOnInit(): void {
    this.artistasService.obtenerArtistas();
  }

  faMusic = faMusic;
  faPlay = faPlay;

  regionVisible: string = "";

  verArtista(idArtista:any){
    //this.regionVisible = 'artistas';
    this.onVerArtista.emit(idArtista);
    console.log(idArtista);
  }

  verPlaylist(idPlaylist:any){
    //this.regionVisible = 'playlist';
    this.onVerPlaylist.emit(idPlaylist);
    console.log(idPlaylist);
  }

}
