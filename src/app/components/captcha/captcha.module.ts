import { NgModule } from '@angular/core';
import { AppSharedModule } from '../../app.shared.module';

import { CaptchaComponent } from './captcha.component';

@NgModule({
  imports: [
    AppSharedModule
  ],
  declarations: [
    CaptchaComponent
  ]
})
export class CaptchaModule { }
