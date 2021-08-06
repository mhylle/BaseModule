import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {DiagnoseSelectorComponent} from './diagnose-selector.component';
import {StoreModule} from '@ngrx/store';

describe('DiagnosisSelectorComponent', () => {
  let component: DiagnoseSelectorComponent;
  let fixture: ComponentFixture<DiagnoseSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
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
