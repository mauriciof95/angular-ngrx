import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/UsuarioModel';
import { UsuarioServices } from '../services/UsuarioServices';
import { AppState } from '../Store/app.state';
import { Store } from '@ngrx/store';
import * as fromUsuariosActions from '../Store/usuarios/usuarios.actions';
@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = {id: 0, nome: "", idade: 0, perfil: ""};

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addUsuario(){
    if(this.model.id == 0){
      console.log("cadastrando", this.model);
      this.store.dispatch(fromUsuariosActions.CreateUsuario({payload: this.model}))
    }else{
      console.log("atualizando", this.model);
      this.store.dispatch(fromUsuariosActions.UpdateUsuario({payload: this.model}))
    }
  }
}
