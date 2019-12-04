import {Component, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient.model';
import {Diagnose} from '../../diagnoses/model/diagnose.model';
import {State} from '../../../store/reducers';
import {Store} from '@ngrx/store';
import {getSelectedPatient} from '../store/selectors';
import {UpdatePatient} from '../store/actions';
import {selectDiagnoseById} from '../../diagnoses/store/reducers';

@Component({
  selector: 'sse-patient-diagnose',
  templateUrl: './patient-diagnose.component.html',
  styleUrls: ['./patient-diagnose.component.css']
})
export class PatientDiagnoseComponent implements OnInit {
  private patient$: Observable<Patient>;
  private patientDiagnosis$: Observable<Diagnose>;
  public selectedDiagnose?: Diagnose;

  constructor(private readonly store: Store<State>) {
  }

  ngOnInit() {
    this.patient$ = this.store.select(getSelectedPatient);
    this.patientDiagnosis$ = this.patient$.pipe(
      switchMap(patient => {
        if (patient) {
          return this.store.select(selectDiagnoseById(patient.diagnosis));
        }
      }));
  }

  updateDiagnose(diagnose: Diagnose) {
    this.selectedDiagnose = diagnose;
  }

  savePatient(patient: Patient) {
    const updatedPatient: Patient = {
      ...patient
    };
    updatedPatient.diagnosis = this.selectedDiagnose.id;
    this.store.dispatch(UpdatePatient({patient: updatedPatient}));
  }
}
