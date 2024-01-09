import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const BASE_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private http = inject(HttpClient);

  constructor() { }

  getPosts() {
    return this.http.get(BASE_URL);
  }
}
