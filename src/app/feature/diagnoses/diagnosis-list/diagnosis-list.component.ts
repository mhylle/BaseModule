import {Component, OnInit} from '@angular/core';
import {DiagnosisService} from '../diagnosis.service';
import {Observable} from 'rxjs';
import {Diagnosis} from '../model/diagnosis.model';

@Component({
  selector: 'sse-diagnosis-list',
  templateUrl: './diagnosis-list.component.html',
  styleUrls: ['./diagnosis-list.component.css']
})
export class DiagnosisListComponent implements OnInit {
  private diagnoses$: Observable<Diagnosis[]>;

  constructor(private readonly diagnosisService: DiagnosisService) {
  }

  ngOnInit() {
    this.diagnoses$ = this.diagnosisService.diagnoses;
  }

}
