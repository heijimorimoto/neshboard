import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../app.shared.module';
import { TableModule as PrimeTable } from 'primeng/table';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    AppSharedModule,
    PrimeTable
  ],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
