import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DiagnosisService} from '../diagnosis.service';
import {Observable} from 'rxjs';
import {Diagnosis} from '../model/diagnosis.model';

@Component({
  selector: 'sse-diagnosis-selector',
  templateUrl: './diagnosis-selector.component.html',
  styleUrls: ['./diagnosis-selector.component.css']
})
export class DiagnosisSelectorComponent implements OnInit {
  @Input()
  selectedDiagnosisId: number;
  @Output()
  diagnosisChanged: EventEmitter<Diagnosis> = new EventEmitter<Diagnosis>();
  selectedDiagnosis: Diagnosis;
  private diagnoses$: Observable<Diagnosis[]>;

  constructor(private readonly diagnosisService: DiagnosisService) {
  }

  ngOnInit() {
    this.diagnoses$ = this.diagnosisService.diagnoses;
    this.diagnosisService.getDiagnosis(this.selectedDiagnosisId)
      .subscribe(diagnosis => this.selectedDiagnosis = diagnosis);
  }

  diagnosisChange() {
    this.diagnosisChanged.emit(this.selectedDiagnosis);
  }
}
