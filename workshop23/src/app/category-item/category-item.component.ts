import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent {
@Input() categorie!:any;
@Output ()  enveloppe=new  EventEmitter()
send(){
  this.enveloppe.emit(this.categorie.name)
}
}
