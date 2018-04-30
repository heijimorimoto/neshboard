import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../app.shared.module';
import { LoaderComponent } from './loader.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [
    AppSharedModule,
    ProgressSpinnerModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule { }
