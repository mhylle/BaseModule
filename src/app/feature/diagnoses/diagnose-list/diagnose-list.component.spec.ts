import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DiagnoseListComponent} from './diagnose-list.component';

describe('DiagnosisListComponent', () => {
  let component: DiagnoseListComponent;
  let fixture: ComponentFixture<DiagnoseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnoseListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
