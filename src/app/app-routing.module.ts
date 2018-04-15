import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

const appRoutes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    AuthModule,
    DashboardModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
