import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroChildComponent } from './hero-child.compoent';
import { HeroParentComponent } from './hero-parent.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './votetaker.component';
import { CountDownTimerComponent } from './countdown-timer.component';
import { CountDownParentComponent } from './countdown-parent.component';
import {ParentViewChildComponent} from './countdown-viewchild.component';
import {MissionControlService} from './missioncontrolservice';
import {AstranautComponent} from './astranaut.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    CountDownTimerComponent,
    CountDownParentComponent,
    ParentViewChildComponent,
    AstranautComponent,
    MissionControlService

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
