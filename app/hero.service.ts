import { Injectable } from '@angular/core';

import { HEROESLIST } from './heroes-list';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROESLIST);
    // return heroesList;
  }
  getHero(id: number) {
    return this.getHeroes()
      .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

}