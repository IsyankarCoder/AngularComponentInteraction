import { Component } from '@angular/core';
import { MissionService } from './missionservice';



@Component({
    selector: 'app-mission-component',
    template: '<h2>Mission Control</h2><button (click)="announce();">Announce Mission</button><app-astranaout *ngFor="let astranaut of astranouts" [astranaut]="astranaut"></app-astranaout><h3>History</h3><ul><li *ngFor="let event of history">{{event}}</li></ul>',
    providers: [MissionService]
})
export class MissionControlService {
    astranouts = ['Lovel', 'Swigert', 'Haise'];
    history: string[] = [];
    missions = ['Fly to the moon', 'Fly to the mars', 'Fly to vegas'];
    nextMission = 0;

    constructor(private missionService: MissionService) {
        missionService.missionConfirmed$.subscribe(astranout => {
            this.history.push(`${astranout} confirmed the subscription`);
        });
    }

    announce() {
        let mission = this.missions[this.nextMission++];
        this.missionService.announceMission(mission);
        this.history.push(`Mission ${mission} anounced`);
        if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
    }
}