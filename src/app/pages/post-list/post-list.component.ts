import { LoadingService } from './../../services/loading.service';
import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
import { GetAllPostModel } from 'src/app/models/post/getAllPostModel';
@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  postList!: GetAllPostModel[];
  //Angular-TS tarafında dependency injection nasıl yapılır?
  constructor(private postService: PostService, private loadingService: LoadingService) {}

  //angular hooks
  ngOnChanges() {}
  ngAfterContentInit(): void {}
  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe((value) => {
      console.log("Globaldeki loading değeri değişti yeni değer: ", +value);
    })

    this.fetchPosts();
  }
  fetchPosts() {
    this.postService.getAll().subscribe((response) => {
      this.postList = response;
    });
  }
}
