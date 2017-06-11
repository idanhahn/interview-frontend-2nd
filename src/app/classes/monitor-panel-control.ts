import {FirebaseObjectObservable} from 'angularfire2/database';
export class MonitorPanelControl {
  state = 'close';
  selectedRiskAlert: FirebaseObjectObservable<any>;
}
