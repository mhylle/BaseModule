import {TestBed} from '@angular/core/testing';

import {DiagnosisService} from './diagnosis.service';

describe('DiagnosisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiagnosisService = TestBed.get(DiagnosisService);
    expect(service).toBeTruthy();
  });
});
