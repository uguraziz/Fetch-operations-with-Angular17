import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  posts: any = [];
  http = inject(HttpClient);
  private postService = inject(PostService);

  ngOnInit(): void {
    // this.fetchPosts();
    this.loadPosts();
  }

  // example 1 
  // fetchPosts() {
  //   this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //     .subscribe((data: any) => {
  //       this.posts = data;
  //     });
  // }


  // example 2
  // loadPosts() {
  //   this.postService.getPosts().subscribe((data: any) => this.posts = data);
  // }

  // example 3
  loadPosts() {
    this.postService.getPosts().subscribe({
      next: (data: any) => {
        this.posts = data;
        console.log('Posts fetched successfully');
      },
      error: (err) => console.log('Error fetching posts', err)
    });
  }
}
