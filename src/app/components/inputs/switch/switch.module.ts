import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../../app.shared.module';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SwitchComponent } from './switch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AppSharedModule,
    InputSwitchModule,
    FormsModule
  ],
  declarations: [SwitchComponent],
  exports: [
    SwitchComponent
  ]
})
export class SwitchModule { }
