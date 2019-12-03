import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Diagnose} from '../../model/diagnose.model';

@Component({
  selector: 'sse-diagnose-details',
  templateUrl: './diagnose-details.component.html',
  styleUrls: ['./diagnose-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagnoseDetailsComponent implements OnInit {
  @Input()
  diagnose: Diagnose;

  constructor() {
  }

  ngOnInit() {
  }

}
