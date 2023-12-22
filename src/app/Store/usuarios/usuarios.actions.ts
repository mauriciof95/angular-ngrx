import { createAction, props } from "@ngrx/store";
import { UsuarioModel } from "src/app/models/UsuarioModel";

export const enum UsuarioTypeAction
{
  LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS',
  LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] LOAD USUARIOS SUCCESS',
  LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL',

  LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO',
  LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] LOAD USUARIO SUCCESS',
  LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL',

  CREATE_USUARIO = '[CREATE_USUARIO] CREATE USUARIO',
  CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] CREATE USUARIO SUCCESS',
  CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] CREATE USUARIO FAIL',

  UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE USUARIO',
  UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] UPDATE USUARIO SUCCESS',
  UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] UPDATE USUARIO FAIL',

  DELETE_USUARIO = '[DELETE_USUARIO] DELETE USUARIO',
  DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] DELETE USUARIO SUCCESS',
  DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] DELETE USUARIO FAIL',
}

export const LoadUsuarios = createAction(
  UsuarioTypeAction.LOAD_USUARIOS
);

export const LoadUsuariosSuccess = createAction(
  UsuarioTypeAction.LOAD_USUARIOS_SUCCESS,
  props<{payload: UsuarioModel[]}>()
);

export const LoadUsuariosFail = createAction(
  UsuarioTypeAction.LOAD_USUARIOS_FAIL,
  props<{error: string}>()
);



export const LoadUsuario = createAction(
  UsuarioTypeAction.LOAD_USUARIO,
  props<{payload: number}>()
);

export const LoadUsuarioSuccess = createAction(
  UsuarioTypeAction.LOAD_USUARIO_SUCCESS,
  props<{payload: UsuarioModel}>()
);

export const LoadUsuarioFail = createAction(
  UsuarioTypeAction.LOAD_USUARIO_FAIL,
  props<{error: string}>()
);



export const CreateUsuario = createAction(
  UsuarioTypeAction.CREATE_USUARIO,
  props<{payload: UsuarioModel}>()
);

export const CreateUsuarioSuccess = createAction(
  UsuarioTypeAction.CREATE_USUARIO_SUCCESS,
  props<{payload: UsuarioModel}>()
);

export const CreateUsuarioFail = createAction(
  UsuarioTypeAction.CREATE_USUARIO_FAIL,
  props<{error: string}>()
);



export const UpdateUsuario = createAction(
  UsuarioTypeAction.UPDATE_USUARIO,
  props<{payload: UsuarioModel}>()
);

export const UpdateUsuarioSuccess = createAction(
  UsuarioTypeAction.UPDATE_USUARIO_SUCCESS,
  props<{payload: UsuarioModel}>()
);

export const UpdateUsuarioFail = createAction(
  UsuarioTypeAction.UPDATE_USUARIO_FAIL,
  props<{error: string}>()
);



export const DeleteUsuario = createAction(
  UsuarioTypeAction.DELETE_USUARIO,
  props<{payload: number}>()
);

export const DeleteUsuarioSuccess = createAction(
  UsuarioTypeAction.DELETE_USUARIO_SUCCESS,
  props<{payload: number}>()
);

export const DeleteUsuarioFail = createAction(
  UsuarioTypeAction.DELETE_USUARIO_FAIL,
  props<{error: string}>()
);
