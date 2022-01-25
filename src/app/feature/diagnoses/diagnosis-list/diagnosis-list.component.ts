import {Component, OnInit} from '@angular/core';
import {DiagnosisService} from '../services/diagnosis.service';
import {Observable} from 'rxjs';
import {Diagnosis} from '../model/diagnosis.model';
import {listAnimation} from '../../../shared/animations/stagger-list.animation';

/**
 * Component for displaying a list of diagnoses.
 * When showing the items we do a staggered animation to make the items appear one after the other.
 */
@Component({
  selector: 'sse-diagnosis-list',
  templateUrl: './diagnosis-list.component.html',
  styleUrls: ['./diagnosis-list.component.scss'],
  animations: [listAnimation]
})
export class DiagnosisListComponent implements OnInit {
  diagnoses$: Observable<Diagnosis[]>;

  constructor(private readonly diagnosisService: DiagnosisService) {
  }

  ngOnInit() {
    this.diagnoses$ = this.diagnosisService.diagnoses;
  }

}
