import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {Diagnose} from '../model/diagnose.model';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {LoadDiagnoses, SelectDiagnose} from '../store/actions/diagnose.actions';
import {selectAllDiagnoses} from '../store/reducers';


@Component({
  selector: 'sse-diagnose-list',
  templateUrl: './diagnose-list.component.html',
  styleUrls: ['./diagnose-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagnoseListComponent implements OnInit {
  diagnoses$: Observable<Diagnose[]>;

  constructor(private readonly store: Store<State>) {
  }

  ngOnInit() {
    this.store.dispatch(LoadDiagnoses());
    this.diagnoses$ = this.store.select(selectAllDiagnoses);
  }

  selectDiagnose(diagnose: Diagnose) {
    this.store.dispatch(SelectDiagnose({diagnose}));
  }
}
