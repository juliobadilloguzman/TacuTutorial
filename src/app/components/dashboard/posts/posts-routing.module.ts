import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsViewComponent } from './posts-view/posts-view.component';


const routes: Routes = [
  {path: '', component: PostsViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
