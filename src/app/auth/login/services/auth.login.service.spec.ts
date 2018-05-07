import { TestBed, inject } from '@angular/core/testing';

import { Auth.LoginService } from './auth.login.service';

describe('Auth.LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth.LoginService]
    });
  });

  it('should be created', inject([Auth.LoginService], (service: Auth.LoginService) => {
    expect(service).toBeTruthy();
  }));
});
