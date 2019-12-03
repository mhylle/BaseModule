import {TestBed} from '@angular/core/testing';
import {DiagnoseService} from './diagnose.service';

describe('DiagnosisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiagnoseService = TestBed.get(DiagnoseService);
    expect(service).toBeTruthy();
  });
});
