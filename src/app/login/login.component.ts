import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username='user'
  password=''
  errorMessage='Error credentials'
  invalidLogin=false
  valiable:boolean

  constructor(private router:Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService, private dataService: DataService) { }

  ngOnInit() {
  }

   handleLogin(){
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
        this.dataService.updateLoggedIn(true);
        this.invalidLogin = false
        this.router.navigate(['listing']);
     }else{
       this.invalidLogin=true
     }
   }


}
