import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
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
