import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPatients from '../reducers/patient.reducer';
import * as fromRoot from '../../../../store/reducers';
import {PatientState} from '../reducers';
import {Patient} from '../../model/patient.model';

export const patientStoreKey = 'patients';

export const selectPatientState = createFeatureSelector<PatientState>(patientStoreKey);

export const selectPatientEntitiesState = createSelector(
  selectPatientState,
  state => state.patients
);

/**
 * Returns all the patients in the store
 */
export const selectAllPatients = createSelector(
  selectPatientEntitiesState,
  fromPatients.selectAll
);

/**
 * Retrieve a specific patient based on the patients id
 * @param patientId the id of the patient.
 */
export const selectPatientById = (patientId: string) => createSelector(
  selectPatientEntitiesState,
  patientState => patientState.entities[patientId]
);

/**
 * If a patient have been selected, retrieve it from here.
 */
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
