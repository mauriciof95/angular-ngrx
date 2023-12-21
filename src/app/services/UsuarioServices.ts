import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from '../models/UsuarioModel';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsuarioServices {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<UsuarioModel[]>('http://localhost:3000/usuarios');
  }
  getUsuario(id: number) {
    return this.http.get<UsuarioModel>('http://localhost:3000/usuarios/' + id);
  }
  addUsuario(model: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<UsuarioModel>(
      'http://localhost:3000/usuarios',
      JSON.stringify(model),
      { headers: headers }
    );
  }
  updateUsuario(model: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<UsuarioModel>(
      'http://localhost:3000/usuarios/' + model.id,
      JSON.stringify(model),
      { headers: headers }
    );
  }
  deleteUsuario(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete('http://localhost:3000/usuarios/' + id, {
      headers: headers,
    });
  }
}
