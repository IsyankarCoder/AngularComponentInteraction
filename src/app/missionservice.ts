import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MissionService {

    //Observable string sources
    private missionAnouncedSource = new Subject<string>();
    private missionConfirmedSource = new Subject<string>();

    //Observable string Streams
    missionAnounced$ = this.missionAnouncedSource.asObservable();
    missionConfirmed$ = this.missionConfirmedSource.asObservable();
    constructor() {

    }

    //Service Message Comands
    announceMission(mission: string) {
        this.missionAnouncedSource.next(mission);
    }
    confirmMission(mission: string) {
        this.missionConfirmedSource.next(mission);
    }


}