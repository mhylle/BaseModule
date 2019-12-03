import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'sse-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
