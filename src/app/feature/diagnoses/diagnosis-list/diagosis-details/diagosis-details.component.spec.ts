import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DiagosisDetailsComponent} from './diagosis-details.component';

describe('DiagosisDetailsComponent', () => {
  let component: DiagosisDetailsComponent;
  let fixture: ComponentFixture<DiagosisDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DiagosisDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagosisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
