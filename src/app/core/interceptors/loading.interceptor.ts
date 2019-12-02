import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {LoadingService} from '../../shared/components/loading/loading.service';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {
  activeRequests = 0;

  /**
   * URLs for which the loading screen should not be enabled
   */
  skippUrls = [];

  constructor(private loadingService: LoadingService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let displayLoadingScreen = true;

    for (const skippUrl of this.skippUrls) {
      if (new RegExp(skippUrl).test(request.url)) {
        displayLoadingScreen = false;
        break;
      }
    }

    if (displayLoadingScreen) {
      if (this.activeRequests === 0) {
        this.loadingService.startLoading();
      }
      this.activeRequests++;

      return next.handle(request).pipe(
        finalize(() => {
          this.activeRequests--;
          if (this.activeRequests === 0) {
            this.loadingService.stopLoading();
          }
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
