import { Component, OnInit } from '@angular/core';

import { HttpAuthenticationService } from '../../../services/http/http-authentication.service';
import { User } from './models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit
{
  private data: User;

  constructor(private http: HttpAuthenticationService) { }

  ngOnInit()
  {
    this.http.getData('user')
        .subscribe(result => this.data = result);
  }
}
