import { TestBed } from '@angular/core/testing';

import { EnrollnewstaffService } from './enrollnewstaff.service';

describe('EnrollnewstaffService', () => {
  let service: EnrollnewstaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollnewstaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
