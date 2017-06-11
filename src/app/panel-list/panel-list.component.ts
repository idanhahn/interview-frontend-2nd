import {Component, OnInit} from '@angular/core';
import {MainService} from "../services/main.service";

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.scss']
})
export class PanelListComponent implements OnInit {

  tabSwitch = 'risk_alerts';
  riskAlertsStyle = {
    'color': '#0098ef'
  };
  ongoingStyle = {
    'color': '#373a3c'
  };


  constructor(private _ms: MainService) {
  }

  ngOnInit() {
  }

  onTabSelect(tabID) {
    this.tabSwitch = tabID;
    if (tabID === 'risk_alerts') {
      this.riskAlertsStyle.color = '#0098ef';
      this.ongoingStyle.color = '#373a3c';
    } else {
      this.riskAlertsStyle.color = '#373a3c';
      this.ongoingStyle.color = '#0098ef';
    }
    this._ms.onPanelTabToggle();
  }

  onAddIncidentSelect(){
    console.log('implement')
  }
}
