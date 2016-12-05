import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map'

import { User } from './user';

@Injectable()
export class UsersService{
    private _url = "http://jsonplaceholder.typicode.com/users";
    
    constructor(private _http: Http) {}

    getUsers(): Observable<User[]>{
        return this._http.get(this._url)
                   .map((response: Response) => response.json() as User[]);
    }
}