import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UsuarioModel } from "src/app/models/UsuarioModel";
import * as fromUsuariosActions from "./usuarios.actions";

export interface UsuariosState{
  usuarios: UsuarioModel[];
  usuario: UsuarioModel | null;
  error: string | '';
}

export const initialState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: ''
}

const _usuarioReducer = createReducer(
  initialState,
  on(fromUsuariosActions.LoadUsuariosSuccess, (state, { payload }) => ({...state, usuarios: payload, error: ''})),
  on(fromUsuariosActions.LoadUsuariosFail, (state, { error }) => ({...state, error: error})),

  on(fromUsuariosActions.LoadUsuarioSuccess, (state, { payload }) => ({...state, usuario: payload, error: ''})),
  on(fromUsuariosActions.LoadUsuarioFail, (state, { error }) => ({...state, error: error})),

  //ao criar um usuario, incluir esse novo usuario na lista de usuarios [...state.usuarios, payload].
  on(fromUsuariosActions.CreateUsuarioSuccess, (state, { payload }) => ({...state, usuarios: [...state.usuarios, payload], error: ''})),
  on(fromUsuariosActions.CreateUsuarioFail, (state, { error }) => ({...state, error: error})),

  //ao atualizar um usuario, atualizar esse usuario na lista de usuarios.
  on(fromUsuariosActions.UpdateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].map((row) => {
      if(row.id == payload.id) return payload;
      return row;
    }), error: ''})),
  on(fromUsuariosActions.UpdateUsuarioFail, (state, { error }) => ({...state, error: error})),

  //ao deletar o usuario, remover esse usuario da lista de usuarios.
  on(fromUsuariosActions.DeleteUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((filter) => filter.id != payload), error: ''})),
  on(fromUsuariosActions.DeleteUsuarioFail, (state, { error }) => ({...state, error: error})),
);

export function usuariosReducer(state = initialState, action: Action){
  return _usuarioReducer(state, action);
}

//selectors

const getUsuariosFeatureState = createFeatureSelector<UsuariosState>('usuarios');

export const getUsuarios = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuarios
)

export const getUsuario = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuario
)

export const getUsuarioErro = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.error
)
