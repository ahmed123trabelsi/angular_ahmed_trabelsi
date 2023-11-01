import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/serices/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

l!:number;
ngOnInit():void{
  this.userS.getAllUsers().subscribe(data=> this.l=data.length+1)
}

  constructor(private userS:UserServiceService, private R:Router){}

  add(f:NgForm){ 
    const myUser:User={
      "id": this.l,
      "firstName": f.value.name,
      "lastName": f.value.lastname,
      "birthDate": f.value.birthDate,
      "accountCategory": f.value.accountCategory,
      "email": f.value.email,
      "password": f.value.pwd,
      "picture": "https://bootdey.com/img/Content/avatar/avatar3.png",
      "profession":f.value.profession
    }

    this.userS.addUser(myUser).subscribe(()=>
    { 
      alert('added User!!');
      //redirection vers list users
      this.R.navigate(['users']);
  })
  }

  

  
}
