import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {PatientService} from '../patient.service';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient.model';
import {State} from '../../../store/reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'sse-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientEditComponent implements OnInit {
  message: string;
  private patient$: Observable<Patient>;

  constructor(private readonly route: ActivatedRoute,
              private readonly store: Store<State>,
              private readonly patientService: PatientService) {
  }

  ngOnInit() {
    this.patient$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.patientService.getPatient(params.get('id'));
        }
      )
    );
  }

  update(patient: Patient) {
    this.patientService.update(patient).subscribe(
      result => this.message = `Patient ${patient.id} was updated (${JSON.stringify(result)})`,
      error => this.message = `An error occured ${JSON.stringify(error)}`);
  }
}
