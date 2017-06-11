import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {MapComponent} from './map/map.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {firebaseConfig, googleConfig} from './config/config';
import {PanelComponent} from './panel/panel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainService} from './services/main.service';
import {RoadIncidentService} from './services/road-incident.service';
import {CrashService} from './services/crash.service';
import {EventService} from './services/event.service';
import {SectionService} from './services/section.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {CfgService} from './services/cfg.service';
import { PanelListComponent } from './panel-list/panel-list.component';
import { PanelDetailComponent } from './panel-detail/panel-detail.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { OngoingListComponent } from './ongoing-list/ongoing-list.component';
import { OngoingListItemComponent } from './ongoing-list-item/ongoing-list-item.component';
import { AlertIncidentItemComponent } from './alert-incident-item/alert-incident-item.component';
import { AlertSectionItemComponent } from './alert-section-item/alert-section-item.component';
import {RiskAlertsService} from './services/risk-alerts.service';
import {OngoingService} from './services/ongoing.service';
import {MapService} from './services/map.service';
import 'hammerjs';
import {MdSliderModule} from '@angular/material';
import {PlanService} from './services/plan.service';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent,
    HeaderComponent,
    PanelComponent,
    PanelListComponent,
    PanelDetailComponent,
    AlertListComponent,
    OngoingListComponent,
    OngoingListItemComponent,
    AlertIncidentItemComponent,
    AlertSectionItemComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdSliderModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: googleConfig.apiKey
    }),
    RouterModule.forRoot([
      {path: '', component: MainComponent}
    ])
  ],
  providers: [
    MainService,
    SectionService,
    RoadIncidentService,
    CrashService,
    EventService,
    RiskAlertsService,
    OngoingService,
    CfgService,
    PlanService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
