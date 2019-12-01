import {Component, OnInit} from '@angular/core';
import {AddressesService} from '../addresses.service';
import {Observable} from 'rxjs';
import {Address} from '../model/address.model';

@Component({
  selector: 'sse-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  private addresses$: Observable<Address[]>;

  constructor(private readonly addressesService: AddressesService) {
  }

  ngOnInit() {
    this.addresses$ = this.addressesService.addresses;
  }

}
