import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {PatientService} from '../../patient.service';
import * as fromPatients from '../reducers';
import {LoadPatients, PatientsLoaded} from '../actions/patient.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class PatientEffects {
  // noinspection JSUnusedGlobalSymbols
  loadPatients$ = createEffect(() => this.actions$.pipe(
    ofType(LoadPatients),
    mergeMap(() => this.patientService.patients
      .pipe(
        map(patients => {
          return ({type: PatientsLoaded.type, patients});
        }),
        catchError(() => EMPTY)
      ))),
  );

  constructor(private readonly actions$: Actions,
              private readonly store: Store<fromPatients.State>,
              private readonly patientService: PatientService) {
  }
}
