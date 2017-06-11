import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {CfgService} from './cfg.service';

@Injectable()
export class PlanService {

  shifts: FirebaseListObservable<any>;

  constructor(private database: AngularFireDatabase, private cfgs: CfgService) {
    this.shifts = database.list(cfgs.getDbPath() + '/plan/shifts');
  }

  getAllShifts() {
    return this.shifts;
  }

}
