import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/serices/user.service';

@Component({
  selector: 'app-add2',
  templateUrl: './add2.component.html',
  styleUrls: ['./add2.component.css']
})
export class Add2Component  {
  myForm: FormGroup;
  id!:number;
  user!:User;
/*   updateForm:FormGroup= new FormGroup({
    id:new FormControl(0),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    birthDate:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    profession:new FormControl(''),
    accountCategory:new FormControl(''),

   }); */
  constructor(private actR:ActivatedRoute , private userS :UserServiceService,private R :Router,private formBuilder:FormBuilder){
    this.myForm = this.formBuilder.group({
      id:[0],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]],
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@gmail.com$')]],
      accountCategory: ['Customer', [Validators.required, Validators.pattern('^Customer$')]],
      password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{8,}$')]],
      profession:[''],
      birthDate:[''],
      picture:['']
    });
  }
  ngOnInit():void{
    this.id= this.actR.snapshot.params['id'];
    this.userS.getUserById(this.id).subscribe((data)=>{
      this.user=data;
      this.myForm.setValue(this.user);}

  
    );
  }



updateUser(){
    
 this.userS.updateUser(this.myForm.value).subscribe(()=>this.R.navigate(['users']));

}
}