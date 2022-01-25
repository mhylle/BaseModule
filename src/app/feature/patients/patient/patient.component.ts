import {Component, OnInit} from '@angular/core';

/**
 * This is the parent component for the Patient module. It's main purpose is to provide an entry point into the internal
 * navigation for the patient module. Functionality in here should be kept to a minimum.
 */
@Component({
  selector: 'sse-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }


}
