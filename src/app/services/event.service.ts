import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Subject} from 'rxjs/Subject';
import {CfgService} from './cfg.service';
import {Event} from '../classes/event';

@Injectable()
export class EventService {

  events: FirebaseListObservable<any>;
  selectedEvent: Subject<string> = new Subject<string>();

  constructor(private database: AngularFireDatabase, private cfgs: CfgService) {
    //this.events = database.list(cfgs.getDbPath() + '/events');
  }

  // getAll
  getAll() {
    return this.events;
  }

  // getAllBySectionID
  getAllBySectionID(sectionID) {
    return this.database.list(this.cfgs.getDbPath() + '/events', {
      query: {
        orderByChild: 'location/sectionID',
        equalTo: sectionID
      }
    });
  }

  // addNew
  addNew(newObject: Event) {

    const key = this.events.push(newObject).key;
    if (newObject.location.type === 'section') {
      this.database.list(this.cfgs.getDbPath() + '/sections/' + newObject.location.sectionID + '/events').push({
        ptr: key
      });
    }

  }

  // getByKey
  get(key: string) {
    return this.database.object(this.cfgs.getDbPath() + '/events/' + key);
  }

  // selectByKey
  select(key: string) {
    this.selectedEvent.next(key);
  }

  // updateByKey
  update(key: string, changeObj: any) {
    this.events.update(key, changeObj);
  }

  // deleteByKey
  delete(key: string) {
    this.events.remove(key);
  }
}
