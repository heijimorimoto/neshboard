import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppSharedModule } from '../../app.shared.module';
import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './services/sidenav.service';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  imports: [
    AppSharedModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  declarations: [SidenavComponent],
  providers: [ SidenavService ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
