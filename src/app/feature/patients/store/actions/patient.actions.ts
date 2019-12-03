import {createAction, props} from '@ngrx/store';
import {Patient} from '../../model/patient.model';

export const LoadPatients = createAction('[Patient] Load Patients');
export const PatientsLoaded = createAction('[Patient] Patients Loaded', props<{ patients: Patient[] }>());
