import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../app.shared.module';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { TableModule } from '../../components/table/table.module';

@NgModule({
  imports: [
    AppSharedModule,
    ProductRoutingModule,
    TableModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
