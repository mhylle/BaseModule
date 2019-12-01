import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PatientListComponent} from './patient-list/patient-list.component';
import {PatientComponent} from './patient/patient.component';

const routes: Routes = [
  {path: '', component: PatientComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule {
  static components = [PatientListComponent];

}
