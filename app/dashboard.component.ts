import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    providers: [HeroService]
})

export class DashboardComponent implements OnInit {

    public heroes: Hero[];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 4));
        // this.heroes = this.heroService.getHeroes().slice(0, 4);
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
