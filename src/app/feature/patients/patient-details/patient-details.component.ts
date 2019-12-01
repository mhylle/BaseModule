import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Patient} from '../model/patient.model';
import {AddressesService} from '../../addresses/addresses.service';
import {Address} from '../../addresses/model/address.model';
import {Observable, of} from 'rxjs';

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

  constructor(private readonly addressesService: AddressesService) {
  }

  ngOnInit() {
    console.log('test0');
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.patient && this.patient.address) {
      this.patientAddress$ = this.addressesService.getAddress(this.patient.address);
    } else {
      this.patientAddress$ = of(null);
    }
  }

}
