import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeapiService {
public fakeApiURL = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get<any>(this.fakeApiURL);
  }
  createPost(input) {
    let body = {title : input.value};
    return this.http.post<any>(this.fakeApiURL , body);

  }
  editPost() {}
  deletePost() {}
}
