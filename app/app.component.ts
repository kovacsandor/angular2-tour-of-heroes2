import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    public title: string = 'Tour of Heroes';
    public heroes: Hero[];
    private heroService: HeroService

    public selectedHero: Hero;
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    constructor(heroService: HeroService) {
        this.heroService = heroService;
    }

    getHeroes() {
        // this.heroService.getHeroes().then(heroesList => this.heroes = heroesList);
        this.heroes = this.heroService.getHeroes();
    }

    ngOnInit() {
        this.getHeroes();
    }

}

