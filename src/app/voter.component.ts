import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-voter',
    template: `<h4>{{name}}</h4>
    <button (click)="vote(true)" [disabled]="false">Agree</button>
    <button (click)="vote(false)" [disabled]="didVote">DisAgree</button>`
})

export class VoterComponent implements OnInit {
    constructor() { }
    @Input() name: string;
    @Output() voted = new EventEmitter<boolean>();
    didVote = false;

    vote(aggreed: boolean) {
        this.voted.emit(aggreed);
        this.didVote = true;
    }
    ngOnInit() { }
}