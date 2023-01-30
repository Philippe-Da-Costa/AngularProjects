import { Auteur } from "../auteur/auteur";

export class Livre {
  public idMedia:number;
  public auteur:Auteur[];
  public nbPagesLivre:number;
  public resumeLivre :string;
  public typeLivre :string;
  constructor(){
    this.idMedia =0;
    this.auteur=[]; 
    this.nbPagesLivre =0;
    this.resumeLivre ="";
    this.typeLivre ="";
  }
}
