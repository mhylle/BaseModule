import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Diagnose} from '../model/diagnose.model';
import {Store} from '@ngrx/store';
import {DiagnoseState} from '../store/reducers/diagnose.reducer';
import {getSelectedDiagnose} from '../store/reducers';

@Component({
  selector: 'sse-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  public selectedDiagnosis$?: Observable<Diagnose>;
  constructor(private readonly store: Store<DiagnoseState>) {
  }

  ngOnInit(): void {
    this.selectedDiagnosis$ = this.store.select(getSelectedDiagnose);
  }

}
