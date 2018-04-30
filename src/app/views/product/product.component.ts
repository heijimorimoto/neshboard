import { Component, OnInit } from '@angular/core';
import { HttpAuthenticationService } from '../../services/http/http-authentication.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit
{
  private data;

  constructor(private http: HttpAuthenticationService) { }

  ngOnInit()
  {
    this.http.getData('products')
    .subscribe(result => this.setData(result));
  }

  setData(data)
  {
    this.data = data;
  }

}
