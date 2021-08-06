import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {DiagnoseDetailsComponent} from './diagnose-details.component';


describe('DiagosisDetailsComponent', () => {
  let component: DiagnoseDetailsComponent;
  let fixture: ComponentFixture<DiagnoseDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnoseDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
