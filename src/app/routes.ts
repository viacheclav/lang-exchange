import { Routes } from "@angular/router";
import { PostListComponent } from "./post-list.component";
import { PostDetailsComponent } from "./posts/post-details/post-details.component";

export const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' }
]
