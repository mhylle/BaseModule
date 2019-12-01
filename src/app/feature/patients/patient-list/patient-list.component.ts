import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PatientService} from '../patient.service';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient.model';
import {faFemale, faInfoCircle, faMale, faMars, faVenus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sse-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  faMale = faMale;
  faFemale = faFemale;
  faMars = faMars;
  faVenus = faVenus;

  public patients$: Observable<Patient[]>;

  @Output()
  selectedPatient: EventEmitter<Patient> = new EventEmitter<Patient>();

  constructor(private readonly patientService: PatientService) {
  }

  ngOnInit() {
    this.patients$ = this.patientService.patients;
  }

  selectPatient(patient: Patient) {
    this.selectedPatient.emit(patient);
  }
}
