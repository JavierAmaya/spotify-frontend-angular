import { Component, OnInit } from '@angular/core';
import {faPlay, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  faPlay = faPlay;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
