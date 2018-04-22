import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbModule as PrimengBreadcrumb} from 'primeng/breadcrumb';

@NgModule({
  imports: [
    CommonModule,
    PrimengBreadcrumb
  ],
  declarations: [BreadcrumbComponent],
  exports: [ BreadcrumbComponent ]
})
export class BreadcrumbModule { }
