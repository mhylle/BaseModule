import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {AddressesRoutingModule} from './addresses-routing.module';
import {AddressDetailsComponent} from './address-details/address-details.component';
import {StoreModule} from '@ngrx/store';
import * as fromAddressState from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {AddressEffects} from './store/effects/address.effects';

@NgModule({
  declarations: [AddressesRoutingModule.components],
  exports: [
    AddressDetailsComponent
  ],
  imports: [
    SharedModule,
    AddressesRoutingModule,
    StoreModule.forFeature('addresses', fromAddressState.reducers),
    EffectsModule.forFeature([AddressEffects])
  ]
})
export class AddressesModule {

}
