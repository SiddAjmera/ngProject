import { Component, Input } from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
        <i class="fa fa-spinner fa-spin fa-3x"
           *ngIf="isVisible">
        </i>
    `
})

export class SpinnerComponent{
    @Input() isVisible: boolean;
}