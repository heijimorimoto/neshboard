import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../app.shared.module';
import { GrowlComponent } from './growl/growl.component';
import { AlertComponent } from './alert/alert.component';
import { GrowlModule } from 'primeng/growl';

@NgModule({
  imports: [
    AppSharedModule,
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
