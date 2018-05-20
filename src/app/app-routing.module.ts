import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './views/auth/auth.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    AuthModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
