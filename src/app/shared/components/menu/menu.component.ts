import {Component, OnInit} from '@angular/core';
import {faHome, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sec-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faHome = faHome;
  faInfoCircle = faInfoCircle;

  constructor() {
  }

  ngOnInit() {
  }

}
