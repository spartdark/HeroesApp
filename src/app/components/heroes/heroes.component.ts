import { Component, OnInit } from '@angular/core';
import {HeroesServices,Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesServices) {

  }
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

}
