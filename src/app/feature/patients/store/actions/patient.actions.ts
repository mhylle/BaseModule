import {createAction, props} from '@ngrx/store';
import {Patient} from '../../model/patient.model';

export const LoadPatients = createAction('[Patient] Load Patients');
export const PatientsLoaded = createAction('[Patient] Patients Loaded', props<{ patients: Patient[] }>());
export const LoadPatientsFailed = createAction('[Patient] Patient Load Failed', props<{ error: Error }>());
export const UpdatePatient = createAction('[Patient] Update Patient', props<{ patient: Patient }>());
export const PatientUpdated = createAction('[Patient] Patient Updated', props<{ patient: Patient }>());
export const UpdatePatientFailed = createAction('[Patient] Patient Update Failed', props<{ error: Error }>());
