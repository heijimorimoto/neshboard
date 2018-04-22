import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './services/sidenav.service';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  declarations: [SidenavComponent],
  providers: [ SidenavService ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
