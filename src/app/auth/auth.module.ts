import { NgModule } from '@angular/core';

import { AppSharedModule } from '../app.shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterModule } from './register/register.module';

@NgModule({
  imports: [
    AppSharedModule,
    AuthRoutingModule,
    RegisterModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule { }
