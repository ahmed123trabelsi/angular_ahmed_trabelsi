import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/serices/user.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent  {


// La variable permetant de récupérer la valeur de recherche
filter!:string;

  constructor(  private userS: UserServiceService) { }

  listUsers:User[] = [];

  ngOnInit(): void {
    this.userS.getAllUsers().subscribe(data => this.listUsers=data);
  }

  delete(id:number){
    this.userS.deleteUser(id).subscribe(()=>this.ngOnInit());
  }
  
}
