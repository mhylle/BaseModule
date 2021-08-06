import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {DiagnoseListComponent} from './diagnose-list.component';
import {HttpClient} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

describe('DiagnosisListComponent', () => {
  let component: DiagnoseListComponent;
  let fixture: ComponentFixture<DiagnoseListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [DiagnoseListComponent],
      providers: [HttpClient]
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
