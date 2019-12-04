import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPatients from '../reducers/patient.reducer';
import * as fromRoot from '../../../../store/reducers';
import {PatientState, State} from '../reducers';
import {Patient} from '../../model/patient.model';

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

export const getSelectedPatient = createSelector(
  selectPatientEntitiesState,
  fromRoot.getRouterInfo,
  (patientState, routerInfo): Patient => {
    return routerInfo.params.patientId ? patientState.entities[routerInfo.params.patientId] : null;
  }
);

export const {
  selectAll: getAllPatients,
  selectEntities: selectPatientEntities
} = fromPatients.adapter.getSelectors(selectPatientEntitiesState);

export const getPatientsLoaded = createSelector(
  selectPatientEntitiesState,
  fromPatients.getPatientsLoaded
);
export const getPatientsLoading = createSelector(
  selectPatientEntitiesState,
  fromPatients.getPatientsLoading
);
