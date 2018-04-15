import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterModule } from './register/register.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    RegisterModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule { }
