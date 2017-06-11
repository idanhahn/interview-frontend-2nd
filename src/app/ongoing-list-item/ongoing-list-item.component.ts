import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ongoing-list-item',
  templateUrl: './ongoing-list-item.component.html',
  styleUrls: ['./ongoing-list-item.component.scss']
})
export class OngoingListItemComponent implements OnInit {

  @Input() sectionOngoing;
  @Input() ongoingSelected;

  constructor() { }

  ngOnInit() {
  }

}
