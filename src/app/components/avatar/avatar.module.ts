import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../app.shared.module';
import { AvatarComponent } from './avatar.component';
import { AvatarModule as NgxAvatarModule } from 'ngx-avatar';

@NgModule({
  imports: [
    AppSharedModule,
    NgxAvatarModule
  ],
  declarations: [
    AvatarComponent
  ],
  exports: [
    AvatarComponent
  ]
})
export class AvatarModule { }
