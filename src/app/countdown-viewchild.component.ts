import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { CountDownTimerComponent } from './countdown-timer.component'

@Component({
    selector: 'app-countdown-parent-viewchild',
    template: `<h3>CountDown To Lift Off</h3>
    <button (click)="start()">Start</button>
    <button (click)="stop()">Stop</button>
    <div class="seconds">{{seconds()}}</div>
    <app-countdown-timer></app-countdown-timer>`
})

export class ParentViewChildComponent implements AfterViewInit {
    constructor() { }

    @ViewChild(CountDownTimerComponent)
    private timerComponent: CountDownTimerComponent;

    seconds() { return 0; }
    start() { this.timerComponent.start(); }
    stop() { this.timerComponent.stop(); }
    ngAfterViewInit() {
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }
}