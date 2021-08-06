import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

import {Diagnose} from '../model/diagnose.model';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {LoadDiagnoses} from '../store/actions/diagnose.actions';
import {selectAllDiagnoses, selectDiagnoseById} from '../store/reducers';

@Component({
  selector: 'sse-diagnose-selector',
  templateUrl: './diagnose-selector.component.html',
  styleUrls: ['./diagnose-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagnoseSelectorComponent implements OnInit {
  @Input()
  selectedDiagnoseId: number;
  @Output()
  diagnoseChanged: EventEmitter<Diagnose> = new EventEmitter<Diagnose>();

  selectedDiagnose: Diagnose;
  selectedDiagnose$: Observable<Diagnose>;
  diagnoses$: Observable<Diagnose[]>;

  constructor(private readonly store: Store<State>) {
  }

  ngOnInit() {
    this.store.dispatch(LoadDiagnoses());
    this.diagnoses$ = this.store.select(selectAllDiagnoses);
    this.selectedDiagnose$ = this.store.select(selectDiagnoseById(this.selectedDiagnoseId));
    this.selectedDiagnose$.subscribe(diagnose => this.selectedDiagnose = diagnose);
  }

  diagnoseChange() {
    this.diagnoseChanged.emit(this.selectedDiagnose);
  }
}
