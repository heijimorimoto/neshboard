import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppSharedModule } from './app.shared.module';

import { TranslateModule } from '@ngx-translate/core';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';
import { SwitchModule } from './components/inputs/switch/switch.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppSharedModule,
    TranslateModule.forRoot(),
    SidenavModule,
    SidebarModule,
    BreadcrumbModule,
    SwitchModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
