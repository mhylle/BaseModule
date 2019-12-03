import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Patient} from '../model/patient.model';
import {AddressesService} from '../../addresses/addresses.service';
import {Address} from '../../addresses/model/address.model';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {DiagnoseService} from '../../diagnoses/diagnose.service';
import {Diagnose} from '../../diagnoses/model/diagnose.model';

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
              private readonly addressesService: AddressesService,
              private readonly diagnoseService: DiagnoseService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.patient) {
      if (this.patient.address) {
        this.patientAddress$ = this.addressesService.getAddress(this.patient.address);
      } else {
        this.patientAddress$ = of(null);
      }
      if (this.patient.diagnosis) {
        this.patientDiagnose$ = this.diagnoseService.getDiagnose(this.patient.diagnosis);
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
