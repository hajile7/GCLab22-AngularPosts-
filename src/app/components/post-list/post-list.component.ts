import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { PostFormComponent } from '../post-form/post-form.component';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent, PostFormComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})

export class PostListComponent {
  allPosts:Post[] = [
    {
      id: 1,
      title: "Example Title",
      thought: "Example thought"
    },
    {
      id: 2,
      title: "Example Title 1",
      thought: "Example thought 1"
    },
    {
      id: 3,
      title: "Example Title 2",
      thought: "Example thought 2"
    }
  ];

  deletePost(p:Post):void {
    let index:number = this.allPosts.findIndex(x => x == p);
    this.allPosts.splice(index, 1);
  }

  addPost(p:Post):void {
    this.allPosts.push(p);
  }

}
