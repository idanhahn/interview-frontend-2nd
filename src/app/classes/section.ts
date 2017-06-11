import {Traffic} from './traffic';
import {Weather} from './weather';
import {RoadIncident} from './road-incident';
import {Event} from './event';
import {Crash} from './crash';
import {SectionGeometric} from './section-geometric';
import {CrashPrediction} from './crash-prediction';
import {SectionInfo} from './section-info';

export class Section {
  id: string;
  name: string;

  crashPrediction: CrashPrediction[];

  weather: Weather[];
  traffic: Traffic[];

  crashes: Crash[] = []
  roadIncidents: RoadIncident[] = [];
  events: Event[] = [];

  sectionGeometric: SectionGeometric;
  info: SectionInfo;

}
