import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Post, Comment } from './post';

import 'rxjs/add/operator/map'

@Injectable()
export class PostsService{
    private _url = 'http://jsonplaceholder.typicode.com/posts';
    constructor(private _http: Http) {}

    getPosts(filter?: Object): Observable<Post[]>{
        let url: string;
        (filter && filter['userId']) ? url = `${this._url}?userId=${filter['userId']}` : url = this._url;
        return this._http.get(url)
                         .map((response: Response) => response.json() as Post[]);
    }

    getPostsByUser(userId: string): Observable<Post[]>{
        return this._http.get(`${this._url}?userId=${userId}`)
                         .map((response: Response) => response.json() as Post[]);
    }

    getComments(id: number): Observable<Comment[]>{
        return this._http.get(`${this._url}/${id}/comments`)
                         .map((response: Response) => response.json() as Comment[]);
    }
}