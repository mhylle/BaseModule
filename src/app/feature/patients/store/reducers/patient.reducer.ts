import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Patient} from '../../model/patient.model';
import {createReducer, on} from '@ngrx/store';
import * as PatientActions from '../actions/patient.actions';

export const adapter: EntityAdapter<Patient> = createEntityAdapter<Patient>({
  selectId: (patient: Patient) => patient.id
});

export interface PatientState extends EntityState<Patient> {
  loaded: boolean;
  loading: boolean;
  error: Error;
}

export const initialState: PatientState = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: null
});

export const patientReducer = createReducer(
  initialState,
  on(PatientActions.LoadPatients, state => ({...state, loading: true, loaded: false, error: null})),
  on(PatientActions.PatientsLoaded, (state, {patients}) => adapter.addMany(patients, {
    ...state,
    loading: false,
    loaded: true,
    error: null
  })),
  on(PatientActions.UpdatePatient, (state, {patient}) => ({...state, loading: true, loaded: false, error: null})),
  on(PatientActions.PatientUpdated, (state, {patient}) => adapter.upsertOne(patient, {
      ...state,
      loading: false,
      loaded: true,
      error: null
    })
  ));


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

export const getPatientEntities = (state: PatientState) => state.entities;
export const getPatientsLoaded = (state: PatientState) => state.loaded;
export const getPatientsLoading = (state: PatientState) => state.loading;
