
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { AddUserComponent } from './add-user/add-user.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../serices/user.service';
import { UsersListComponent } from './users-list/users-list.component';

import { Add2Component } from './add2/add2.component';



@NgModule({
  declarations: [ 
    AddUserComponent,
    UsersListComponent,
    Add2Component

  ],

    providers:[],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
