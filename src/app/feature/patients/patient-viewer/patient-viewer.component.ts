import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Patient} from '../model/patient.model';

@Component({
  selector: 'sse-patient-viewer',
  templateUrl: './patient-viewer.component.html',
  styleUrls: ['./patient-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientViewerComponent implements OnInit {
  public selectedPatient: Patient;

  constructor() {
  }

  ngOnInit() {
  }

  selectPatient(patient: Patient) {
    this.selectedPatient = patient;
  }
}
