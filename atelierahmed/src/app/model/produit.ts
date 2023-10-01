export class Produit {
    idProduit : number;
code:string;
libelle:string;
prixUnitaire:number;
tauxTVA:number;
tvaModifiee: boolean;
constructor(
    idProduit : number,
    code:string,
    libelle:string,
    prixUnitaire:number,
    tauxTVA:number,
   
  ) {
    this.idProduit= idProduit;
    this.code = code;
    this.libelle = libelle;
    this.prixUnitaire = prixUnitaire;
    this.tauxTVA =tauxTVA
    this.tvaModifiee = false;
    
  }
}
