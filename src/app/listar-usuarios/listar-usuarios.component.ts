import { Component, OnInit } from '@angular/core';
import { UsuarioServices } from '../services/UsuarioServices';
import { UsuarioModel } from '../models/UsuarioModel';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {

  constructor(private usuarioServices: UsuarioServices) { }

  listaUsuarios: UsuarioModel[] = [];

  ngOnInit(): void {
    this.usuarioServices.getUsuarios().subscribe((usuarios: UsuarioModel[]) => {
      this.listaUsuarios = usuarios;
    });
  }

}
