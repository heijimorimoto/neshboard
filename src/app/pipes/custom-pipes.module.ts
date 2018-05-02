import { NgModule } from '@angular/core';
import { AppSharedModule } from '../app.shared.module';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
  imports: [
    AppSharedModule
  ],
  declarations: [TruncatePipe],
  exports: [
    TruncatePipe
  ]
})
export class CustomPipesModule { }
