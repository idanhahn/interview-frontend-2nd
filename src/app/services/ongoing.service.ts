import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Subject} from 'rxjs/Subject';
import {CfgService} from './cfg.service';

@Injectable()
export class OngoingService {

  ongoing: FirebaseListObservable<any>;
  selectedOngoing: Subject<string> = new Subject<string>();

  constructor(private database: AngularFireDatabase, private cfgs: CfgService) {
    this.ongoing = database.list((cfgs.getDbPath() + '/ongoing'));
  }

  getAll() {
    return this.ongoing;
  }

  getByID(id) {
    return this.database.object(this.cfgs.getDbPath() + '/ongoing/' + id);
  }

}
