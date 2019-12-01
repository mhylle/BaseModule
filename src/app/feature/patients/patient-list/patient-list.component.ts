import {Component, OnInit} from '@angular/core';
import {PatientService} from '../patient.service';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient.model';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sse-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  public patients$: Observable<Patient[]>;

  constructor(private readonly patientService: PatientService) {
  }

  ngOnInit() {
    this.patients$ = this.patientService.patients;
  }

}
