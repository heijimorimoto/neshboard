import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../app.shared.module';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { TableModule } from '../../components/table/table.module';
import { ModalModule } from '../../components/overlay/modal/modal.module';
import { MessagesModule } from '../../components/messages/messages.module';

@NgModule({
  imports: [
    AppSharedModule,
    ProductRoutingModule,
    TableModule,
    ModalModule,
    MessagesModule
  ],
  declarations: [
    ProductComponent
  ]
})
export class ProductModule { }
