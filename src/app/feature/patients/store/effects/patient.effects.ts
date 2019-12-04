import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {PatientService} from '../../patient.service';
import * as fromPatients from '../selectors';
import * as fromPatientReducers from '../reducers';
import {LoadPatients, PatientsLoaded, PatientUpdated, UpdatePatient, UpdatePatientFailed} from '../actions';
import {catchError, concatMap, map, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class PatientEffects {
  // noinspection JSUnusedGlobalSymbols
  updatePatient$ = createEffect(() => this.actions$.pipe(
    ofType(UpdatePatient),
    mergeMap((action) => this.patientService.update(action.patient)
      .pipe(
        map(patient => ({type: PatientUpdated.type, patient})),
        catchError((err) => of({type: UpdatePatientFailed.type, err}))
      ))
    )
  );

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
  // noinspection JSUnusedGlobalSymbols
  patientUpdated$ = createEffect(() => this.actions$.pipe(
    ofType(PatientUpdated),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(fromPatients.getAllPatients)))
    )),
    tap(([result]) => {
        if (result) {
          // noinspection JSIgnoredPromiseFromCall
          this.router.navigate([`/patients`]);
        }
      }
    )),
    {dispatch: false}
  );

  constructor(private readonly actions$: Actions,
              private readonly router: Router,
              private readonly store: Store<fromPatientReducers.State>,
              private readonly patientService: PatientService) {
  }
}
