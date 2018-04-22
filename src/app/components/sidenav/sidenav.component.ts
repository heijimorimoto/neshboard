import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit
{
  @ViewChild('drawer') private drawer;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit()
  {
    this.state();
  }

  state()
  {
    this.sidenavService.state$.subscribe(
      (state) => {
        if (state) {
          console.log(this.drawer);
          // this.drawer.toogle();
        }
      });
  }
}
