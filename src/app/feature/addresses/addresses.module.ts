import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {AddressesRoutingModule} from './addresses-routing.module';
import {AddressDetailsComponent} from './address-details/address-details.component';

@NgModule({
  declarations: [AddressesRoutingModule.components, AddressDetailsComponent,],
  exports: [
    AddressDetailsComponent
  ],
  imports: [
    SharedModule,
    AddressesRoutingModule,
  ]
})
export class AddressesModule {

}
