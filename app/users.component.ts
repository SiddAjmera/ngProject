import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UsersService } from './users.service';

@Component({
    selector: 'users',
    templateUrl: 'app/users.component.html',
    providers: [ UsersService ]
})

export class UsersComponent implements OnInit{

    title: string = "Users";
    users: User[];
    areUsersLoading: boolean = true;

    constructor(private _usersService: UsersService) {}

    ngOnInit(): void{
        this._usersService.getUsers()
            .subscribe(
                (users: User[]) => this.users = users,
                null,
                () => this.areUsersLoading = false
            );
    }

    deleteConfirmation(userId: string): void{
        var userResponse = confirm('Are you sure you want to delete this user?');
        if(userResponse) this.deleteUser(userId);
    }

    deleteUser(userId: string): void{
        this._usersService.deleteUser(userId)
            .subscribe((user: User) => {
                this.users = this.users.filter(function( user ) {
                    return user['id'] !== userId;
                });
            });
    }
}