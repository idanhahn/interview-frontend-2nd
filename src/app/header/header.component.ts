import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navSelected = 1;

  constructor() {
  }

  ngOnInit() {
  }

  onNavSelect(navID) {
    this.navSelected = navID;
  }

}
