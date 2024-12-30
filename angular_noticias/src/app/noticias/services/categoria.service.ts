import { CategoriaInterface } from './../interfaces/CategoriaInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CategoriaService {
  url = 'http://localhost:8080/categorias';
  token = localStorage.getItem('token');
  constructor(private http: HttpClient) { }

  //Para Insertar una Interface de Categoria realizar lo siguiente
  getCategorias():Observable<CategoriaInterface[]> { //El Observable es un tipo de dato que se utiliza para manejar eventos asincronos
    return this.http.get<CategoriaInterface[]>(`${this.url}`, {headers: {Authorization: `Bearer ${this.token}`}})
    .pipe(
      catchError((err) => of([])) // En caso de error, se retorna un arreglo vacío
    );
  }


}
