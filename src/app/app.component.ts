import { Component, OnInit } from '@angular/core';
// import { Movie } from './movie.model';
// import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  

  constructor(){
    
  }
  title = 'blog-app';
  message = 'Welcome to my app!!!!'

  

  ngOnInit(){
      
  }
}
