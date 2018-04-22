import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';

import {SidebarModule as PrimengSidebar} from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    PrimengSidebar
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule { }
