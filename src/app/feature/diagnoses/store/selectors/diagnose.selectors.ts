import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromDiagnoses from '../reducers/diagnose.reducer';
import {DiagnoseState} from '../reducers';

export const diagnoseStoreKey = 'diagnoses';

export const selectDiagnoseState = createFeatureSelector<DiagnoseState>(diagnoseStoreKey);

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

export const getSelectedDiagnose = createSelector(
  selectDiagnoseEntitiesState,
  fromDiagnoses.getSelectedDiagnose
);
