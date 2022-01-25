import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Diagnosis} from '../../model/diagnosis.model';

/**
 * details for a diagnosis.
 * Using the onPush change detection strategy to avoid the view being recreated on every change, but only when the data has changed.
 */
@Component({
  selector: 'sse-diagosis-details',
  templateUrl: './diagnosis-details.component.html',
  styleUrls: ['./diagnosis-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagnosisDetailsComponent implements OnInit {
  @Input()
  diagnose: Diagnosis;

  constructor() {
  }

  ngOnInit() {
  }

}
