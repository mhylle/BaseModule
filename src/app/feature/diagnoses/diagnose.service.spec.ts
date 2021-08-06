import {TestBed} from '@angular/core/testing';
import {DiagnoseService} from './diagnose.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DiagnosisService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: []
  }));

  it('should be created', () => {
    const service: DiagnoseService = TestBed.get(DiagnoseService);
    expect(service).toBeTruthy();
  });
});
