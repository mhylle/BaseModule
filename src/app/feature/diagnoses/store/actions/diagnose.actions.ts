import {createAction, props} from '@ngrx/store';
import {Diagnose} from '../../model/diagnose.model';

export const LoadDiagnoses = createAction('[Diagnose] Load Diagnoses');
export const DiagnosesLoaded = createAction('[Diagnose] Diagnoses Loaded', props<{ diagnoses: Diagnose[] }>());
