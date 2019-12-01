import {Component, OnInit} from '@angular/core';
import {faDiagnoses, faHome, faUserInjured} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sse-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faHome = faHome;
  faDiagnosis = faDiagnoses;
  faUserInjured = faUserInjured;

  constructor() {
  }

  ngOnInit() {
  }

}
