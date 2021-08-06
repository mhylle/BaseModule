import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {PatientDetailsComponent} from './patient-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';

describe('PatientDetailsComponent', () => {
  let component: PatientDetailsComponent;
  let fixture: ComponentFixture<PatientDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), RouterTestingModule.withRoutes([])],
      declarations: [PatientDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
