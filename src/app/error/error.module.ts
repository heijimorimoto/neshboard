import { NgModule } from '@angular/core';

import { AppSharedModule } from '../app.shared.module';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [
    AppSharedModule
  ],
  declarations: [ErrorComponent]
})
export class ErrorModule { }
