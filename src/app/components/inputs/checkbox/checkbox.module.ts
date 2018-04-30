import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../../app.shared.module';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [
    AppSharedModule
  ],
  declarations: [CheckboxComponent]
})
export class CheckboxModule { }
