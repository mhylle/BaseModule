import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {PatientDiagnoseComponent} from './patient-diagnosis.component';

describe('PatientDiagnosisComponent', () => {
  let component: PatientDiagnoseComponent;
  let fixture: ComponentFixture<PatientDiagnoseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDiagnoseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDiagnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
