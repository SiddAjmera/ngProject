import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent, ConfirmDeactivateGuardComponent } from './add-user.component';
import { HomeComponent } from './home.component';
import { PostsComponent } from './posts.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddUserComponent, canDeactivate: [ConfirmDeactivateGuardComponent] },
  { path: 'posts', component: PostsComponent },
  { path: '*', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }