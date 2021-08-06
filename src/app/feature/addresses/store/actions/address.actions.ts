import {createAction, props} from '@ngrx/store';
import {Address} from '../../model/address.model';

export const LoadAddresses = createAction('[Addresses] Load Addresses');
export const AddressesLoaded = createAction('[Addresses] Addresses Loaded', props<{ addresses: Address[] }>());
export const LoadAddress = createAction('[Addresses] Load Address', props<{ addressId: string }>());
export const AddressLoaded = createAction('[Addresses] Address Loaded', props<{ address: Address }>());
