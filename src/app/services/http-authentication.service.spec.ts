import { TestBed, inject } from '@angular/core/testing';

import { HttpAuthenticationService } from './http-authentication.service';

describe('HttpAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpAuthenticationService]
    });
  });

  it('should be created', inject([HttpAuthenticationService], (service: HttpAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
