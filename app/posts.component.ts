import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Comment, Post }  from './post';
import { SpinnerComponent } from './spinner.component';
import { PostsService } from './posts.service';
import { User } from './user';
import { UsersService } from './users.service';

import 'rxjs/add/observable/forkJoin';

@Component({
    moduleId: module.id,
    selector: 'posts',
    templateUrl: './posts.component.html'
})

export class PostsComponent implements OnInit{
    title: string = "Posts";
    posts: Post[] = [];
    users: User[] = [];
    arePostsLoading: boolean = true;
    areCommentsLoading: boolean = true;
    selectedPost: Post;

    constructor(private _postsService: PostsService, private _usersService: UsersService) {}

    private getUsers(){
        this._usersService.getUsers()
            .subscribe(
                (users: User[]) => this.users = users,
                (errorResponse) => console.log("Error getting users from UsersService: ", errorResponse)
            );
    }

    private getPosts(filter?: Object){
        this.arePostsLoading = true;
        this._postsService.getPosts(filter)
            .subscribe(
                (posts: Post[]) => this.posts = posts,
                (errorResponse) => console.log("Error getting posts from PostsService: ", errorResponse),
                () => this.arePostsLoading = false
            );
    }

    ngOnInit(){
        this.getUsers();
        this.getPosts();
    }

    postSelected(post: Post){
        this.areCommentsLoading = true;
        this.selectedPost = post;
        this._postsService.getComments(post.id)
            .subscribe(
                (comments: Comment[]) => this.selectedPost.comments = comments,
                (errorResponse) => console.log("Error getting comments from UsersService: ", errorResponse),
                () => this.areCommentsLoading = false
            );
    }

    fetchPostsByUser(filter?: Object){
        this.selectedPost = null;
        this.getPosts(filter);
    }

    onPageChanged(event: Event){
        console.log('onPageChanged got called', event);
    }
}