import {createAction, props} from '@ngrx/store';
import {Address} from '../../model/address.model';

export const LoadAddresses = createAction('[Addresses] Load Addresses');
export const AddressesLoaded = createAction('[Addresses] Addresses Loaded', props<{ addresses: Address[] }>());
