import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserFormComponent, ConfirmDeactivateGuardComponent } from './user-form.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar.component';
import { NotFoundComponent } from './not-found.component';
import { PostsComponent } from './posts.component';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent, 
    UserFormComponent,
    HomeComponent, 
    NavbarComponent, 
    NotFoundComponent,
    PostsComponent, 
    UsersComponent 
  ],
  bootstrap: [ AppComponent ],
  providers: [ 
    UsersService, 
    ConfirmDeactivateGuardComponent 
  ]
})
export class AppModule { }