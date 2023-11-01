
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { AddUserComponent } from './add-user/add-user.component';

import { EdituserComponent } from '../edituser/edituser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../serices/user.service';
import { UsersListComponent } from './users-list/users-list.component';
import { User } from '../model/user';

@NgModule({
  declarations: [ 
    AddUserComponent,
    UsersListComponent],

    providers:[UserServiceService],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule
    ,
    ReactiveFormsModule
  ]
})
export class UserModule { }
