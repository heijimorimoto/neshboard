import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../../app.shared.module';
import { SwitchComponent } from './switch.component';

@NgModule({
  imports: [
    AppSharedModule
  ],
  declarations: [SwitchComponent],
  exports: [
    SwitchComponent
  ]
})
export class SwitchModule { }
