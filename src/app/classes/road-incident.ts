import {Action} from './action';
import {Location} from './location';
export class RoadIncident {
  id: string;

  // type:
  // construction
  // car on the shoulders
  // infrastructure repairs
  // road block
  type: string;
  startTime: string;
  endTime: string;

  // state:
  // ongoing
  // done
  state: string;

  // lanesAffected:
  // None,L1,L2,L3,L4,L5,L6,L7,All
  lanesAffected: string;
  location: Location;
  title: string;
  description: string;
  icon: string;
  actions: Action[];
}
