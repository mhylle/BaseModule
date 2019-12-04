import * as fromPatients from './patient.reducer';
import * as fromRoot from '../../../../store/reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface PatientState {
  patients: fromPatients.PatientState;
}

export interface State extends fromRoot.State {
  patients: PatientState;
}

export const reducers: ActionReducerMap<PatientState> = {
  patients: fromPatients.patientReducer
};

