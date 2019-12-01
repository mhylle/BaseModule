import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PatientsRoutingModule} from './patients-routing.module';

@NgModule({
  declarations: [PatientsRoutingModule.components],
  imports: [
    SharedModule,
    PatientsRoutingModule,
  ]
})
export class PatientsModule {

}
