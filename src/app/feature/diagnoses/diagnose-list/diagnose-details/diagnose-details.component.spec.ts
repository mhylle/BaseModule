import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiagoseDetailsComponent} from './diagosis-details.component';

describe('DiagosisDetailsComponent', () => {
  let component: DiagoseDetailsComponent;
  let fixture: ComponentFixture<DiagoseDetailsComponent>;

  beforeEach(async(() => {
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
