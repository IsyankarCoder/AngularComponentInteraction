import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MissionService } from './missionservice';

@Component({
    selector: 'app-astranaout',
    template: '<p>{{astranaut}} : <strong>{{mission}}</strong></p><button (click)="confirm()" [disabled]="!announced || confirmed">Confirm</button>'
})

export class AstranautComponent implements OnDestroy {
    @Input() astranaut: string;
    subscription: Subscription;
    mission = '<no mission announced>';
    confirmed = false;
    announced = false;

    constructor(private missionService: MissionService) {
        this.subscription = missionService.missionAnounced$.subscribe(aa => {
            this.mission = aa;
            this.announced = true;
            this.confirmed = false;
        });
    }
    confirm() {
        this.confirmed = true;
        this.missionService.confirmMission(this.astranaut);
    }

    ngOnDestroy() { 
        this.subscription.unsubscribe();
    }
}