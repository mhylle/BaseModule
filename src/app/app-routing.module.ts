import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'patients',
    loadChildren: () => import('./feature/patients/patients.module').then(m => m.PatientsModule)
  },
  {
    path: 'diagnosis',
    loadChildren: () => import('./feature/diagnoses/diagnosis.module').then(m => m.DiagnosisModule)
  },
  {
    path: 'addresses',
    loadChildren: () => import('./feature/addresses/addresses.module').then(m => m.AddressesModule)
  },
  {path: '**', pathMatch: 'full', redirectTo: '/'} // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
