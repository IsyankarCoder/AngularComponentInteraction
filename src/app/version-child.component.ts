import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';

@Component({
    selector: 'app-version-child',
    template: ` <h3>Version {{Major}}.{{Minor}}</h3>
    <h4>Change log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>`
})

export class VersionChildComponent implements OnInit {
    constructor() { }
    @Input() Major: number;
    @Input() Minor: number;
    changeLog: string[] = [];

    ngOnInit() { }
    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        let log: string[] = [];
        for (let propName in changes) {
            let changedProp = changes[propName];
            let to = JSON.stringify(changedProp.currentValue);
            if (changedProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set ${to}`);
            } else {
                let from = JSON.stringify(changedProp.previousValue);
                log.push(`${propName} changed ${from} to ${to}`);
            }
            this.changeLog.push(log.join(", "));

        }
    }
}       