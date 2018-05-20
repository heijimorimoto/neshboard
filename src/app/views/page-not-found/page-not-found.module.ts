import { NgModule } from '@angular/core';
import { AppSharedModule } from '../../app.shared.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    AppSharedModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule { }
