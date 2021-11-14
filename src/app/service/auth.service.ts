import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('XbzS4jjMPtIctvhuR1GK9MRaoIa19bAg', 'dev-w65y5qg5.us.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult:any) => {
      this.lock.getProfile(authResult.idToken, function(error:any, profile:any){
          if(error){
              throw new Error(error);
          }
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('profile', JSON.stringify(profile)); 
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    console.log('izvrseno login');
    this.lock.show();
    console.log('izvrseno login 2');
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    console.log('izvrseno authenticated')
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    console.log('izvrseno logout')
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    console.log('izbrisan token i profil')
  };
}