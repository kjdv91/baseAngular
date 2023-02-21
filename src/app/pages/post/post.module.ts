import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { Post2Component } from './post2/post2.component';


@NgModule({
  declarations: [
    PostComponent,
    Post2Component
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
