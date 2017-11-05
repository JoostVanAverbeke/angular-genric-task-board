import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateWhenAuthenticatedGuard } from './can-activate-when-authenticated.guard';

describe('CanActivateWhenAuthenticatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateWhenAuthenticatedGuard]
    });
  });

  it('should ...', inject([CanActivateWhenAuthenticatedGuard], (guard: CanActivateWhenAuthenticatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
