import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {DiagnoseRoutingModule} from './diagnose-routing.module';
import {DiagnoseSelectorComponent} from './diagnose-selector/diagnose-selector.component';
import {StoreModule} from '@ngrx/store';
import * as fromDiagnoseState from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {DiagnoseEffects} from './store/effects/diagnose.effects';
import {DiagnoseDetailsComponent} from './diagnose-list/diagnose-details/diagnose-details.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';

@NgModule({
  declarations: [DiagnoseRoutingModule.components, DiagnosisComponent],
  exports: [
    DiagnoseDetailsComponent,
    DiagnoseSelectorComponent
  ],
  imports: [
    SharedModule,
    DiagnoseRoutingModule,
    StoreModule.forFeature('diagnoses', fromDiagnoseState.reducers),
    EffectsModule.forFeature([DiagnoseEffects])
  ]
})
export class DiagnoseModule {

}
