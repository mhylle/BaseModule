import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DiagnoseListComponent} from './diagnose-list/diagnose-list.component';
import {DiagnoseSelectorComponent} from './diagnose-selector/diagnose-selector.component';
import {DiagnoseDetailsComponent} from './diagnose-list/diagnose-details/diagnose-details.component';

const routes: Routes = [
  {path: '', component: DiagnoseListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnoseRoutingModule {
  static components = [DiagnoseListComponent, DiagnoseDetailsComponent, DiagnoseSelectorComponent];

}
