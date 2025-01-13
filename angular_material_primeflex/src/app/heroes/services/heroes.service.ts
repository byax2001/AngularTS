import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'environments/environments';


//aservice + tab para crear una plantilla de servicio

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl: string = environments.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getHeroes():Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string):Observable<Hero | undefined> {  //Observable, catchError, of se deben importar de rxjs
    return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(e => of(undefined)) //se usa of para devolver un observable con un valor, esto permite que el flujo de la aplicación no se detenga
                                    // y que se puedan realizar acciones en caso de error en otros archivos donde se este utilizando el servicio
    );
  }

  addHero(hero: Hero):Observable<Hero> {
    hero.id = hero.publisher + '-' + hero.superhero;
    return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero):Observable<Hero> {
    // La difrencia entre patch y put es que patch solo actualiza los campos que se envian, mientras que put actualiza todos los campos
    // de modo que si se usa put y no se envian todos los campos, los campos que no se envien se eliminaran
    return this.httpClient.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string):Observable<boolean> {
    // Si todo sale bien, el servidor devolvera un 200, si no se puede eliminar el heroe, el servidor devolvera un 404
    // por lo tanto se puede usar el map para devolver un true si se elimino el heroe y un false si no se pudo eliminar
    // ya que los errores 404 no se capturan en el catchError
    return this.httpClient.delete(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(e => of(false)),
      map(resp => true)
    );
  }


}
