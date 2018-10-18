import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FadeOnListComponent } from './layout/fade-on-list/fade-on-list.component';
import { DelayAsyncComponent } from './layout/delay-async/delay-async.component';
import { DynamicListComponent } from './examples/dynamic-list/dynamic-list.component';
import { MorphingObjectComponent } from './examples/morphing-object/morphing-object.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'fade-on-list',
      }, {
        path: 'fade-on-list',
        component: FadeOnListComponent,
      }, {
        path: 'delay-async',
        component: DelayAsyncComponent,
      }, {
        path: 'dynamic-list',
        component: DynamicListComponent,
      }, {
        path: 'morphing-object',
        component: MorphingObjectComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
