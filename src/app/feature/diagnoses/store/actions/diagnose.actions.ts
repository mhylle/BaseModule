import {createAction, props} from '@ngrx/store';
import {Diagnose} from '../../model/diagnose.model';

export const LoadDiagnoses = createAction('[Diagnose] Load Diagnoses');
export const DiagnosesLoaded = createAction('[Diagnose] Diagnoses Loaded', props<{ diagnoses: Diagnose[] }>());
export const LoadDiagnosis = createAction('[Diagnose] Load Diagnose', props<{ diagnoseId: number }>());
export const DiagnoseLoaded = createAction('[Diagnose] Diagnose Loaded', props<{ diagnose: Diagnose }>());
export const SelectDiagnose = createAction('[Diagnose] SelectDiagnose', props<{ diagnose: Diagnose }>());
export const DiagnoseSelected = createAction('[Diagnose] DiagnoseSelected', props<{ diagnose: Diagnose }>());
