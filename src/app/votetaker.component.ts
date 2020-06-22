import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-votetaker',
    template: `<h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <ul><li *ngFor="let message of messages">
        {{message}}</li></ul> <app-voter *ngFor="let item of voters" [name]="item" (voted)="onVoted($event)"></app-voter>
    `
})

export class VoteTakerComponent implements OnInit {
    constructor() { }
    agreed = 0;
    disagreed = 0;
    messages:boolean[]=[];
    voters = ['Volkan', 'Tolkan', 'Colkan'];
    ngOnInit() { }

    onVoted(agreed: boolean) {
        this.messages.push(agreed);
        agreed ? this.agreed++ : this.disagreed++;
    }
}