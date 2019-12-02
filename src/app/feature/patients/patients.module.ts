import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PatientsRoutingModule} from './patients-routing.module';
import {DiagnosisModule} from '../diagnoses/diagnosis.module';
import {AddressesModule} from '../addresses/addresses.module';
import {PatientViewerComponent} from './patient-viewer/patient-viewer.component';

@NgModule({
  declarations: [PatientsRoutingModule.components, PatientViewerComponent],
  imports: [
    SharedModule,
    PatientsRoutingModule,
    DiagnosisModule,
    AddressesModule,
  ]
})
export class PatientsModule {

}
