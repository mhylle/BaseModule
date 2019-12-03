import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientDiagnosisComponent} from './patient-diagnosis.component';

describe('PatientDiagnosisComponent', () => {
  let component: PatientDiagnosisComponent;
  let fixture: ComponentFixture<PatientDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDiagnosisComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
