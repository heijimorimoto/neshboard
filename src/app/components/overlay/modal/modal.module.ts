import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../../app.shared.module';
import { ModalComponent } from './modal.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    AppSharedModule,
    DialogModule,
    ButtonModule
  ],
  declarations: [ModalComponent],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
