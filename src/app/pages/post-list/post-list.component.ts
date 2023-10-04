import { PostService } from './../../services/post.service';
import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,AfterContentInit,OnChanges{
  //angular-ts tarafında dependency injection

  constructor(private postService: PostService){}

  ngOnChanges(){
    console.log("ngOnChange");
  }
  ngOnInit(): void{
    this.fetchPosts();
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }

  fetchPosts(){
    this.postService
    .getAll()
    .subscribe((response) => {
      console.log(response);
    });
  }
}
