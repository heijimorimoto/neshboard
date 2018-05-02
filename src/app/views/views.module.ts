import { NgModule } from '@angular/core';

import { AppSharedModule } from '../app.shared.module';
import { UserModule } from './auth/user/user.module';
import { ProductModule } from './product/product.module';

@NgModule({
  imports: [
    AppSharedModule,
    UserModule,
    ProductModule
  ],
  exports: [
    ProductModule
  ]
})
export class ViewsModule { }
