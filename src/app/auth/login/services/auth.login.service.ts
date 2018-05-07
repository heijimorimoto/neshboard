import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpAuthenticationService } from '../../../services/http/http-authentication.service';
import { User } from '../../../views/auth/user/models/User';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthLoginService
{
  private _logged: Subject<any> = new Subject();
  public logged$: Observable<any> = this._logged.asObservable();

  constructor(
    private http: HttpAuthenticationService,
    private router: Router
  ) { }

  public authenticate(body: User)
  {
    // this.http.storeData('auth', body);
    console.log(body);
    this.router.navigate(['/dashboard']);
  }

  public isLogged(value): void
  {
    this._logged.next(value);
  }
}
