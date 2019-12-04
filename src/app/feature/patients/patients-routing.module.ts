import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PatientListComponent} from './patient-list/patient-list.component';
import {PatientComponent} from './patient/patient.component';
import {PatientEditComponent} from './patient-edit/patient-edit.component';
import {PatientDetailsComponent} from './patient-details/patient-details.component';
import {PatientViewerComponent} from './patient-viewer/patient-viewer.component';
import {PatientDiagnoseComponent} from './patient-diagnose/patient-diagnose.component';

const routes: Routes = [
  {
    path: '', component: PatientComponent,
    children: [
      {path: '', component: PatientViewerComponent},
      {path: 'edit/:patientId', component: PatientEditComponent},
      {path: 'diagnose/:patientId', component: PatientDiagnoseComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule {
  static components = [PatientListComponent,
    PatientComponent,
    PatientDetailsComponent,
    PatientEditComponent,
    PatientViewerComponent,
    PatientDiagnoseComponent,
  ];
}
