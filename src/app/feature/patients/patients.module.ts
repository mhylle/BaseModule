import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PatientsRoutingModule} from './patients-routing.module';
import {DiagnosisModule} from '../diagnoses/diagnosis.module';
import {AddressesModule} from '../addresses/addresses.module';
import {PatientDiagnosisComponent} from './patient-diagnosis/patient-diagnosis.component';

@NgModule({
  declarations: [PatientsRoutingModule.components, PatientDiagnosisComponent],
  imports: [
    SharedModule,
    PatientsRoutingModule,
    DiagnosisModule,
    AddressesModule,
  ]
})
export class PatientsModule {

}
