import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PatientsRoutingModule} from './patients-routing.module';
import {AddressesModule} from '../addresses/addresses.module';
import {StoreModule} from '@ngrx/store';
import * as fromPatientState from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {PatientEffects} from './store/effects';
import {DiagnoseModule} from '../diagnoses/diagnose.module';

@NgModule({
  declarations: [PatientsRoutingModule.components],
  imports: [
    SharedModule,
    PatientsRoutingModule,
    DiagnoseModule,
    AddressesModule,
    StoreModule.forFeature('patients', fromPatientState.reducers),
    EffectsModule.forFeature([PatientEffects])
  ]
})
export class PatientsModule {

}
