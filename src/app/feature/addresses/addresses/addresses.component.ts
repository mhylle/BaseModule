import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'sse-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
