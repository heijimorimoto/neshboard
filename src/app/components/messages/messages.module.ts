import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../app.shared.module';
import { GrowlComponent } from './growl/growl.component';
import { AlertComponent } from './alert/alert.component';
import { GrowlModule } from 'primeng/growl';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    AppSharedModule,
    GrowlModule,
    ButtonModule
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
