import {TestBed} from '@angular/core/testing';

import {AddressesService} from './addresses.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AddressesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: AddressesService = TestBed.get(AddressesService);
    expect(service).toBeTruthy();
  });
});
