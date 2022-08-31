import {Component, OnDestroy, OnInit} from '@angular/core';
import {Address} from '../model/address.model';
import {faSortAlphaDown, faSortAlphaUp} from '@fortawesome/free-solid-svg-icons';
import {Observable, Subject} from 'rxjs';
import {State} from '../../../store';
import {Store} from '@ngrx/store';
import {LoadAddresses} from '../store/actions/address.actions';
import {selectSortedAddresses} from '../store/reducers';

@Component({
  selector: 'sse-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
})
export class AddressListComponent implements OnInit, OnDestroy {
  public faSortUp = faSortAlphaUp;
  public faSortDown = faSortAlphaDown;
  public addresses: Address[] = [];
  public addresses$: Observable<Address[]>;
  public sortColumn = 'line';
  public sortDirection = 'asc';

  private unsubscribe: Subject<void> = new Subject();

  constructor(private readonly store: Store<State>) {
  }

  ngOnInit() {
    this.store.dispatch(LoadAddresses());
    this.addresses$ = this.store.select(selectSortedAddresses(this.sortColumn, this.sortDirection));
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
    this.addresses$ = this.store.select(selectSortedAddresses(this.sortColumn, this.sortDirection));
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
