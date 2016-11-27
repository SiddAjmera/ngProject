import { Component } from '@angular/core';

@Component({
    selector: 'posts',
    template: `
        <h2>{{ title }}</h2>
    `
})

export class PostsComponent{
    title: string = "Posts";
}