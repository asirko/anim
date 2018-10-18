import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MarkdownModule } from 'ngx-markdown';
import { DynamicListComponent } from './examples/dynamic-list/dynamic-list.component';
import { DynamicListDemoComponent } from './examples/dynamic-list/dynamic-list-demo/dynamic-list-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { ExampleComponent } from './examples/example/example.component';
import { MorphingObjectComponent } from './examples/morphing-object/morphing-object.component';
import { MorphingObjectDemoComponent } from './examples/morphing-object/morphing-object-demo/morphing-object-demo.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    CoreRoutingModule
  ],
  declarations: [
    LayoutComponent,
    DynamicListComponent,
    DynamicListDemoComponent,
    MorphingObjectComponent,
    MorphingObjectDemoComponent,
    ExampleComponent,
  ]
})
export class CoreModule { }
