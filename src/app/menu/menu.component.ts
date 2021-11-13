import { Component, OnInit } from '@angular/core';
import { Auth } from '../service/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  constructor(private auth : Auth) { }

  ngOnInit() {
    
  }

}
