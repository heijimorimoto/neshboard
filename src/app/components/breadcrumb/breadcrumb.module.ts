import { NgModule } from '@angular/core';
import { AppSharedModule } from '../../app.shared.module';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbModule as PrimengBreadcrumb} from 'primeng/breadcrumb';

@NgModule({
  imports: [
    AppSharedModule,
    PrimengBreadcrumb
  ],
  declarations: [BreadcrumbComponent],
  exports: [ BreadcrumbComponent ]
})
export class BreadcrumbModule { }
