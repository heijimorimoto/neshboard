import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppSharedModule } from '../../app.shared.module';
import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './services/sidenav.service';

@NgModule({
  imports: [
    AppSharedModule,
    MatSidenavModule
  ],
  declarations: [SidenavComponent],
  providers: [ SidenavService ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
