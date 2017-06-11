import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Subject} from 'rxjs/Subject';
import {CfgService} from './cfg.service';

@Injectable()
export class SectionService {


  sections: FirebaseListObservable<any>;
  selectedSection: Subject<string> = new Subject<string>();

  constructor(private database: AngularFireDatabase, private cfgs: CfgService) {
    this.sections = database.list(cfgs.getDbPath() + '/sections');
  }

  getSections() {
    return this.sections;
  }

  getSection(sectionID) {
    return this.database.object(this.cfgs.getDbPath() + '/sections/' + sectionID);
  }

  select(sectionID) {
    //this.selectedSection.next(sectionID);
  }

}
