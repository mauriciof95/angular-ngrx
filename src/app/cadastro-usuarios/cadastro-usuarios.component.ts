import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/UsuarioModel';
import { UsuarioServices } from '../services/UsuarioServices';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = {id: 0, nome: "", idade: 0, perfil: ""};

  constructor(private usuarioService: UsuarioServices) { }

  ngOnInit(): void {
  }

  addUsuario(){
    if(this.model.id == 0){
      console.log("cadastrando", this.model);
      this.usuarioService.addUsuario(this.model).subscribe();
    }else{

    }
  }
}
