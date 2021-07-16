import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify-angular';

  regionVisible: string = "";

  verArtista(idArtista:any){
    this.regionVisible = 'artistas';
    console.log(idArtista);
  }

  verPlaylist(idPlaylist:any){
    this.regionVisible = 'playlist';
    console.log(idPlaylist);
  }
}
