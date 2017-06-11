import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-incident-item',
  templateUrl: './alert-incident-item.component.html',
  styleUrls: ['./alert-incident-item.component.scss']
})
export class AlertIncidentItemComponent implements OnInit {

  @Input() incidentRiskAlert;
  @Input() alertSelected;

  constructor() { }

  ngOnInit() {
  }

}
