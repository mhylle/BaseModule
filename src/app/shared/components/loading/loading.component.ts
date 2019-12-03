import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {LoadingService} from './loading.service';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'sse-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements AfterViewInit, OnDestroy {
  loading = false;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private readonly loadingService: LoadingService) {
  }

  ngAfterViewInit() {
    // this.elmRef.nativeElement.style.display = 'none';
    this.loadingService.loadingStatus
      .pipe(debounceTime(100))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((value) => {
        this.loading = value;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
