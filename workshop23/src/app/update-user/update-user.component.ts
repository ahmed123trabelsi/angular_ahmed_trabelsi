import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../model/user';
import { UserServiceService } from '../serices/user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  {

/*   id!:number;
  user!:User;

  constructor(private userS:UserServiceService, private ActR:ActivatedRoute, private R:Router) { }

  ngOnInit(): void {
    this.id = this.ActR.snapshot.params['id'];
    this.userS.getUserById(this.id).subscribe(data=>this.user=data);
  }

  updateUser(){
    this.userS.updateUser(this.user).subscribe(()=>{
      alert('User Updated!!');
      this.R.navigate(['users']);
    });
  } */
}