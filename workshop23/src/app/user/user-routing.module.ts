import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Add2Component } from './add2/add2.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';

import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'', component:UsersListComponent},
  {path:'add', component:AddUserComponent},
  {path:'add2/:id', component:Add2Component},
 // {path:'edit/:id', component:UpdateUserComponent}
  //{path:"",redirectTo:"user",pathMatch:"full"},
  //{path:"user",component:UserComponent,children:[
  //  {path:"adduser",component:AddUserComponent},
  //  {path:"editUser/:param",component:EdituserComponent}]}];
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }


