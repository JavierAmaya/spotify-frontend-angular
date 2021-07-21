import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  guardarPlaylist(){
    console.log('ejecuto guardar playlist');
  }
  abrirNuevaPlaylist(modal:any){
    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:false
      }
    );
  }

  abrirCambiarUsuario(modal:any){
    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:false
      }
    );
  }

  seleccionarUsuario(){}



}
