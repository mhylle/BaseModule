import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DiagnosisDetailsComponent} from './diagnosis-details.component';

describe('DiagosisDetailsComponent', () => {
  let component: DiagnosisDetailsComponent;
  let fixture: ComponentFixture<DiagnosisDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
