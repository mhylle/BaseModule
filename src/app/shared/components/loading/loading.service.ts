import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

/**
 * Service for handling the state of when the application is loading.
 */
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingStatus: Subject<boolean> = new Subject();
  private isLoading = false;

  get loading(): boolean {
    return this.isLoading;
  }

  set loading(value) {
    this.isLoading = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }
}
