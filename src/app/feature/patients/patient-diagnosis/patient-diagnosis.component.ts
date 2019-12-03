import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient.model';
import {PatientService} from '../patient.service';
import {DiagnosisService} from '../../diagnoses/diagnosis.service';
import {Diagnosis} from '../../diagnoses/model/diagnosis.model';

@Component({
  selector: 'sse-patient-diagnosis',
  templateUrl: './patient-diagnosis.component.html',
  styleUrls: ['./patient-diagnosis.component.css']
})
export class PatientDiagnosisComponent implements OnInit {
  private patient$: Observable<Patient>;
  private patientDiagnosis$: Observable<Diagnosis>;

  constructor(private readonly route: ActivatedRoute,
              private readonly patientService: PatientService,
              private diagnosisService: DiagnosisService) {
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
        return this.diagnosisService.getDiagnosis(patient.diagnosis);
      }));
  }

  updateDiagnosis(diagnosis: Diagnosis, patient: Patient) {
    patient.diagnosis = diagnosis.id;
  }

  savePatient(patient: Patient) {
    this.patientService.update(patient).subscribe((result) =>
      console.log(`${JSON.stringify(result)}`));
  }
}
