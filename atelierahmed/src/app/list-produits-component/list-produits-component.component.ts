import { Component } from '@angular/core';
import {Produit }  from '../model/produit';
@Component({
  selector: 'app-list-produits-component',
  templateUrl: './list-produits-component.component.html',
  styleUrls: ['./list-produits-component.component.css']
})
export class ListProduitsComponentComponent {
  listproduit: Produit[]=[
    {idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.2,tvaModifiee :false},
    {idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980,tvaModifiee :false},
    {idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980,tvaModifiee : false},
    {idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980,tvaModifiee : false},
    {idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02,tvaModifiee : false},
    ]
   
    adjustTVA(produit: any) {
      produit.tauxTVA = 0.2; 
      produit.tvaModifiee = true; 
    }
    
    searchText!:string;
  filterUsers(){
    return !this.searchText? this.listproduit: this.listproduit.filter(user=>user.code.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  ajouterProduit() {
    // Récupérez les valeurs du formulaire
    const idProduit = (document.getElementById('idProduit') as HTMLInputElement).value;
    const libelle = (document.getElementById('libelle') as HTMLInputElement).value;
    const code = (document.getElementById('code') as HTMLInputElement).value;
    const prixUnitaire = (document.getElementById('prixUnitaire') as HTMLInputElement).value;
    const tauxTVA = (document.getElementById('tauxTVA') as HTMLInputElement).value;

    // Créez un nouvel objet produit
    const nouveauProduit: Produit = {
      idProduit: parseInt(idProduit),
      code: code,
      libelle: libelle,
      prixUnitaire: parseFloat(prixUnitaire),
      tauxTVA: parseFloat(tauxTVA),
      tvaModifiee:false
    };

    // Ajoutez le nouveau produit à la liste
    this.listproduit.push(nouveauProduit);

    // Réinitialisez le formulaire
    (document.getElementById('idProduit') as HTMLInputElement).value = '';
    (document.getElementById('libelle') as HTMLInputElement).value = '';
    (document.getElementById('code') as HTMLInputElement).value = '';
    (document.getElementById('prixUnitaire') as HTMLInputElement).value = '';
    (document.getElementById('tauxTVA') as HTMLInputElement).value = '';
  }
}
