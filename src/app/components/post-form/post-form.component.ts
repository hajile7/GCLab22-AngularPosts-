import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../../models/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {

  display:boolean = false;
  
  formPost:Post = {} as Post;
  @Output() createEvent = new EventEmitter<Post>();

  createEmit(): void {
    this.createEvent.emit({...this.formPost})
  }

  toggleDisplay(): void {
    this.display = !this.display;
  }
}
