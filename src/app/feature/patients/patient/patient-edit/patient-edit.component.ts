import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Patient} from '../../model/patient.model';
import {State} from '../../../../store';
import {Store} from '@ngrx/store';
import {getSelectedPatient, UpdatePatient} from '../../store';

@Component({
  selector: 'sse-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientEditComponent implements OnInit {
  public patient: Patient;

  constructor(private readonly store: Store<State>) {
  }

  ngOnInit() {
    this.store.select(getSelectedPatient).subscribe(patient => this.patient = {...patient});
  }

  update(patient: Patient) {
    this.store.dispatch(UpdatePatient({patient}));
  }
}
