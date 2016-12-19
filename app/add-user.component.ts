import { CanDeactivate } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { User } from './user';
import { UsersService } from './users.service';

@Component({
    moduleId: module.id,
    selector: 'add-user',
    templateUrl: './add-user.component.html'
})

export class AddUserComponent implements OnInit{
    title: string = 'Add a User';
    addUserForm: FormGroup;

    constructor(
        private _fb: FormBuilder, 
        private _usersService: UsersService, 
        private _location: Location
    ){ }

    addUser(): void{
        this._usersService.addUser(this.addUserForm.value)
            .subscribe((user: User) => {
                this.addUserForm.markAsPristine();
                if(user) this._location.back();
            });
    }

    ngOnInit(): void{
        this.addUserForm = this._fb.group({
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
        return this.addUserForm.dirty;
    }
}

@Injectable()
export class ConfirmDeactivateGuardComponent implements CanDeactivate<AddUserComponent>{
    canDeactivate(target: AddUserComponent) {
        if(target.hasChanges()){
            return window.confirm('You have unsaved changes. Are you sure you want to continue?');
        }
        return true;
    }
}