import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppSharedModule } from '../../app.shared.module';
import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './services/sidenav.service';

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  declarations: [SidenavComponent],
  providers: [ SidenavService ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
