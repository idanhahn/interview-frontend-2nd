import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-ongoing-list',
  templateUrl: './ongoing-list.component.html',
  styleUrls: ['./ongoing-list.component.scss']
})
export class OngoingListComponent implements OnInit {

  ongoings: FirebaseListObservable<any>;
  ongoingSelected = '-1';

  incidents: FirebaseListObservable<any>;

  constructor(private _ms: MainService) {
    this.ongoings = this._ms.getOngoings();
    this.incidents = this._ms.getRoadIncidents();
  }

  ngOnInit() {}

  onOngoingSelect(id, lat, lng, zoom) {
    this._ms.onOngoingSelect(id, lat, lng, zoom);
    this.ongoingSelected = id;
  }

  ongoingSelect(id): boolean {
    return (this.ongoingSelected === id);
  }
}
