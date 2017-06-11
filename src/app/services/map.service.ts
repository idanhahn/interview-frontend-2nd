import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MapService {

  defaultMapControl = {
    type: 'none',
    id: -1,
    center: {
      lat: 36.136507,
      lng: -115.162020
    },
    zoom: 12
  };

  mapControl: Subject<any> = new Subject<any>();

  constructor() {
    this.mapControl.next(this.defaultMapControl);
  }

  centerAll() {
    this.mapControl.next(this.defaultMapControl);
  }

  center(type, id, lat, lng, zoom) {
      this.mapControl.next({
        type: type,
        id: id,
        center: {
          lat: lat,
          lng: lng
        },
        zoom: zoom
      });
  }

  init() {
    console.log('init');
  }

}
