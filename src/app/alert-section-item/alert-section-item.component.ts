import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-section-item',
  templateUrl: './alert-section-item.component.html',
  styleUrls: ['./alert-section-item.component.scss']
})
export class AlertSectionItemComponent implements OnInit {

  @Input() sectionRiskAlert;
  @Input() alertSelected;

  constructor() { }

  ngOnInit() {}

}
