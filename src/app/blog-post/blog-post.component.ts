import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
    movie;
    comments$: Comment[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.share.subscribe(x => this.movie = x);

    this.dataService.getCommentsByParametar(this.movie.id)
    .subscribe(data => this.comments$ = data);
    // console.log(this.comments$.length);
  }

}
