import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Patient} from '../../model/patient.model';
import {Address} from '../../../addresses/model/address.model';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {Diagnose} from '../../../diagnoses/model/diagnose.model';
import {State} from '../../../../store';
import {Store} from '@ngrx/store';
import {selectAddressById} from '../../../addresses/store/reducers';
import {LoadDiagnosis} from '../../../diagnoses/store/actions/diagnose.actions';
import {LoadAddress} from '../../../addresses/store/actions/address.actions';
import {selectDiagnoseById} from '../../../diagnoses/store/selectors';

@Component({
  selector: 'sse-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientDetailsComponent implements OnInit, OnChanges {
  @Input()
  patient: Patient;
  public patientAddress$: Observable<Address>;
  public patientDiagnose$: Observable<Diagnose>;

  constructor(private readonly router: Router,
              private store: Store<State>) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.patient) {
      if (this.patient.address) {
        this.store.dispatch(LoadAddress({addressId: this.patient.address}));
        this.patientAddress$ = this.store.select(selectAddressById(this.patient.address));
      } else {
        this.patientAddress$ = of(null);
      }
      if (this.patient.diagnosis) {
        this.store.dispatch(LoadDiagnosis({diagnoseId: this.patient.diagnosis}));
        this.patientDiagnose$ = this.store.select(selectDiagnoseById(this.patient.diagnosis));
      }
    }
  }

  editPatient(patient: Patient) {
    this.router.navigate([`patients/edit/${patient.id}`]);
  }

  changeDiagnose(patient: Patient) {
    this.router.navigate([`patients/diagnose/${patient.id}`]);
  }
}
