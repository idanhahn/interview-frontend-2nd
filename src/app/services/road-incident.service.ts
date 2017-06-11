import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Subject} from 'rxjs/Subject';
import {CfgService} from './cfg.service';
import {RoadIncident} from '../classes/road-incident';

@Injectable()
export class RoadIncidentService {

  roadIncidents: FirebaseListObservable<any>;
  selectedRoadIncident: Subject<string> = new Subject<string>();

  constructor(private database: AngularFireDatabase, private cfgs: CfgService) {
    this.roadIncidents = database.list(cfgs.getDbPath() + '/roadIncidents');
  }

  // getAll
  getAll() {
    return this.roadIncidents;
  }

  // getAllBySectionID
  getAllBySectionID(sectionID) {
    return this.database.list(this.cfgs.getDbPath() + '/roadIncidents', {
      query: {
        orderByChild: 'location/sectionID',
        equalTo: sectionID
      }
    });
  }

  // addNew
  addNew(newObject: RoadIncident) {

    const key = this.roadIncidents.push(newObject).key;
    if (newObject.location.type === 'section') {
      this.database.list(this.cfgs.getDbPath() + '/sections/' + newObject.location.sectionID + '/roadIncidents').push({
        ptr: key
      });
    }

  }

  // getByKey
  get(key: string) {
    return this.database.object(this.cfgs.getDbPath() + '/roadIncidents/' + key);
  }

  // selectByKey
  select(key: string) {
    //this.selectedRoadIncident.next(key);
  }

  // updateByKey
  update(key: string, changeObj: any) {
    this.roadIncidents.update(key, changeObj);
  }

  // deleteByKey
  delete(key: string) {
    this.roadIncidents.remove(key);
  }

}
