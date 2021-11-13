import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { Movie } from '../movie.model';
import { Comment} from '../comment.model';
import { DataService } from '../service/data.service';
import { MethodCall } from '@angular/compiler';





@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  categories$: Category[];
  

  movies$: Movie[];
  comments$: Comment[];
  categorySelected: number;
  movieID: number;

  constructor(private dataService: DataService, private router: Router) { }

 

  ngOnInit() {
    
    this.dataService.getCategories()
  .subscribe(data => this.categories$ = data);

    return this.dataService.getMovies()
    .subscribe(data => this.movies$ = data);

  }
  



  allMovies(){
    this.ngOnInit();
  }

 

  onCategorySelectedEvent(categoryIdSelected:any): void{
    this.dataService.getMoviesByParametar(categoryIdSelected)
    .subscribe(data => this.movies$ = data);
  }

  detailsOdMovie(movie:Movie){
    this.dataService.updateMovieId(movie);
    this.router.navigate(['post', movie.id]);
  }


}
