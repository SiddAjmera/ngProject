import { CanDeactivate } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { User } from './user';
import { UsersService } from './users.service';

@Component({
    moduleId: module.id,
    selector: 'user-form',
    templateUrl: './user-form.component.html'
})

export class UserFormComponent implements OnInit{
    title: string = 'Add a User';
    userForm: FormGroup;

    constructor(
        private _fb: FormBuilder, 
        private _usersService: UsersService, 
        private _location: Location
    ){ }

    addUser(): void{
        this._usersService.addUser(this.userForm.value)
            .subscribe((user: User) => {
                this.userForm.markAsPristine();
                if(user) this._location.back();
            });
    }

    ngOnInit(): void{
        this.userForm = this._fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ])],
            phone: '',
            address: this._fb.group({
                street: '',
                suite: '',
                city: '',
                zipcode: ''
            })
        });
    }

    hasChanges(): boolean{
        return this.userForm.dirty;
    }
}

@Injectable()
export class ConfirmDeactivateGuardComponent implements CanDeactivate<UserFormComponent>{
    canDeactivate(target: UserFormComponent) {
        if(target.hasChanges()){
            return window.confirm('You have unsaved changes. Are you sure you want to continue?');
        }
        return true;
    }
}