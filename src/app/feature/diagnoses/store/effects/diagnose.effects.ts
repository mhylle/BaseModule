import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import * as fromDiagnoses from '../reducers';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {DiagnosesLoaded, LoadDiagnoses} from '../actions/diagnose.actions';
import {DiagnoseService} from '../../diagnose.service';

@Injectable()
export class DiagnoseEffects {
  // noinspection JSUnusedGlobalSymbols
  loadDiagnoses$ = createEffect(() => this.actions$.pipe(
    ofType(LoadDiagnoses),
    mergeMap(() => this.diagnoseService.diagnoses
      .pipe(
        map(diagnoses => {
          return ({type: DiagnosesLoaded.type, diagnoses});
        }),
        catchError(() => EMPTY)
      ))),
  );

  constructor(private readonly actions$: Actions,
              private readonly store: Store<fromDiagnoses.State>,
              private readonly diagnoseService: DiagnoseService) {
  }
}
