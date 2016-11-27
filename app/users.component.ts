import { Component } from '@angular/core';

@Component({
    selector: 'users',
    template: `
        <h2>{{ title }}</h2>
    `
})

export class UsersComponent{
    title: string = "Users";
}