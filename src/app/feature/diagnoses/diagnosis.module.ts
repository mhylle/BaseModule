import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {DiagnosisRoutingModule} from './diagnosis-routing.module';
import {DiagnosisDetailsComponent} from './diagnosis-list/diagnosis-details/diagnosis-details.component';
import {DiagnosisSelectorComponent} from './diagnosis-selector/diagnosis-selector.component';
import {DiagnosesComponent} from './diagnoses/diagnoses.component';

@NgModule({
  declarations: [DiagnosisRoutingModule.components, DiagnosisDetailsComponent, DiagnosisSelectorComponent, DiagnosesComponent],
  exports: [
    DiagnosisDetailsComponent,
    DiagnosisSelectorComponent
  ],
  imports: [
    SharedModule,
    DiagnosisRoutingModule,
  ]
})
export class DiagnosisModule {

}
