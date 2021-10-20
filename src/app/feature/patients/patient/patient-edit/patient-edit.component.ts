import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Patient} from '../../model/patient.model';
import {State} from '../../../../store';
import {Store} from '@ngrx/store';
import {getSelectedPatient, UpdatePatient} from '../../store';
import {Observable} from 'rxjs';

/**
 * Component responsible for editing a patient. Nothing big, just list the fields, with any validation.
 */
@Component({
  selector: 'sse-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientEditComponent implements OnInit {
  public patient$: Observable<Patient>;

  constructor(private readonly store: Store<State>) {
  }

  /**
   * Select the patient from the store.
   */
  ngOnInit() {
    this.patient$ = this.store.select(getSelectedPatient);
  }

  /**
   * Ask the store to update the patient.
   * @param patient the patient to be updated.
   */
  update(patient: Patient) {
    this.store.dispatch(UpdatePatient({patient}));
  }
}
