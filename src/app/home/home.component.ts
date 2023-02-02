import {Component, OnInit} from '@angular/core';
import {Treatment} from './treatment.model';

@Component({
  selector: 'sse-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  editableTreatment: Treatment;
  constructor() {
    this.editableTreatment = {
      name: 'I am being edited'
    };
    // inject http service here
  }

  // initialize diagnosis variable and retrieve diagnosis data from server
  ngOnInit() {
    // get diagnosis data from server
  }

  isEnabled(type: string) {
    if (type === 'vulnerable') {
      return true;
    }
    return type === 'treatment';

  }

  doAction(action: string) {
    console.log('action in home', action);
  }
}
