import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PatientListComponent} from './patient-list/patient-list.component';

const routes: Routes = [
  {path: '', component: PatientListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule {
  static components = [PatientListComponent];

}
