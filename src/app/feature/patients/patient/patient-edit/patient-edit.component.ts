import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Patient} from '../../model/patient.model';
import {State} from '../../../../store';
import {Store} from '@ngrx/store';
import {getSelectedPatient, UpdatePatient} from '../../store';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {tap} from 'rxjs/operators';

interface PatientForm {
  id: FormControl<number>;
  first_name: FormControl<string>;
  last_name: FormControl<string>;
  email: FormControl<string>;
  gender: FormControl<string>;
  diagnosis: FormControl<number>;
  address: FormControl<string>;
}

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
  public updatedPatient: Patient;

  patientFormGroup = new FormGroup<PatientForm>(
    {
      id: new FormControl<number>(-1),
      first_name: new FormControl<string>(''),
      last_name: new FormControl<string>(''),
      email: new FormControl<string>(''),
      gender: new FormControl<string>(''),
      diagnosis: new FormControl<number>(0),
      address: new FormControl<string>('')
    }
  );

  constructor(private readonly store: Store<State>) {
  }

  /**
   * Select the patient from the store.
   */
  ngOnInit() {
    this.patient$ = this.store.select(getSelectedPatient).pipe(tap(patient => {
      if (patient) {
        this.patientFormGroup.patchValue(patient);
      }
    }));
  }

  /**
   * Ask the store to update the patient.
   */
  update() {
    const patient: Patient = {
      id: this.patientFormGroup.controls.id.value,
      first_name: this.patientFormGroup.controls.first_name.value,
      last_name: this.patientFormGroup.controls.last_name.value,
      address: this.patientFormGroup.controls.address.value,
      gender: this.patientFormGroup.controls.gender.value,
      diagnosis: this.patientFormGroup.controls.diagnosis.value,
      email: this.patientFormGroup.controls.email.value
    };
    this.store.dispatch(UpdatePatient({patient}));
  }
}
