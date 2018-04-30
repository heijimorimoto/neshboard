import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpAuthenticationService
{

  private endpoint = 'http://pharm.sc/api';

  constructor(private http: HttpClient) { }

  public getData(url): Observable<any>
  {
    return this.http.get(`${this.endpoint}/${url}`);
  }
}
