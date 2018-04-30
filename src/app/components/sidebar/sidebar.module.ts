import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../app.shared.module';
import { SidebarComponent } from './sidebar.component';
import { SidebarModule as PrimengSidebar } from 'primeng/sidebar';

@NgModule({
  imports: [
    AppSharedModule,
    PrimengSidebar
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule { }
