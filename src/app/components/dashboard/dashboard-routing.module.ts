import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';


const routes: Routes = [
  { path: '', component: DashboardViewComponent, children: [
    { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
