import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit
{
  // html: string = `
  //   <div><button type="button" class="btn btn-default">Edit Profile</button></div>
  //   <div><button type="button" class="btn btn-success">Logout</button></div>`;

  constructor() { }

  ngOnInit() {
  }

}
