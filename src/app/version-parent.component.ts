import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-version-parent',
    template: `<h2>Source Code Version</h2><button (click)="newMinor()">New Minor Version</button><button (click)="newMajor()">New Major Version</button><app-version-child [Major]="major" [Minor]="minor"></app-version-child>`
})

export class VersionParentComponent implements OnInit {
    constructor() { }
    major = 1;
    minor = 23;

    ngOnInit() { }
    newMinor() {
        this.minor++;
    }
    newMajor() {
        this.major++;
        this.minor = 0;
    }
}