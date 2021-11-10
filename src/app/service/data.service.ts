import { Injectable } from '@angular/core';
import { Category } from '../category.model';
import { Comment } from '../comment.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Movie } from '../movie.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  movieUrl= 'https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies';
  categoryUrl='https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/categories';
  commentUrl = 'https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/4/comments';

  constructor(private http : HttpClient) { }


  getMoviesByParametar(categoryIdSelected: string){
    let param1 = new HttpParams().set('categoryId', categoryIdSelected)
    return this.http.get<Movie[]>(this.movieUrl, {params: param1});
  }

  getCommentsByParametar(movieIdSelected: string){

  }

  getCategories(){
    return this.http.get<Category[]>(this.categoryUrl);
  }

  getComments(){
    return this.http.get<Comment[]>(this.commentUrl);
  }

}
