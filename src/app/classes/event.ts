import {Location} from './location';
export class Event {
  id: string;
  // type:
  // major event
  // major sport event
  // major show
  // major conference
  type: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: Location;
  icon: string;
}
