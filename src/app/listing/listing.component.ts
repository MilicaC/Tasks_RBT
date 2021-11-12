import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { Movie } from '../movie.model';
import { Comment} from '../comment.model';
import { DataService } from '../service/data.service';





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

    return this.dataService.getCategories()
    .subscribe(data => this.categories$ = data);
  }

 

  onCategorySelectedEvent(categoryIdSelected:any): void{
    console.log(categoryIdSelected + 'ovo je taj event koji je porsldjen');
    this.dataService.getMoviesByParametar(categoryIdSelected)
    .subscribe(data => this.movies$ = data);
    console.log(this.movies$ + "ovo je lista filmova");
  }

  detailsOdMovie(movie:Movie){
    console.log(movie.id + " ovo je proslednjeno sa fprme");
    this.dataService.updateMovieId(movie);
    this.router.navigate(['post', movie.id]);
  }


}
