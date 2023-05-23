import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.apiService.getAllPosts().subscribe(posts => {
      this.posts = posts.slice(0, 10);
    });
  }

  createPost(title: string, body: string) {
    const post = {
      title: title,
      body: body,
      userId: 1
    };

    this.apiService.createPost(post).subscribe(newPost => {
      this.posts.unshift(newPost); // Add new post at the beginning of the array
    });
  }

  updatePost(postId: number, title: string, body: string) {
    const post = {
      id: postId,
      title: title,
      body: body,
      userId: 1
    };

    this.apiService.updatePost(postId, post).subscribe(updatedPost => {
      const index = this.posts.findIndex(p => p.id === postId);
      if (index !== -1) {
        this.posts[index] = updatedPost;
      }
    });
  }

  deletePost(postId: number) {
    this.apiService.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter(p => p.id !== postId);
    });
  }
}
