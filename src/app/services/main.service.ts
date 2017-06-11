import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {MapControl} from '../classes/map-control';
import {PanelControl} from '../classes/panel-control';
import {Location} from '../classes/location';
import {RoadIncidentService} from './road-incident.service';
import {SectionService} from './section.service';
import {RiskAlertsService} from './risk-alerts.service';
import {OngoingService} from './ongoing.service';
import {FirebaseObjectObservable} from 'angularfire2/database';
import {MapService} from './map.service';

@Injectable()
export class MainService {

  panelControl = new Subject<PanelControl>();
  mapControl = new Subject<MapControl>();

  panelState = new Subject<any>();
  detailPanelState = new Subject<any>();

  // risk alerts
  selectedRiskAlert = new Subject<FirebaseObjectObservable<any>>();
  lastSelectedRiskAlert = '-1';

  // ongoing
  selectedOngoing = new Subject<FirebaseObjectObservable<any>>();
  lastSelectedOngoing = '-1';


  constructor(private _sS: SectionService,
              private _riS: RoadIncidentService,
              private _raS: RiskAlertsService,
              private _ogS: OngoingService,
              private _mS: MapService) {

  }

  init() {
    this.mapControl.next({
      type: 'section',
      section: this._sS.getSection('0')
    });

    this.panelControl.next({
      hour: 10
    });
  }

  // sections:
  getSections() {
    return this._sS.getSections();
  }

  // roadIncidents:
  getRoadIncidents() {
    return this._riS.getAll();
  }

  getRiskAlerts() {
    return this._raS.getAll();
  }

  getOngoings() {
    return this._ogS.getAll();
  }

  // Uses Cases:

  // Map Related:
  // ############

  // ------------------------ //
  // -- Select Item of map -- //
  // ------------------------ //

  // selectSection
  selectSection(sID) {

    console.log('section selected: ' + sID);
    this.mapControl.next({
      type: 'section',
      section: this._sS.getSection(sID)
    });
    this._sS.select(sID);

  }

  // selectRoadIncident
  selectRoadIncident(riID) {

    console.log('road incident selected: ' + riID);
    this.mapControl.next({
      type: 'road_incident',
      roadIncident: this._riS.get(riID)
    });
    this._riS.select(riID);

  }

  selectCreateNew(location: Location) {
    console.log('create new selected' + location);
    this.mapControl.next({
      type: 'create-new',
      location: location
    });
  }

  // ------------------------ //
  // -- Select Risk Alerts -- //
  // ------------------------ //

  onRiskAlertSelect(id, lat, lng, zoom) {
    this.detailPanelState.next('risk_alert');
    if (this.lastSelectedRiskAlert === id) {

      this.selectedRiskAlert.next(this._raS.getByID(id));
      this.panelState.next('close');
      this.lastSelectedRiskAlert = '-1';
      this._mS.centerAll();

    } else {

      this.selectedRiskAlert.next(this._raS.getByID(id));
      this.panelState.next('open');
      this.lastSelectedRiskAlert = id;
      this._mS.center('riskAlert', id, lat, lng, zoom);

    }
  }

  // -------------------- //
  // -- Select Ongoing -- //
  // -------------------- //

  onOngoingSelect(id, lat, lng, zoom) {
    this.detailPanelState.next('ongoing');
    if (this.lastSelectedOngoing === id) {

      this.selectedOngoing.next(this._ogS.getByID(id));
      this.panelState.next('close');
      this.lastSelectedOngoing = '-1';
      this._mS.centerAll();

    } else {

      this.selectedOngoing.next(this._ogS.getByID(id));
      this.panelState.next('open');
      this.lastSelectedOngoing = id;
      this._mS.center('ongoing', id, lat, lng, zoom);

    }
  }


  // ------------------------------ //
  // -- Toogle RiskAlert/Ongoing -- //
  // ------------------------------ //

  onPanelTabToggle() {
    this.panelState.next('close');
    this.lastSelectedRiskAlert = '-1';
    this.lastSelectedOngoing = '-1';
    this._mS.centerAll();
  }


}
