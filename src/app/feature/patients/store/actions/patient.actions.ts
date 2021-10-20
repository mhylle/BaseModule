import {createAction, props} from '@ngrx/store';
import {Patient} from '../../model/patient.model';

/**
 * Action signifying that we would like to load all patients
 */
export const LoadPatients = createAction('[Patient] Load Patients');
/**
 * Action signifying that all patients have been loaded.
 * @param a Patient[] of the patients that was loaded.
 */
export const PatientsLoaded = createAction('[Patient] Patients Loaded', props<{ patients: Patient[] }>());
/**
 * Action signifying that the load of patients fails
 * @param The Error that occurred.
 */
export const LoadPatientsFailed = createAction('[Patient] Patient Load Failed', props<{ error: Error }>());
export const UpdatePatient = createAction('[Patient] Update Patient', props<{ patient: Patient }>());
export const PatientUpdated = createAction('[Patient] Patient Updated', props<{ patient: Patient }>());
export const UpdatePatientFailed = createAction('[Patient] Patient Update Failed', props<{ error: Error }>());
