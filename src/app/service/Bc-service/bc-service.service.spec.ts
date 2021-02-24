import { TestBed } from '@angular/core/testing';

import { BcServiceService } from './bc-service.service';

describe('BcServiceService', () => {
  let service: BcServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BcServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
