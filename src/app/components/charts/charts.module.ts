import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../app.shared.module';
import { ChartsComponent } from './charts.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    AppSharedModule,
    ChartModule
  ],
  declarations: [
    ChartsComponent
  ],
  exports: [
    ChartsComponent
  ]
})
export class ChartsModule { }
