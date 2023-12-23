import { TestBed } from '@angular/core/testing';

import { StaffloginService } from './stafflogin.service';

describe('StaffloginService', () => {
  let service: StaffloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
