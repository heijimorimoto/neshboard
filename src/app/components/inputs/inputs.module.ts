import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../app.shared.module';
import { InputModule } from './input/input.module';

@NgModule({
  imports: [
    AppSharedModule,
    InputModule
  ],
  declarations: []
})
export class InputsModule { }
