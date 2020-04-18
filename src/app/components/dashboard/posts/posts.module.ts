import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { EditPostComponent } from './edit-post/edit-post.component';


@NgModule({
  declarations: [PostsViewComponent, EditPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    MaterialModule
  ],
  entryComponents: [EditPostComponent]
})
export class PostsModule { }
