import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {DiagnosisRoutingModule} from './diagnosis-routing.module';
import {DiagosisDetailsComponent} from './diagnosis-list/diagosis-details/diagosis-details.component';

@NgModule({
  declarations: [DiagnosisRoutingModule.components, DiagosisDetailsComponent],
  exports: [
    DiagosisDetailsComponent
  ],
  imports: [
    SharedModule,
    DiagnosisRoutingModule,
  ]
})
export class DiagnosisModule {

}
