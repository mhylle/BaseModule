import {Component, OnInit} from '@angular/core';
import {Patient} from '../model/patient.model';

@Component({
  selector: 'sse-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  public selectedPatient: Patient;

  constructor() {
  }

  ngOnInit() {
  }

  selectPatient(patient: Patient) {
    this.selectedPatient = patient;
  }
}
