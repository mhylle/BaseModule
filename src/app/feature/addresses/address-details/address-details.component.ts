import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Address} from '../model/address.model';

@Component({
  selector: 'sse-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressDetailsComponent implements OnInit {
  @Input()
  address: Address;

  constructor() {
  }

  ngOnInit() {
  }
}
