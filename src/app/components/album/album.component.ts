import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {faPlay, faPlus} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArtistasService } from 'src/app/services/artistas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Output() onAgregarCancion = new EventEmitter();

  faPlay = faPlay;
  faPlus = faPlus;
  albumes:any = [];
  artistaActual:string = '';
  idUsuarioSeleccionado:string ='';
  playlists:any = [];
  playlistSeleccionada:any;
  albumSeleccionado:string='';
  cancionSeleccionada:any;

  constructor(
    private modalService: NgbModal, 
    private artistasService:ArtistasService,
    private usuariosService:UsuariosService,
    private sanitizar: DomSanitizer

    
  ) { }

  ngOnInit(): void {
  }
  guardarCancionPlaylist(){
    const data = {
      idUsuario: this.idUsuarioSeleccionado,
      idPlaylist: this.playlistSeleccionada,
      nombreArtista: this.artistaActual,
      cancion: this.cancionSeleccionada,
      nombreAlbum: this.albumSeleccionado
    }
    this.usuariosService.guardarCancionPlaylist(data).subscribe(
      res =>{
        console.log(res);
        if (res.ok == 1) {
          this.modalService.dismissAll();  
          this.onAgregarCancion.emit(this.idUsuarioSeleccionado);
        }
        
      },
      error => {
        console.log(error);
      }
    );
    console.log(data);
  }

  agregarAPlaylist(modal :any , cancion:any, nombreAlbum:any){
    this.usuariosService.obtenerPlaylistsUsuario(this.idUsuarioSeleccionado)
    .subscribe(
      res => {
        this.playlists = res.playlists;
        console.log('lista de playlists', this.playlists);
        console.log('agregar cancion: ', cancion);
        this.cancionSeleccionada = cancion;
        this.albumSeleccionado = nombreAlbum;
        this.modalService.open(
          modal,
          {
            size:'xs',
            centered:false
          }
        );
      },
      error =>{
        console.log(error);
      }
    );   
  }

  obtenerAlbum(artista:any){
    console.log('obtener albumes (compnente albumes)', artista.idArtista);
    this.artistaActual = artista.nombreArtista;
    this.artistasService.obtenerAlbumes(artista.idArtista)
    .subscribe(
      res => {
        this.albumes = res.albumes;
      },
      error => {
        console.log(error);
      }
    )
  }

  obtenerURL(imagen:any){
    return  this.sanitizar.bypassSecurityTrustStyle(`url(../assets/${imagen})`);
  }

}
