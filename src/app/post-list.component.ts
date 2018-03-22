import { Component, OnInit } from "@angular/core";
import { PostService } from "./postService/postService.service";

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {

  posts: any[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}
