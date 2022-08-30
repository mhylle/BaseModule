import * as fromDiagnoses from './diagnose.reducer';
import * as fromRoot from '../../../../store/reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface DiagnoseState {
  diagnoses: fromDiagnoses.DiagnoseState;
}

export interface State extends fromRoot.State {
  diagnoses: DiagnoseState;
}

export const reducers: ActionReducerMap<DiagnoseState> = {
  diagnoses: fromDiagnoses.diagnoseReducer,
};
