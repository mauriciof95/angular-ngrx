import { Component, OnInit } from '@angular/core';
import { UsuarioServices } from '../services/UsuarioServices';
import { UsuarioModel } from '../models/UsuarioModel';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/app.state';
import * as fromUsuariosActions from '../Store/usuarios/usuarios.actions';
import * as fromUsuariosSelector from '../Store/usuarios/usuarios.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarios);

  ngOnInit(): void {
    this.store.dispatch(fromUsuariosActions.LoadUsuarios())
  }

}
