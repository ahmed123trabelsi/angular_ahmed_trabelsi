import { Component } from '@angular/core';
import {Fournisseur} from '../model/fournisseur'
@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent {
list: Fournisseur[]=[
 { idFournisseur:105,
code :'A104B89',
libelle : 'MyTeck'},
{idFournisseur:1,code:"1ABC4522",libelle:"hp"},
{idFournisseur:2,code:"2ABC4522",libelle:"dell"},
{idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
{idFournisseur:400,code:"40ABC452",libelle:"asus"}
];
hide: boolean = false;
toggleHide() {
  this.hide = !this.hide; 
  console.log('hide:', this.hide); 
}
getColor(code: string): boolean {
 
  return code.startsWith('2A');
}
deletefournisseur(indexx:number){this.list.splice(indexx,1);} 

}
