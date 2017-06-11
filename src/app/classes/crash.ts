import {Action} from './action';
import {Location} from './location';

export class Crash {
  id: string;
  // type:
  // minor crash without damage
  // minor crash with property damage
  // major crash without damage
  // major crash with property damage
  // major crash with injuries
  // major crash with fatalities
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
  injuries: number;
  fatalities: number;
  icon: string;
  actions: Action[];
}
