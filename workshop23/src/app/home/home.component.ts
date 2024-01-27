import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../serices/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories=[{name:"Admin",description:"acount admin",picture:"../assets/images/admin.png"},
  {name:"Customer",description:"acount clent",picture:"../assets/images/customer.png"},
  {name:"Golden",description:"acount golden",picture:"../assets/images/golden.png"},
  {name:"Blocked",description:"acount blocked",picture:"../assets/images/blocked.png"}]
  constructor(private userS:UserServiceService, private r:Router) { }

  ngOnInit(): void {
  }
  showusers(c:string){
    this.userS.categori=c;
    this.r.navigate(['/users'])
  }

}
