import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sse-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    // inject http service here
  }

  // initialize diagnosis variable and retrieve diagnosis data from server
  ngOnInit() {
    // get diagnosis data from server
  }

}
