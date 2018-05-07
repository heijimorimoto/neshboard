import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppSharedModule } from '../../app.shared.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthLoginService } from './services/auth.login.service';

@NgModule({
  imports: [
    AppSharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthLoginService
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
