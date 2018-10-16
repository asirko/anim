import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FadeOnListComponent } from './layout/fade-on-list/fade-on-list.component';
import { DelayAsyncComponent } from './layout/delay-async/delay-async.component';
import { DynamicListComponent } from './examples/dynamic-list/dynamic-list.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
