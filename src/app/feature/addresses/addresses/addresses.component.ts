import {Component, OnInit} from '@angular/core';

/**
 * This is the parent component for the Address module. It's main purpose is to provide an entry point into the internal
 * navigation for the adresses module. Functionality in here should be kept to a minimum.
 */
@Component({
  selector: 'sse-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
