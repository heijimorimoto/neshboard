import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';

import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    CommonModule,
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
