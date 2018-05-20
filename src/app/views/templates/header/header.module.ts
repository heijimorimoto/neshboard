import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../../app.shared.module';
import { HeaderComponent } from './header.component';
import { SidenavModule } from '../../../components/sidenav/sidenav.module';
import { SidebarModule } from '../../../components/sidebar/sidebar.module';
import { PopoverModule } from '../../../components/popover/popover.module';
import { BreadcrumbModule } from '../../../components/breadcrumb/breadcrumb.module';
import { InputModule } from '../../../components/inputs/input/input.module';

@NgModule({
  imports: [
    AppSharedModule,
    BreadcrumbModule,
    SidenavModule,
    SidebarModule,
    PopoverModule,
    InputModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
