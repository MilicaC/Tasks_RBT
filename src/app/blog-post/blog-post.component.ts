import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment.model';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
    movie;
    comments$: Comment[];
    trailer;
    islogged:string;
    trailerURL;
    invalid = false;

  constructor(private dataService: DataService, private http: HttpClient,
    private hardcodedService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.dataService.share.subscribe(x => this.movie = x);

    this.dataService.getCommentsByParametar(this.movie.id)
    .subscribe(data => this.comments$ = data);

    this.dataService.getTrailersByParametar(this.movie.imdbId)
    .subscribe(data => {this.trailer = data; this.trailerURL = "https://www.youtube.com/embed/"+this.trailer.videoId});

    // this.islogged = this.dataService.share2.subscribe(data => this.islogged = data);
  }

  onSubmit(data, userCom: NgForm){
    if(this.hardcodedService.isUserLoggedIn() == true){
    this.http.post('https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/'+this.movie.id+'/comments', data)
    .subscribe((result)=>{
      this.ngOnInit();
    })
    userCom.reset();
    }else{
      this.invalid =true;
    }

  } 
 



}
