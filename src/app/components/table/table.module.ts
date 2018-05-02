import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../app.shared.module';
import { TableModule as PrimeTable } from 'primeng/table';
import { TableComponent } from './table.component';
import { CustomPipesModule } from '../../pipes/custom-pipes.module';

@NgModule({
  imports: [
    AppSharedModule,
    PrimeTable,
    CustomPipesModule
  ],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
