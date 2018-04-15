import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrowlComponent } from './growl/growl.component';
import { AlertComponent } from './alert/alert.component';
import { GrowlModule } from 'primeng/growl';

@NgModule({
  imports: [
    CommonModule,
    GrowlModule
  ],
  declarations: [
    GrowlComponent,
    AlertComponent
  ],
  exports: [
    GrowlComponent
  ]
})
export class MessagesModule { }
