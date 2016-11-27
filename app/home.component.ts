import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    template: `
        <h2>{{ title }}</h2>
    `
})

export class HomeComponent{
    title: string = "Home";
}