import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-name-parent',
    template: `<h2>Master Controls  {{names.length}} names</h2>
    <app-name-child *ngFor="let dd of names" [name]="dd"><app-name-child>`
})

export class NameParentComponent implements OnInit {
    names = ['Dr.IQ', '   ', '   Bombasto  '];
    constructor() { }

    ngOnInit() { }
}