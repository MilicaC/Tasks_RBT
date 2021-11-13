import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment.model';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
    movie;
    comments$: Comment[];
    trailer;

    trailerURL;

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.dataService.share.subscribe(x => this.movie = x);

    this.dataService.getCommentsByParametar(this.movie.id)
    .subscribe(data => this.comments$ = data);

    this.dataService.getTrailersByParametar(this.movie.imdbId)
    .subscribe(data => {this.trailer = data; this.trailerURL = "https://www.youtube.com/embed/"+this.trailer.videoId});

    
  }

  onSubmit(data, userCom: NgForm){
    console.log(data);
    this.http.post('https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/'+this.movie.id+'/comments', data)
    .subscribe((result)=>{
      this.ngOnInit();
    })
    userCom.reset();

  }




}
