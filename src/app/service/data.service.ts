import { Injectable } from '@angular/core';
import { Category } from '../category.model';
import { Comment } from '../comment.model';
import {  BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Movie } from '../movie.model';
import { text } from '@angular/core/src/render3';
import { Trailer } from '../trailer.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private content = new BehaviorSubject<Movie>(null);
  public share = this.content.asObservable();

  movieUrl= 'https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies';
  categoryUrl='https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/categories';
  commentUrl = 'https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/4/comments';
  trailerUrl = 'https://imdb-api.com/en/API/YouTubeTrailer/k_b276hgve/tt0120338';

  constructor(private http : HttpClient) { }

  updateMovieId(movie){
    this.content.next(movie);
  }

  

  getMoviesByParametar(categoryIdSelected: string){
    let param1 = new HttpParams().set('categoryId', categoryIdSelected)
    return this.http.get<Movie[]>(this.movieUrl, {params: param1});
  }
  getVideoUrl(trailer: Trailer){
    return 'https://www.youtube.com/embed/' + trailer.videoId;
  }

  getCommentsByParametar(movieID: string){
    let param1 = new HttpParams().set('movieId', movieID);
    return this.http.get<Comment[]>('https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/'+movieID+'/comments', {params: param1});
    
  }

  getTrailersByParametar(imdbId: string){
    let param1 = new HttpParams().set('imDbId', imdbId);
    return this.http.get<Trailer>('https://imdb-api.com/en/API/YouTubeTrailer/k_b276hgve/'+ imdbId, {params: param1});
  }


  getCategories(){
    return this.http.get<Category[]>(this.categoryUrl);
  }

  getComments(){
    return this.http.get<Comment[]>(this.commentUrl);
  }

  getMovies(){
    return this.http.get<Movie[]>(this.movieUrl);
  }




}
