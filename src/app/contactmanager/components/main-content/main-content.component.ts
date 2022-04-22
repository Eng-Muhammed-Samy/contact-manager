import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Note } from '../../interfaces/Note';
import { User } from '../../interfaces/User';
import { PostsService } from '../../services/Posts.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
 Posts:Note[] = [];
 userimge: string = ''
 id!: number;
  constructor(private userImg: UserService,private post: PostsService, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      this.id = params['id'];
      this.post.getUserPost(this.id).subscribe({
        next: data=> this.Posts = data,
        error: err=> console.log(err)
      });

      this.userImg.getUserById(this.id).subscribe({
        next: data=> this.userimge = data.username,
        error: err=> console.log(err)

      })
    })


  }

}
