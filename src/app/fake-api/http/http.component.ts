import { FakeapiService } from './../../services/fakeapi.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
public postData: any[] = [];
fakeApiURL= "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  //GET OR READ HTTP METHOD
  ngOnInit(): void {
    this.http.get<any>(this.fakeApiURL).subscribe(posts => {
      this.postData=posts;
    });
  }
//HTTP CREATE POST
  createPost(input) {
  //console.log(input.value);
  
  let body = {title: input.value};
  this.http.post<any>(this.fakeApiURL , body).subscribe(post =>{
    //console.log(post);
this.postData.splice (0,0,post)   

  })
  
}

//HTTP DELETE method for removing
removeTitle(post) {
  this.http.delete<any>(`${this.fakeApiURL}/${post.id}`).subscribe((_)=>{
   // console.log("successfully deleted" , post);
    let index = this.postData.indexOf(post);
    this.postData.splice(index , 1)
  })
  
}
//HTTP PUT/PATCH or Updating
updatePost(post) {
  this.http.patch<any>(`${this.fakeApiURL}/${post.id}`, post).subscribe((update) =>{
    console.log(update.title);
    
  })
  
}
// constructor(private fakeApi : FakeapiService){}

// //GET or READ HTTP GET method
// ngOnInit() : void {
//   this.fakeApi.getPost().subscribe((posts) => {
//     this.postData = posts;
//   })
// }

// //HTTP CREATE (post method)
// createPost(post) {
//   this.fakeApi.createPost(post).subscribe((posts) => {
//     console.log(posts);
//     this.postData.splice(0,0,posts);
    
//   })
// }
}
