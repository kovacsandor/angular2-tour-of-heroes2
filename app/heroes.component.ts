import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {

    public heroes: Hero[];
    public selectedHero: Hero;
    
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    constructor(
        private heroService: HeroService,
        private router: Router) {
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroesList => this.heroes = heroesList);
        // this.heroes = this.heroService.getHeroes();
    }

    ngOnInit() {
        this.getHeroes();
        // this.heroes = this.heroService.getHeroes();
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}

