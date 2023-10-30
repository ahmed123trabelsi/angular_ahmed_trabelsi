import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/serices/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  myUser:User ={
    "id": 99,
    "firstName": "Mohamed",
    "lastName": "Ben Mohamed",
    "birthDate": "1999-06-30",
    "email": "mohamed@esprit.tn",
    "password": "test",
    "profession": "Software Engineer",
    "accountCategory": "Customer",
    "picture": "https://bootdey.com/img/Content/avatar/avatar1.png"
  }

  constructor(private userS:UserServiceService, private R:Router){}

  add(){ 
  
    this.userS.addUser(this.myUser).subscribe(()=>
    { 
      alert('added User!!');
      //redirection vers list users
      this.R.navigate(['users']);
  })
  }

  

  
}
