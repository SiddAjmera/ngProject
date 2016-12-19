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

    constructor(private _usersService: UsersService) {}

    ngOnInit(): void{
        this._usersService.getUsers()
            .subscribe((users: User[]) => this.users = users);
    }
}