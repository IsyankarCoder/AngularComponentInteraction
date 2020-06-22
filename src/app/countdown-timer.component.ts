import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-countdown-timer',
    template: `<p>{{message}}</p>`
})

export class CountDownTimerComponent implements OnInit, OnDestroy {
    constructor() { }
    intervalid = 0;
    message = '';
    seconds = 11;
    clearTimer() { clearInterval(this.intervalid); }

    ngOnInit() { }
    ngOnDestroy() {
        this.clearTimer();
    }

    start() {
        this.countDown();
    }
    stop() {
        this.clearTimer();
        this.message = `Holding at T - ${this.seconds} seconds`;
    }

    private countDown() {
        this.clearTimer();
        this.intervalid = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.message = "Blast Offf";

            } else {
                if (this.seconds < 0) { this.seconds = 10; } //reset
                this.message = `T-${this.seconds} seconds and counting`;
            }
        }, 1000);
    }
}