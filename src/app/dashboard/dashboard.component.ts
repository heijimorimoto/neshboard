import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpAuthenticationService } from '../services/http/http-authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit
{
  private title: string = 'worker';
  private data;

  constructor(private http: HttpAuthenticationService) { }

  ngOnInit()
  {

  }

  public setData(data): void
  {
    this.data = data;
  }
}
