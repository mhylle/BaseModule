import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {DiagoseDetailsComponent} from './diagosis-details.component';

describe('DiagosisDetailsComponent', () => {
  let component: DiagoseDetailsComponent;
  let fixture: ComponentFixture<DiagoseDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DiagoseDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagoseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
