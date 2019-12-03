import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient.model';
import {PatientService} from '../patient.service';
import {Diagnose} from '../../diagnoses/model/diagnose.model';
import {DiagnoseService} from '../../diagnoses/diagnose.service';

@Component({
  selector: 'sse-patient-diagnose',
  templateUrl: './patient-diagnose.component.html',
  styleUrls: ['./patient-diagnose.component.css']
})
export class PatientDiagnoseComponent implements OnInit {
  private patient$: Observable<Patient>;
  private patientDiagnosis$: Observable<Diagnose>;

  constructor(private readonly route: ActivatedRoute,
              private readonly patientService: PatientService,
              private diagnoseService: DiagnoseService) {
  }

  ngOnInit() {
    this.patient$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.patientService.getPatient(params.get('id'));
        }
      )
    );
    this.patientDiagnosis$ = this.patient$.pipe(
      switchMap(patient => {
        return this.diagnoseService.getDiagnose(patient.diagnosis);
      }));
  }

  updateDiagnose(diagnose: Diagnose, patient: Patient) {
    patient.diagnosis = diagnose.id;
  }

  savePatient(patient: Patient) {
    this.patientService.update(patient).subscribe((result) =>
      console.log(`${JSON.stringify(result)}`));
  }
}
