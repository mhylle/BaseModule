import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddressesComponent} from './addresses/addresses.component';
import {AddressListComponent} from './address-list/address-list.component';


const routes: Routes = [
  {path: '', component: AddressesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressesRoutingModule {
  static components = [AddressesComponent, AddressListComponent];

}
