import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from './user';
import { UsersService } from './users.service';

@Component({
    moduleId: module.id,
    selector: 'user-form',
    templateUrl: './user-form.component.html'
})

export class UserFormComponent implements OnInit{
    title: string;
    userForm: FormGroup;
    id: string;

    constructor(
        private _fb: FormBuilder, 
        private _usersService: UsersService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ){ }

    saveUser(): void{
        (this.title === 'Add User') ? this.addUser() : this.updateUser();
    }

    addUser(){
        this._usersService.addUser(this.userForm.value)
            .subscribe((user: User) => {
                this.userForm.markAsPristine();
                this._router.navigate(['/users']);
            });
    }

    updateUser(){
        this._usersService.updateUser(this.id, this.userForm.value)
            .subscribe((user: User) => {
                this.userForm.markAsPristine();
                this._router.navigate(['/users']);
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

        this._activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            if(this.id != "add"){
                this.title = 'Edit User';
                this._usersService.getUser(this.id)
                    .subscribe(
                        (user: User) => this.userForm.patchValue(user),
                        (error) => this._router.navigate(['/not-found'])
                    );
            }else{
                this.title = 'Add User';
                this.userForm.patchValue({});
            }
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