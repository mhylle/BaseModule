import * as fromPatients from './patient.reducer';
import * as fromRoot from '../../../../store/reducers';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface PatientState {
  patients: fromPatients.PatientState;
}

export interface State extends fromRoot.State {
  patients: PatientState;
}

export const reducers: ActionReducerMap<PatientState> = {
  patients: fromPatients.patientReducer
};

export const selectPatientState = createFeatureSelector<State, PatientState>('patients');

export const selectPatientEntitiesState = createSelector(
  selectPatientState,
  state => state.patients
);

export const selectAllPatients = createSelector(
  selectPatientEntitiesState,
  fromPatients.selectAll
);

export const selectPatientById = (patientId: string) => createSelector(
  selectPatientEntitiesState,
  patientState => patientState.entities[patientId]
);

export const {
  selectAll: getAllPatients,
  selectEntities: selectPatientEntities
} = fromPatients.adapter.getSelectors(selectPatientEntitiesState);
