import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor() { }
  @Input() fils!:String
 fils2!:String
  y="salut ";
 
  @Output() E=new EventEmitter();
  send(){
    this.E.emit(this.fils2);
  }
  edity(val:string){
    this.y=val;
  }

}
