import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faMusic, faPlay} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() onVerArtista = new EventEmitter();
  @Output() onVerPlaylist = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
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
