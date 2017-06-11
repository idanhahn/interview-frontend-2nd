import {LatLng} from './lat-lng';
export class Location {

  // type:
  // coords
  // sectionID
  // address
  type: string;

  latLng: LatLng;
  sectionID?: number;
  address?: string;
}
