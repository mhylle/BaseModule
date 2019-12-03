import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiagnoseSelectorComponent} from './diagnosis-selector.component';

describe('DiagnosisSelectorComponent', () => {
  let component: DiagnoseSelectorComponent;
  let fixture: ComponentFixture<DiagnoseSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnoseSelectorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoseSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
