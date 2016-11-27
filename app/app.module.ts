import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar.component';
import { PostsComponent } from './posts.component';
import { UsersComponent } from './users.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    NavbarComponent, 
    PostsComponent, 
    UsersComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }