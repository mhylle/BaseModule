import {Component, Input, OnInit} from '@angular/core';
import {Diagnosis} from '../../model/diagnosis.model';

@Component({
  selector: 'sse-diagosis-details',
  templateUrl: './diagosis-details.component.html',
  styleUrls: ['./diagosis-details.component.css']
})
export class DiagosisDetailsComponent implements OnInit {
  @Input()
  diagnose: Diagnosis;

  constructor() {
  }

  ngOnInit() {
  }

}
