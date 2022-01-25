import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {DiagnosisRoutingModule} from './diagnosis-routing.module';
import {DiagosisDetailsComponent} from './diagnosis-list/diagosis-details/diagosis-details.component';
import {DiagnosisSelectorComponent} from './diagnosis-selector/diagnosis-selector.component';
import {DiagnosesComponent} from './diagnoses/diagnoses.component';

@NgModule({
  declarations: [DiagnosisRoutingModule.components, DiagosisDetailsComponent, DiagnosisSelectorComponent, DiagnosesComponent],
  exports: [
    DiagosisDetailsComponent,
    DiagnosisSelectorComponent
  ],
  imports: [
    SharedModule,
    DiagnosisRoutingModule,
  ]
})
export class DiagnosisModule {

}
