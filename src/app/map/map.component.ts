import {Component, OnInit} from '@angular/core';
import {MainService} from '../services/main.service';
import {FirebaseListObservable} from 'angularfire2/database';
import {LatLng} from '../classes/lat-lng';
import {Location} from '../classes/location';
import {MapService} from '../services/map.service';
import {LatLngLiteral} from 'angular2-google-maps/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  overlayPaths: Array<LatLngLiteral> = [
    {lat: 50.550653, lng: -134.161406},
    {lat: 49.554154, lng: -51.976919},
    {lat: 20.962561, lng: -53.824592},
    {lat: 20.062701, lng: -131.500757}
  ];


  mapControl = {
    type: 'none',
    id: -1,
    center: {
      lat: 36.136507,
      lng: -115.162020
    },
    zoom: 12
  };

  hour = 7;

  // Map Elements:
  sections: FirebaseListObservable<any>;
  riskAlerts: FirebaseListObservable<any>;
  roadIncidents: FirebaseListObservable<any>;
  crashes: FirebaseListObservable<any>;
  events: FirebaseListObservable<any>;
  alerts: FirebaseListObservable<any>;

  constructor(private _mS: MainService, private _mapS: MapService) {

    this.sections = _mS.getSections();
    this.roadIncidents = _mS.getRoadIncidents();
    this.riskAlerts = _mS.getRiskAlerts();

    this._mapS.mapControl.subscribe(mapControl => {
      this.mapControl = {
        type: mapControl.type,
        id: mapControl.id,
        center: {
          lat: mapControl.center.lat,
          lng: mapControl.center.lng
        },
        zoom: mapControl.zoom
      };
    });
  }

  ngOnInit() {
    this._mS.init();
    this._mapS.init();
  }

  onSectionSelect(sID, $event) {
    this._mS.selectSection(sID);
  }

  onRoadIncidentSelect(riID) {
    this._mS.selectRoadIncident(riID);
  }

  onCrashSelect(cID) {
    this._mS.selectCrash(cID);

  }

  onEventSelect(eID) {
    this._mS.selectEvent(eID);

  }

  onSectionRightClick(sID, $event) {
    console.log(sID);
    console.log($event.latLng.lat());
    console.log($event.latLng.lng());
    const location: Location = new Location();
    const latLng: LatLng = new LatLng();
    latLng.lat = $event.latLng.lat();
    latLng.lng = $event.latLng.lng();
    location.type = 'sectionID';
    location.sectionID = sID;
    location.latLng = latLng;
    this._mS.selectCreateNew(location);
  }

  onMapRightClick($event) {
    console.log($event);

  }

  onRiskAlertClick(id) {
    console.log(id);
  }


  onIncidentClick(id) {
    console.log(id);
  }

}
