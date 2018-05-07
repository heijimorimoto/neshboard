import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { AvatarModule } from '../../../components/avatar/avatar.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    AvatarModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
