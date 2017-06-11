import {Component, Input, OnInit} from '@angular/core';
import {MainService} from '../services/main.service';
import {FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {

  riskAlerts: FirebaseListObservable<any>;

  selectedRiskAlert = '-1';

  constructor(private _ms: MainService) {
    this.riskAlerts = _ms.getRiskAlerts();
  }

  ngOnInit() {
  }

  onRiskAlertSelect(id, lat, lng, zoom) {
    this._ms.onRiskAlertSelect(id, lat, lng, zoom);
    this.selectedRiskAlert = id;
  }

  alertSelected(id): boolean {

    return (id === this.selectedRiskAlert);

  }

}
