import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FadeOnListComponent } from './layout/fade-on-list/fade-on-list.component';
import { DelayAsyncComponent } from './layout/delay-async/delay-async.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
