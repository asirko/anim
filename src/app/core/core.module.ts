import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FadeOnListComponent } from './layout/fade-on-list/fade-on-list.component';
import { DelayAsyncComponent } from './layout/delay-async/delay-async.component';

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
    FadeOnListComponent,
    DelayAsyncComponent
  ]
})
export class CoreModule { }
