import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import * as AddressActions from '../actions/address.actions';
import {Address} from '../../model/address.model';

export const adapter: EntityAdapter<Address> = createEntityAdapter<Address>({
  selectId: (address: Address) => address.id
});

export interface AddressState extends EntityState<Address> {
  loaded: boolean;
  loading: boolean;
  error: Error;
}

export const initialState: AddressState = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: null
});

export const addressReducer = createReducer(
  initialState,
  on(AddressActions.LoadAddresses, state => ({...state, loading: true, loaded: false, error: null})),
  on(AddressActions.AddressesLoaded, (state, {addresses}) => adapter.addMany(addresses, {
    ...state,
    loading: false,
    loaded: true,
    error: null
  })),
  on(AddressActions.LoadAddress, state => ({...state, loading: true, loaded: false, error: null})),
  on(AddressActions.AddressLoaded, (state, {address}) => adapter.addOne(address, {
    ...state,
    loading: false,
    loaded: true,
    error: null
  })),
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
