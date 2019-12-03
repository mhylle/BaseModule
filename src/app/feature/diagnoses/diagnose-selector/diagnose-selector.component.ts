import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

import {Diagnose} from '../model/diagnose.model';
import {DiagnoseService} from '../diagnose.service';

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
  private diagnoses$: Observable<Diagnose[]>;

  constructor(private readonly diagnoseService: DiagnoseService) {
  }

  ngOnInit() {
    this.diagnoses$ = this.diagnoseService.diagnoses;
    this.diagnoseService.getDiagnose(this.selectedDiagnoseId)
      .subscribe(diagnose => this.selectedDiagnose = diagnose);
  }

  diagnoseChange() {
    this.diagnoseChanged.emit(this.selectedDiagnose);
  }
}
