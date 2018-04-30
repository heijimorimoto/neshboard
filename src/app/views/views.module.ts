import { NgModule } from '@angular/core';

import { ProductModule } from './product/product.module';
import { AppSharedModule } from '../app.shared.module';

@NgModule({
  imports: [
    AppSharedModule,
    ProductModule
  ],
  declarations: [],
  exports: [
    ProductModule
  ]
})
export class ViewsModule { }
