import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [

    trigger('togglePanel', [
      state('close', style({
        transform: 'translateX(0px)'
      })),
      state('open', style({
        transform: 'translateX(-300px)'
      })),
      transition('close => open', animate(300)),
      transition('open => close', animate(300))
    ]),

    trigger('toggleMap', [
      state('close', style({
        width: 'calc(100vw - 300px)'
      })),
      state('open', style({
        width: 'calc(100vw - 600px)'
      })),
      transition('close => open', animate(300)),
      transition('open => close', animate(300))
    ]),

    trigger('toggleSwitch', [
      state('close', style({
        transform: 'scale(0)'
      })),
      state('open', style({
        transform: 'scale(1)'
      })),
      transition('close => open', animate(200)),
      transition('open => close', animate(200))
    ])

  ]
})
export class MainComponent implements OnInit {

  state = 'close';
  stateSwitch = 'close';

  mapType = 'danger';

  switchClicked = false;

  boxColor: string[] = ['black', 'black', 'black', 'black'];


  constructor(private _ms: MainService) {
    _ms.panelState.subscribe(panelState => {
      this.state = panelState;
    });
  }

  ngOnInit() {
  }

  onClick() {
    console.log(this.state);
    if (this.state === 'normal') {
      this.state = 'open';
    } else {
      this.state = 'normal';
    }
  }

  onSwitchClick() {

    if (this.mapType !== 'danger') {
      this.mapType = 'danger';
      this.stateSwitch = 'close';

    } else {
      if (this.switchClicked) {
        this.switchClicked = false;
        this.stateSwitch = 'close';
      } else {
        this.switchClicked = true;
        this.stateSwitch = 'open';
      }
    }

  }

  onMouseEnter(id) {
    this.boxColor[id] = 'white';
  }

  onMouseLeave(id) {
    this.boxColor[id] = 'black';
  }

  onSwitchTabClick(id) {

    switch (id) {
      case 0:
        this.mapType = 'frantic';
        break;
      case 1:
        this.mapType = 'hard_brakes';
        break;
      case 2:
        this.mapType = 'phone_use';
        break;
    }

  }

}
