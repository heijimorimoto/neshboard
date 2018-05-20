import { NgModule } from '@angular/core';

import { AppSharedModule } from '../app.shared.module';
import { HeaderModule } from './templates/header/header.module';
import { ProductModule } from './product/product.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    AppSharedModule,
    HeaderModule,
    PageNotFoundModule,
    ProductModule,
    DashboardModule
  ],
  exports: [
    HeaderModule,
    ProductModule
  ]
})
export class ViewsModule { }
