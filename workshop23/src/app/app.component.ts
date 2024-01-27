import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(HeaderComponent)
  private headChild!:HeaderComponent
  title = 'workshop23';
  receivedValue!: string; // Déclaration de la variable pour stocker la valeur reçue

  PARENT = "salut";
receive(data: string): void{
  this.receivedValue = data; // Récupération de la valeur émise depuis le composant enfant
}
showChild(val:string){
  this.headChild.edity(val);
  alert(val)
}
}
