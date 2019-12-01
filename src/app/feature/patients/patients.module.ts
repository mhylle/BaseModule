import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PatientsRoutingModule} from './patients-routing.module';
import {PatientComponent} from './patient/patient.component';
import {DiagnosisModule} from '../diagnoses/diagnosis.module';
import {PatientDetailsComponent} from './patient-details/patient-details.component';

@NgModule({
  declarations: [PatientsRoutingModule.components, PatientComponent, PatientDetailsComponent],
  imports: [
    SharedModule,
    PatientsRoutingModule,
    DiagnosisModule,
  ]
})
export class PatientsModule {

}
