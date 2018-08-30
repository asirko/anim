import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [
    CoreRoutingModule
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    AboutComponent
  ]
})
export class CoreModule { }
