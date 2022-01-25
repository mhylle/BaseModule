import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DiagnosesComponent} from './diagnoses.component';

describe('DiagnosesComponent', () => {
  let component: DiagnosesComponent;
  let fixture: ComponentFixture<DiagnosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagnosesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
