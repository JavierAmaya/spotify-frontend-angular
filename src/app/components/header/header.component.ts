import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //Evento que se desencadena al seleccionar un usuario
  @Output() onSeleccionarUSuario = new EventEmitter();
  //evento al guardar una playlist
  @Output() onGuardarPlaylist = new EventEmitter();

  nombrePlaylist:string="";

  constructor( private modalService:NgbModal, private usuariosService: UsuariosService ) { }
  usuarioSeleccionado:any = "";
  usuarios:any = [];
  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios().subscribe(
      res => {
        this.usuarios = res;
        console.log('usuarios',res);
      },
      error => {
        console.log(error);
      }
    );
  }

  guardarPlaylist(){
    console.log('ejecuto guardar playlist',this.nombrePlaylist);
    this.usuariosService.guardarPlaylist(this.nombrePlaylist,this.usuarioSeleccionado)
    .subscribe(
      res => {
        console.log(res);
        this.modalService.dismissAll();
        if (res.ok === 1) {
          console.log('entro a if');
          this.onGuardarPlaylist.emit(this.usuarioSeleccionado); 
        }
      },
      error => {
        console.log(error);
      }
    );
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

  seleccionarUsuario(){
    console.log(this.usuarioSeleccionado);
    this.onSeleccionarUSuario.emit(this.usuarioSeleccionado);
    this.modalService.dismissAll();
  }
}
