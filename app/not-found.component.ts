import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'not-found',
    template: `<h2>{{ title }}</h2>`
})

export class NotFoundComponent{
    title: string = 'Not Found';
}