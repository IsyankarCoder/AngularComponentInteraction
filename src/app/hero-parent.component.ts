import { Component, OnInit } from '@angular/core';
import { HEROLIST } from './hero';

@Component({
    selector: 'app-hero-parent',
    template: `<h2>
        {{master}} controls {{heroes.length}} heroes
    </h2>
    <app-hero-child *ngFor="let hero of heroes" [Hero]="hero" [master]="master"></app-hero-child>`
})

export class HeroParentComponent implements OnInit {

    constructor() { }
    heroes = HEROLIST;
    master = 'Master'
    ngOnInit() { }
}