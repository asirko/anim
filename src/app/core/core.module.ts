import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FadeOnListComponent } from './layout/fade-on-list/fade-on-list.component';
import { DelayAsyncComponent } from './layout/delay-async/delay-async.component';
import { MarkdownModule } from 'ngx-markdown';
import { DynamicListComponent } from './examples/dynamic-list/dynamic-list.component';
import { DynamicListDemoComponent } from './examples/dynamic-list/dynamic-list-demo/dynamic-list-demo.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    CoreRoutingModule
  ],
  declarations: [
    LayoutComponent,
    FadeOnListComponent,
    DelayAsyncComponent,
    DynamicListComponent,
    DynamicListDemoComponent,
  ]
})
export class CoreModule { }
