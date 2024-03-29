import {Component, OnDestroy, OnInit} from '@angular/core';
import {AddressesService} from '../services/addresses.service';
import {Address} from '../model/address.model';
import {faSortAlphaDown, faSortAlphaUp} from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'sse-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit, OnDestroy {
  public faSortUp = faSortAlphaUp;
  public faSortDown = faSortAlphaDown;
  public addresses: Address[] = [];
  public sortColumn = 'line';
  public sortDirection = 'asc';

  private unsubscribe: Subject<void> = new Subject();

  constructor(private readonly addressesService: AddressesService) {
  }

  ngOnInit() {
    this.addressesService.addresses.pipe(takeUntil(this.unsubscribe)).subscribe(addresses => {
      this.addresses = addresses;
      this.sort(this.sortColumn, this.sortDirection);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  sort(sortColumn: string, sortDirection: string) {
    if (sortDirection === 'asc') {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = 'desc';
    }
    this.sortColumn = sortColumn;
    this.addresses = _.orderBy(this.addresses, sortColumn, sortDirection);
  }

  /**
   * Performance enhancements.
   * @param index index in the list
   * @param item the patient we are currently at
   */
  idTracker(index, item: Address) {
    if (!item) {
      return null;
    }
    return item.id;
  }

}
