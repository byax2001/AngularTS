import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent implements OnInit {
  //Para utilizar el FormControl se debe de importar de @angular/forms y se debe de importar en el Modulo que se esta utilizando el ReactiveFormsModule
  public searchInput = new FormControl('');
  public heroes:Hero[] = [];
  public filteredHeroes:Hero[] = [];
  public selectedHero?:Hero;

  constructor(
    private heroesService: HeroesService

  ) { }

  searchHero(){
    const value:string = this.searchInput.value || '';
    //Filtro
    this.filteredHeroes = value?this.heroes.filter(
      hero => hero.superhero.toLowerCase().includes(value.toLowerCase())
    ):this.heroes;
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent){
    if ( !event.option.value ) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue( hero.superhero );

    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.heroesService.getHeroes().
    subscribe(heroes => {
      this.heroes = heroes;
      this.filteredHeroes = heroes;
    });
  }
}
