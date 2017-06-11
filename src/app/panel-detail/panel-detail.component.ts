import {Component, OnInit} from '@angular/core';
import {MainService} from '../services/main.service';
import {FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-panel-detail',
  templateUrl: './panel-detail.component.html',
  styleUrls: ['./panel-detail.component.scss']
})
export class PanelDetailComponent implements OnInit {

  detailPanelState: any;

  selectedRiskAlert: FirebaseObjectObservable<any>;
  selectedOngoing: FirebaseObjectObservable<any>;

  constructor(private _ms: MainService) {

    this._ms.selectedRiskAlert.subscribe(selectedRiskAlert => {
      this.selectedRiskAlert = selectedRiskAlert;
    });

    this._ms.selectedOngoing.subscribe(selectedOngoing => {
      this.selectedOngoing = selectedOngoing;
    });

    this._ms.detailPanelState.subscribe(detailPanelState => {
      this.detailPanelState = detailPanelState;
    });
  }

  ngOnInit() {
  }

}
