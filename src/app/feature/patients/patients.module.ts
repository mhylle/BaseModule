import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PatientsRoutingModule} from './patients-routing.module';
import {DiagnosisModule} from '../diagnoses/diagnosis.module';
import {AddressesModule} from '../addresses/addresses.module';

@NgModule({
  declarations: [PatientsRoutingModule.components],
  imports: [
    SharedModule,
    PatientsRoutingModule,
    DiagnosisModule,
    AddressesModule,
  ]
})
export class PatientsModule {

}
