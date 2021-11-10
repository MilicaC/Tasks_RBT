import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { Movie } from '../movie.model';
import { DataService } from '../service/data.service';



export class List{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){
  }

}


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  
  categories$: Category[];
  movies$: Movie[];
  categorySelected: number;
  

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    return this.dataService.getCategories()
    .subscribe(data => this.categories$ = data);
  }


  onCategorySelectedEvent(categoryIdSelected:any): void{
    this.dataService.getMoviesByParametar(categoryIdSelected)
    .subscribe(data => this.movies$ = data);
  }

  detailsOdMovie(movie){
    var movieID = movie.id;
    console.log('treba sada otvoriti blog page stranicu');
    this.router.navigate(['post', movieID]);
  }


}
