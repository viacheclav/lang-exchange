import { Component, OnInit } from "@angular/core";
import { PostService } from "../../postService/postService.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: '../../posts/post-details/post-details.component.html'
})
export class PostDetailsComponent implements OnInit {
  post: any;
  constructor(private postService: PostService, private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.post = this.postService.getPost(+this.route.snapshot.params['id']);
  }
}
