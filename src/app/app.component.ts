import { Component, OnInit } from '@angular/core';
import { Auth }  from './service/auth.service';
// import { Movie } from './movie.model';
// import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  

  constructor(private auth: Auth){
    
  }
  title = 'blog-app';
  message = 'Welcome to my app!!!!'

  

  ngOnInit(){
      
  }
}
