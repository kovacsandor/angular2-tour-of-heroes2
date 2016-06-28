import { Injectable } from '@angular/core';

import { heroesList } from './heroes-list';

@Injectable()
export class HeroService {
  getHeroes() {
    // return Promise.resolve(heroesList);
    return heroesList;
  }
}