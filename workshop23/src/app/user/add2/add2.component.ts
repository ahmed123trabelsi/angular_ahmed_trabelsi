import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/serices/user.service';

@Component({
  selector: 'app-add2',
  templateUrl: './add2.component.html',
  styleUrls: ['./add2.component.css']
})
export class Add2Component  {
  id!:number;
  user!:User;
  updateForm:FormGroup= new FormGroup({
    id:new FormControl(0),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    birthDate:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    profession:new FormControl(''),
    accountCategory:new FormControl(''),
   });
  constructor(private actR:ActivatedRoute , private userS :UserServiceService,private R :Router){}
  ngOnInit():void{
    this.id= this.actR.snapshot.params['id'];
    this.userS.getUserById(this.id).subscribe((data)=>{
      this.user=data;
      this.updateForm.setValue(this.user);}

  
    );
  }



updateUser(){
    
  this.userS.updateUser(this.updateForm.value).subscribe(()=>this.R.navigate(['users']));
}
}