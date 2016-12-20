import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserFormComponent, ConfirmDeactivateGuardComponent } from './user-form.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { PostsComponent } from './posts.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserFormComponent },
  { path: 'users/add', component: UserFormComponent, canDeactivate: [ConfirmDeactivateGuardComponent] },
  { path: 'posts', component: PostsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '*', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }