import * as fromDiagnoses from './diagnose.reducer';
import * as fromRoot from '../../../../store/reducers';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface DiagnoseState {
  diagnoses: fromDiagnoses.DiagnoseState;
}

export interface State extends fromRoot.State {
  diagnoses: DiagnoseState;
}

export const reducers: ActionReducerMap<DiagnoseState> = {
  diagnoses: fromDiagnoses.diagnoseReducer
};

export const selectDiagnoseState = createFeatureSelector< DiagnoseState>('diagnoses');

export const selectDiagnoseEntitiesState = createSelector(
  selectDiagnoseState,
  state => state.diagnoses
);

/**
 * Retrieve all diagnoses from the state
 */
export const selectAllDiagnoses = createSelector(
  selectDiagnoseEntitiesState,
  fromDiagnoses.selectAll
);

/**
 * Select a specific diagnose based on an id
 * @param diagnoseId the id of the diagnose we wish to retrieve.
 */
export const selectDiagnoseById = (diagnoseId: number) => createSelector(
  selectDiagnoseEntitiesState,
  diagnoseState => diagnoseState.entities[diagnoseId]
);

export const {
  selectAll: getAllDiagnoses,
  selectEntities: selectDiagnoseEntities
} = fromDiagnoses.adapter.getSelectors(selectDiagnoseEntitiesState);
