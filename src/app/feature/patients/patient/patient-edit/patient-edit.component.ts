import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Patient} from '../../model/patient.model';
import {State} from '../../../../store';
import {Store} from '@ngrx/store';
import {getSelectedPatient, UpdatePatient} from '../../store';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';

interface PatientForm {
  id: FormControl<number>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
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
      firstName: new FormControl<string>(''),
      lastName: new FormControl<string>(''),
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
    this.patient$ = this.store.select(getSelectedPatient);

    // TODO: Implement better way of doing this. Currently there is a memory leak, as we are subscribing and not unsubscribing.
    this.patient$.pipe(map(patient => {
      if (patient) {
        this.patientFormGroup.controls.id.setValue(patient.id);
        this.patientFormGroup.controls.firstName.setValue(patient.first_name);
        this.patientFormGroup.controls.lastName.setValue(patient.last_name);
        this.patientFormGroup.controls.email.setValue(patient.email);
        this.patientFormGroup.controls.gender.setValue(patient.gender);
        this.patientFormGroup.controls.diagnosis.setValue(patient.diagnosis);
        this.patientFormGroup.controls.address.setValue(patient.address);
      }
    })).subscribe();
  }

  /**
   * Ask the store to update the patient.
   */
  update() {
    const patient: Patient = {
      id: this.patientFormGroup.controls.id.value,
      first_name: this.patientFormGroup.controls.firstName.value,
      last_name: this.patientFormGroup.controls.lastName.value,
      address: this.patientFormGroup.controls.address.value,
      gender: this.patientFormGroup.controls.gender.value,
      diagnosis: this.patientFormGroup.controls.diagnosis.value,
      email: this.patientFormGroup.controls.email.value
    };
    this.store.dispatch(UpdatePatient({patient}));
  }
}
