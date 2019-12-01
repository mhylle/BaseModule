import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../model/patient.model';

@Component({
  selector: 'sse-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  @Input()
  patient: Patient;

  constructor() {
  }

  ngOnInit() {
  }

}
