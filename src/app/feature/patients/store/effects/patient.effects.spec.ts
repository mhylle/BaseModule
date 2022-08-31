import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';

const action$ = new Observable<Action>();

TestBed.configureTestingModule({
  providers: [provideMockActions(() => action$)]
});
