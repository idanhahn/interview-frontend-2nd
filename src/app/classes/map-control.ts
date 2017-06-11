import {Location} from './location';
import {FirebaseObjectObservable} from 'angularfire2/database';

export interface MapControl {
  // types:
  // section
  // roadIncident
  // crash
  // event
  // newIncident
  type: string;
  section?: FirebaseObjectObservable<any>;
  roadIncident?: FirebaseObjectObservable<any>;
  crash?: FirebaseObjectObservable<any>;
  event?: FirebaseObjectObservable<any>;

  location?: Location;
  zoom?: number;
}
