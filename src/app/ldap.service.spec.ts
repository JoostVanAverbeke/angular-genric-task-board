import { TestBed, inject } from '@angular/core/testing';

import { LDAPService } from './ldap.service';

describe('LDAPService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LDAPService]
    });
  });

  it('should ...', inject([LDAPService], (service: LDAPService) => {
    expect(service).toBeTruthy();
  }));
});
