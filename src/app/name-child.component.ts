import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-name-child',
    template: `<h3>{{name}}</h3>`
})

export class NameChildComponent implements OnInit {
    private _name: string = '';
    constructor() { }

    @Input() 
    set name(name: string) {
        this._name = (name && name.trim()) || '<no name set>';
    }
    get name(): string {
        return this._name;
    }
    ngOnInit() { }
}