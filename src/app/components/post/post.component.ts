import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent {
  @Input() displayPost = {} as Post;

  @Output() deleteEvent = new EventEmitter<Post>();

  emitDelete(): void {
    this.deleteEvent.emit(this.displayPost);
  }
}
