import { Component, OnInit } from '@angular/core';
import { CountDownTimerComponent } from './countdown-timer.component';

@Component({
    selector: 'app-parent-count-timer',
    template: `<h3>CountDown to lift off (via local variable)</h3>
    <button (click)="timer.start();">Start</button>
    <button (click)="timer.stop();">Stop</button>
    <div class="seconds">{{timer.seconds}}</div>
    <app-countdown-timer #timer></app-countdown-timer>
              `
})

export class CountDownParentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}