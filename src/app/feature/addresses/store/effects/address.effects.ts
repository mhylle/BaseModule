import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import * as fromAddresses from '../reducers';
import {selectAllAddresses} from '../reducers';
import {catchError, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {AddressesLoaded, AddressLoaded, LoadAddress, LoadAddresses} from '../actions/address.actions';
import {AddressesService} from '../../addresses.service';

@Injectable()
export class AddressEffects {
  // noinspection JSUnusedGlobalSymbols
  /**
   * Load a specific address and once it is  loaded initiate the {AddressLoaded} command
   */
  loadAddress$ = createEffect(() => this.actions$.pipe(
    ofType(LoadAddress),
    mergeMap((action) => this.addressesService.getAddress(action.addressId).pipe(
      map(address => ({type: AddressLoaded.type, address})),
      catchError(() => EMPTY)
    ))
  ));

  // noinspection JSUnusedGlobalSymbols
  /**
   * Load all addresses and once they are loaded initiate the {AddressesLoaded} command
   */
  loadAddresses$ = createEffect(() => this.actions$.pipe(
    ofType(LoadAddresses),
    withLatestFrom(this.store.select(selectAllAddresses)),
    switchMap(() => this.addressesService.addresses
      .pipe(
        map(addresses => {
          return ({type: AddressesLoaded.type, addresses});
        }),
        catchError(() => EMPTY)
      ))),
  );

  constructor(private readonly actions$: Actions,
              private readonly store: Store<fromAddresses.State>,
              private readonly addressesService: AddressesService) {
  }
}