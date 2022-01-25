import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DiagnosisListComponent} from './diagnosis-list/diagnosis-list.component';
import {DiagnosesComponent} from './diagnoses/diagnoses.component';

const routes: Routes = [
  {
    path: '', component: DiagnosesComponent,
    children: [
      {path: '', component: DiagnosisListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosisRoutingModule {
  static components = [DiagnosisListComponent];

}
