import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import * as fromAddresses from '../reducers';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {AddressesLoaded, LoadAddresses} from '../actions/address.actions';
import {AddressesService} from '../../addresses.service';

@Injectable()
export class AddressEffects {
  // noinspection JSUnusedGlobalSymbols
  loadAddresses$ = createEffect(() => this.actions$.pipe(
    ofType(LoadAddresses),
    mergeMap(() => this.addressesService.addresses
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
