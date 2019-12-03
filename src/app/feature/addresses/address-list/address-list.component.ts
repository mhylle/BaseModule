import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Address} from '../model/address.model';
import {faSortAlphaDown, faSortAlphaUp} from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {State} from '../../../store/reducers';
import {Store} from '@ngrx/store';
import {LoadAddresses} from '../store/actions/address.actions';
import {selectAllAddresses} from '../store/reducers';

@Component({
  selector: 'sse-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressListComponent implements OnInit, OnDestroy {
  public faSortUp = faSortAlphaUp;
  public faSortDown = faSortAlphaDown;
  public addresses: Address[] = [];
  public sortColumn = 'line';
  public sortDirection = 'asc';

  private unsubscribe: Subject<void> = new Subject();

  constructor(private readonly store: Store<State>) {
  }

  ngOnInit() {
    this.store.dispatch(LoadAddresses());
    this.store.select(selectAllAddresses).pipe(takeUntil(this.unsubscribe)).subscribe(addresses => {
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
