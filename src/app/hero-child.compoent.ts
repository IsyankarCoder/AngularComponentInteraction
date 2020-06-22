import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-hero-child',
    template: '<h3>{{Hero.name}} says : </h3><p> I ,  {{Hero.name}} ,am at your service ,{{masterName}}.</p>'
})

export class HeroChildComponent implements OnInit {
    @Input() Hero: Hero;
    @Input('master') masterName: string;

    constructor() { }

    ngOnInit() { }
}