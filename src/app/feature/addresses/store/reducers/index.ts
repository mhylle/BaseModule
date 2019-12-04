import * as fromAddresses from './address.reducer';
import * as fromRoot from '../../../../store/reducers';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as _ from 'lodash';

export interface AddressState {
  addresses: fromAddresses.AddressState;
}

export interface State extends fromRoot.State {
  addresses: AddressState;
}

export const reducers: ActionReducerMap<AddressState> = {
  addresses: fromAddresses.addressReducer
};

export const selectAddressState = createFeatureSelector<State, AddressState>('addresses');

export const selectAddressEntitiesState = createSelector(
  selectAddressState,
  state => state.addresses
);

export const selectAllAddresses = createSelector(
  selectAddressEntitiesState,
  fromAddresses.selectAll
);

export const selectSortedAddresses = (sortColumn: string, sortOrder: string) => createSelector(
  selectAllAddresses,
  addresses => _.orderBy(addresses, sortColumn, sortOrder)
);

export const selectAddressById = (addressId: string) => createSelector(
  selectAddressEntitiesState,
  addressState => addressState.entities[addressId]
);

export const {
  selectAll: getAllAddresses,
  selectEntities: selectAddressEntities
} = fromAddresses.adapter.getSelectors(selectAddressEntitiesState);