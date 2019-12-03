import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import * as DiagnoseActions from '../actions/diagnose.actions';
import {Diagnose} from '../../model/diagnose.model';

export const adapter: EntityAdapter<Diagnose> = createEntityAdapter<Diagnose>({
  selectId: (diagnose: Diagnose) => diagnose.id
});

export interface DiagnoseState extends EntityState<Diagnose> {
  loaded: boolean;
  loading: boolean;
  error: Error;
}

export const initialState: DiagnoseState = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: null
});

export const diagnoseReducer = createReducer(
  initialState,
  on(DiagnoseActions.LoadDiagnoses, state => ({...state, loading: true, loaded: false, error: null})),
  on(DiagnoseActions.DiagnosesLoaded, (state, {diagnoses}) => adapter.addMany(diagnoses, {
    ...state,
    loading: false,
    loaded: true,
    error: null
  })),
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
