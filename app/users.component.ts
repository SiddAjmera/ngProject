import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UsersService } from './users.service';

import 'rxjs/add/operator/toPromise';

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
            .toPromise()
            .then((users: User[]) => this.users = users)
            .catch(err => console.log("Got an error getting users from UsersService : ", err));
    }
}