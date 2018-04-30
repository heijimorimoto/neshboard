import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../../app.shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from './input.component';

@NgModule({
  imports: [
    AppSharedModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
