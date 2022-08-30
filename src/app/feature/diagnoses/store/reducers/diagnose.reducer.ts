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
  selectedDiagnose?: Diagnose;
  error: Error;
}

export const initialState: DiagnoseState = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: null,
  selectedDiagnose: null
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
  on(DiagnoseActions.LoadDiagnosis, state => ({...state, loading: true, loaded: false, error: null})),
  on(DiagnoseActions.DiagnoseLoaded, (state, {diagnose}) => adapter.addOne(diagnose, {
    ...state,
    loading: false,
    loaded: true,
    error: null
  })),
  on(DiagnoseActions.SelectDiagnose, (state, {diagnose}) => ({
      ...state,
      loading: false,
      loaded: true,
      error: null,
      selectedDiagnose: diagnose
    })
  ));

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

export const getSelectedDiagnose = (state: DiagnoseState) => state.selectedDiagnose;
