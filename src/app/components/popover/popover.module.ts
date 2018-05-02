import { NgModule } from '@angular/core';
import { AppSharedModule } from '../../app.shared.module';

import { PopoverComponent } from './popover.component';
import { PopoverModule as PrimePopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  imports: [
    AppSharedModule,
    PrimePopoverModule.forRoot()
  ],
  declarations: [PopoverComponent],
  exports: [
    PopoverComponent
  ]
})
export class PopoverModule { }
