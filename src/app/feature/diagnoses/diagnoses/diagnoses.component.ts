import {Component, OnInit} from '@angular/core';

/**
 * This is the parent component for the Diagnoses module. It's main purpose is to provide an entry point into the internal
 * navigation for the diagnoses module. Functionality in here should be kept to a minimum.
 */
@Component({
  selector: 'sse-diagnoses',
  templateUrl: './diagnoses.component.html',
  styleUrls: ['./diagnoses.component.css']
})
export class DiagnosesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
