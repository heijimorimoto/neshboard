import { NgModule } from '@angular/core';

import { AppSharedModule } from '../app.shared.module';
import { FormComponent } from './form.component';

@NgModule({
  imports: [
    AppSharedModule
  ],
  declarations: [FormComponent]
})
export class FormModule { }
