import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Subject} from 'rxjs/Subject';
import {CfgService} from './cfg.service';

@Injectable()
export class RiskAlertsService {

  riskAlerts: FirebaseListObservable<any>;
  selectedRiskAlert: Subject<string> = new Subject<string>();

  constructor(private database: AngularFireDatabase, private cfgs: CfgService) {
    this.riskAlerts = database.list(cfgs.getDbPath() + '/riskAlerts');
  }

  getAll() {
    return this.riskAlerts;
  }

  getByID(id) {
    return this.database.object(this.cfgs.getDbPath() + '/riskAlerts/' + id);
  }

}
