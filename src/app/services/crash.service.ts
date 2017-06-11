import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Subject} from 'rxjs/Subject';
import {CfgService} from './cfg.service';
import {Crash} from '../classes/crash';

@Injectable()
export class CrashService {

  crashes: FirebaseListObservable<any>;
  selectedCrash: Subject<string> = new Subject<string>();

  constructor(private database: AngularFireDatabase, private cfgs: CfgService) {
    //this.crashes = af.database.list(cfgs.getDbPath() + '/crashes');
  }

  // getAll
  getAll() {
    return this.crashes;
  }

  // getAllBySectionID
  getAllBySectionID(sectionID) {
    return this.database.list(this.cfgs.getDbPath() + '/crashes', {
      query: {
        orderByChild: 'location/sectionID',
        equalTo: sectionID
      }
    });
  }

  // addNew
  addNew(newObject: Crash) {

    const key = this.crashes.push(newObject).key;
    if (newObject.location.type === 'section') {
      this.database.list(this.cfgs.getDbPath() + '/sections/' + newObject.location.sectionID + '/crashes').push({
        ptr: key
      });
    }

  }

  // getByKey
  get(key: string) {
    return this.database.object(this.cfgs.getDbPath() + '/crashes/' + key);
  }

  // selectByKey
  select(key: string) {
    this.selectedCrash.next(key);
  }

  // updateByKey
  update(key: string, changeObj: any) {
    this.crashes.update(key, changeObj);
  }

  // deleteByKey
  delete(key: string) {
    this.crashes.remove(key);
  }

}
