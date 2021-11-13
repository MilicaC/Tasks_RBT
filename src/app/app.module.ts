import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListingComponent } from './listing/listing.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { DataService} from './service/data.service';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Auth } from './service/auth.service';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    ListingComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    BlogPostComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    
  ],
  providers: [DataService, AUTH_PROVIDERS, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
