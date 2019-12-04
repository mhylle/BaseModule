import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Patient} from '../model/patient.model';
import {State} from '../../../store/reducers';
import {Store} from '@ngrx/store';
import {getSelectedPatient} from '../store/selectors';
import {UpdatePatient} from '../store/actions';

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
