import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit
{
  private items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.setItems();
  }


  setItems()
  {
    this.items = [
        {label:'Categories'},
        {label:'Sports'},
        {label:'Football'},
        {label:'Countries'},
        {label:'Spain'},
        {label:'F.C. Barcelona'},
        {label:'Squad'},
        {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'},
        {label:'Cristiano Ronaldo', url: 'https://en.wikipedia.org/wiki/Cristiano_Ronaldo'}
    ];
  }
}
